import jwt
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session

from backend.database import get_db
from backend.models import User

# OAuth2 Scheme Configuration
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/login")

JWT_SECRET = "PERFORMANCE_SECRET_KEY_CHANGE_IN_PRODUCTION"
ALGORITHM = "HS256"

def get_current_user(
    token: str = Depends(oauth2_scheme), 
    db: Session = Depends(get_db)
) -> User:
    """
    Decodes the session token, verifies validity, and returns the authenticated user.
    Provides dependency-injected route security across the backend.
    """
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        # Decode token payload
        payload = jwt.decode(token, JWT_SECRET, algorithms=[ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            raise credentials_exception
    except jwt.PyJWTError:
        raise credentials_exception

    # Query the database to verify the user exists
    user = db.query(User).filter(User.email == email).first()
    if user is None:
        raise credentials_exception
        
    return user