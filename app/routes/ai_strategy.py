from fastapi import APIRouter
from app.gemini import call_gemini

router = APIRouter()


@router.get("/ai-negotiation-strategy")
def ai_negotiation_strategy():

    prompt = """
Generate a professional debt settlement negotiation strategy.

Borrower Details:
Monthly Income: ₹60,000

Loan 1
Lender: HDFC
Outstanding Amount: ₹3,00,000
Interest Rate: 15%
EMI: ₹18,000
Overdue Months: 5

Loan 2
Lender: ICICI
Outstanding Amount: ₹9,00,000
Interest Rate: 8%
EMI: ₹22,000
Overdue Months: 0

Generate:
1. Negotiation Strategy
2. Settlement Advice
3. Risk Analysis
4. Financial Suggestions
"""

    response = call_gemini(prompt)

    return {
        "status": "success",
        "strategy": response
    }