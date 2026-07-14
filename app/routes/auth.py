import logging
from datetime import datetime, timedelta, timezone
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from werkzeug.security import check_password_hash, generate_password_hash

from backend.database import get_db

router = APIRouter(prefix="/auth", tags=["Authentication"])
logger = logging.getLogger("auth_performance")

# Session Config Metrics
JWT_SECRET = "PERFORMANCE_SECRET_KEY_CHANGE_IN_PRODUCTION"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 120 # ✅ Strict 120-minute secure validation boundary

def create_token(data: dict) -> str:
    """Generates an optimized session token with a 120-minute expiration."""
    import jwt
    to_encode = data.copy()
    expire = datetime.now(timezone.utc) + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, JWT_SECRET, algorithm=ALGORITHM)

@router.post("/login")
def login(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db)
):
    """
    Executes fast password validation via optimized Werkzeug hashing layers,
    preventing backend CPU spikes under concurrent user volume.
    """
    try:
        email = (form_data.username or "").strip().lower()
        password = form_data.password or ""
        
        # Optimized indexed direct lookups 
        # (Ensure you run: CREATE INDEX idx_user_email ON users(email) in your DB)
        from backend.models import User # Local import to prevent circular dependency
        user = db.query(User).filter(User.email == email).first()
        
        if not user:
            logger.warning("Login failed: user not found for email=%s", email)
            raise HTTPException(status_code=401, detail="Invalid email or password")
            
        # Fast verification check
        if not check_password_hash(user.password, password):
            logger.warning("Login failed: password mismatch for email=%s", email)
            raise HTTPException(status_code=401, detail="Invalid email or password")
            
        token = create_token({"sub": user.email})
        return {"access_token": token, "token_type": "bearer"}
        
    except HTTPException:
        raise
    except Exception as e:
        logger.exception("Login failed with server error")
        raise HTTPException(status_code=500, detail=f"Login failed: {str(e)}")