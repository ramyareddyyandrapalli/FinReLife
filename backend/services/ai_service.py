import os
import importlib
from dotenv import load_dotenv

load_dotenv()

GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY", "")


def call_gemini(prompt: str):
    if not GOOGLE_API_KEY:
        return None

    try:
        genai = importlib.import_module("google.generativeai")

        genai.configure(api_key=GOOGLE_API_KEY)

        model = genai.GenerativeModel("gemini-1.5-flash")

        response = model.generate_content(prompt)

        return response.text

    except Exception:
        return None


def rule_based_response(prompt: str):
    return (
        "Based on your financial profile, prioritize high-interest loans, "
        "maintain regular EMI payments, and negotiate with your lender for a "
        "one-time settlement where appropriate."
    )


def generate_ai_response(prompt: str):
    response = call_gemini(prompt)

    if response:
        return response

    return rule_based_response(prompt)


def generate_negotiation_strategy(*args):
    """
    Supports both:
    1. generate_negotiation_strategy(user, loans, financial_health, settlement_data)
    2. generate_negotiation_strategy(loan_details, profile)
    """

    # -------------------------
    # Test case (2 arguments)
    # -------------------------
    if len(args) == 2:

        loan_details, profile = args

        lender = loan_details.get("lender_name", "Lender")
        amount = loan_details.get("outstanding_amount", 0)
        surplus = profile.get("monthly_surplus", 0)

        if not GOOGLE_API_KEY:
            return {
                "status": "fallback_template",
                "generated_letter": f"""
Dear {lender},

I am experiencing temporary financial hardship.

My outstanding loan amount is ₹{amount}.

My current monthly surplus is ₹{surplus}.

I kindly request consideration for a one-time settlement.

Thank you.
"""
            }

        prompt = f"""
Generate a professional loan settlement letter.

Lender: {lender}
Outstanding Amount: {amount}
Monthly Surplus: {surplus}
"""

        return {
            "status": "ai_generated",
            "generated_letter": generate_ai_response(prompt)
        }

    # -------------------------
    # API case (4 arguments)
    # -------------------------
    elif len(args) == 4:

        user, loans, financial_health, settlement_data = args

        prompt = f"""
User Monthly Income:
{getattr(user, 'monthly_income', 0)}

Financial Health:
{financial_health}

Settlement Analysis:
{settlement_data}

Suggest the best negotiation strategy.
"""

        return generate_ai_response(prompt)

    else:
        raise ValueError("Invalid arguments passed to generate_negotiation_strategy")