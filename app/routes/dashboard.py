from fastapi import APIRouter
from backend.financial_engine import FinancialEngine

router=APIRouter()

@router.get("/financial-health")

def health():

    loans=[
        {
            "loan_name":"Home Loan",
            "outstanding_amount":500000,
            "emi":15000,
            "interest_rate":8,
            "overdue_months":1
        },
        {
            "loan_name":"Personal Loan",
            "outstanding_amount":200000,
            "emi":12000,
            "interest_rate":15,
            "overdue_months":5
        }
    ]

    return FinancialEngine.calculate_financial_health(
        monthly_income=60000,
        monthly_expenses=25000,
        loans=loans
    )