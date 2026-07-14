import os
import importlib
from dotenv import load_dotenv
import os

load_dotenv()

GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")

print("API KEY:", GOOGLE_API_KEY)


def call_gemini(prompt: str) -> str:
    """
    Call Google Gemini API if key is available,
    otherwise use rule-based fallback.
    """

    if not GOOGLE_API_KEY:
        return "Google API Key not found. Using fallback response."

    try:
        genai = importlib.import_module("google.generativeai")

        genai.configure(api_key=GOOGLE_API_KEY)

        model = genai.GenerativeModel("gemini-1.5-flash")

        response = model.generate_content(prompt)

        return response.text

    except ImportError:
        return "google-generativeai package is not installed."

    except Exception as e:
        print(f"Gemini API Error: {e}")
        return f"Gemini Error: {e}"