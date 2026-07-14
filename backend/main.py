from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import text

from backend.database import get_db, engine
from backend.models import Base, User, Loan, AIHistory
from backend.auth import get_current_user
from backend.financial_engine import calculate_financial_health
from backend.settlement_engine import calculate_settlement_probability
from backend.services.ai_service import generate_negotiation_strategy

# Create database tables
Base.metadata.create_all(bind=engine)

# Create FastAPI app
app = FastAPI(
    title="FinAI Backend",
    version="1.0.0"
)

# -------------------------------
# Database Test
# -------------------------------
@app.get("/test-db")
def test_database(db: Session = Depends(get_db)):
    try:
        db.execute(text("SELECT 1"))
        return {"database": "Connected"}
    except Exception as e:
        return {"error": str(e)}

# -------------------------------
# Home Route
# -------------------------------
@app.get("/")
def home():
    return {
        "message": "Welcome to FinAI Backend",
        "status": "Running Successfully"
    }

# -------------------------------
# Health Check
# -------------------------------
@app.get("/health")
def health():
    return {"status": "OK"}