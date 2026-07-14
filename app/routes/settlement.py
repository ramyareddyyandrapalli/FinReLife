from fastapi import APIRouter
from backend.settlement_prediction import SettlementPrediction

router = APIRouter()

@router.get("/settlement-predictor")
def settlement_prediction():

    user = {
        "monthly_income": 60000
    }

    loans = [
        {
            "loan_id": 1,
            "lender_name": "HDFC",
            "loan_type": "Personal",
            "outstanding_amount": 300000,
            "interest_rate": 15,
            "emi": 18000,
            "overdue_months": 5
        },
        {
            "loan_id": 2,
            "lender_name": "ICICI",
            "loan_type": "Home",
            "outstanding_amount": 900000,
            "interest_rate": 8,
            "emi": 22000,
            "overdue_months": 0
        }
    ]

    return SettlementPrediction.predict(user, loans)