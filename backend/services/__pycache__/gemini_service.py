import os
import importlib
from typing import Dict, Any

GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY", "")

def _call_gemini(prompt: str) -> str:
    """Call Google Gemini API if key is available, otherwise use rule-based fallback."""
    if not GOOGLE_API_KEY:
        return None # Will fall through to fallback
        
    try:
        genai = importlib.import_module("google.generativeai")
        genai.configure(api_key=GOOGLE_API_KEY)
        model = genai.GenerativeModel("gemini-1.5-flash")
        response = model.generate_content(prompt)
        return response.text
    except ImportError:
        return None
    except Exception as e:
        print(f"Gemini API error: {e}")
        return None

def generate_negotiation_strategy(loan_details: Dict[str, Any], financial_profile: Dict[str, Any]) -> Dict[str, Any]:
    """
    Generates negotiation options. Fallback triggers automatically if 
    the external artificial intelligence endpoints time out or fail validation.
    """
    lender = loan_details.get("lender_name", "Lender")
    outstanding = loan_details.get("outstanding_amount", 0)
    settlement_target = outstanding * 0.60  # Suggested 60% rate
    
    prompt = f"""
    Generate an official bank debt settlement strategy for {lender}.
    Outstanding debt: {outstanding}. Financial surplus: {financial_profile.get('monthly_surplus')}.
    """
    
    ai_response = _call_gemini(prompt)
    
    if ai_response:
        return {
            "status": "success",
            "source": "google-gemini-v1.5",
            "generated_letter": ai_response
        }
        
    # Rule-Based Backup Framework implementation
    fallback_letter = f"""Subject: Request for One-Time Settlement (OTS) - Loan Account

To,
The Settlement Department,
{lender}

Dear Sir/Madam,

I am writing to formally request a One-Time Settlement (OTS) for my outstanding loan account.

ACCOUNT DETAILS:
Lender: {lender}
Outstanding Amount: Rs. {outstanding:,.2f}

FINANCIAL SITUATION:
Due to genuine financial hardship, I am unable to service my loan per the original schedule. 

SETTLEMENT PROPOSAL:
I respectfully propose a One-Time Settlement at 60.0% of the outstanding amount:
Settlement Amount: Rs. {settlement_target:,.2f}

Yours sincerely,
[Your Full Name]
"""
    return {
        "status": "fallback_template",
        "source": "system_rule_engine",
        "generated_letter": fallback_letter.strip()
    }