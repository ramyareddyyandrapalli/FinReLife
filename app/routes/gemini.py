from fastapi import APIRouter

from app.gemini import call_gemini

router = APIRouter()


@router.get("/ai-negotiation-strategy")
def ai_strategy():

    prompt = """
Generate a professional debt settlement negotiation strategy
for a borrower having multiple loans and financial stress.
"""

    return call_gemini(prompt)