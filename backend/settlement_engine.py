from typing import List


class SettlementPrediction:

    @staticmethod
    def predict(user, loans):
        """
        Predict settlement percentage and risk for each loan.
        """

        income = user["monthly_income"]

        total_outstanding = sum(
            loan["outstanding_amount"] for loan in loans
        )

        if income > 0:
            debt_to_income = (total_outstanding / income) * 100
        else:
            debt_to_income = 0

        settlement_results = []

        for loan in loans:

            settlement = 50
            risk_score = 0

            if loan["overdue_months"] > 0:
                settlement += 5
                risk_score += 20

            if loan["interest_rate"] > 12:
                settlement += 5
                risk_score += 10

            if debt_to_income > 80:
                settlement += 5
                risk_score += 15

            settlement = max(40, min(75, settlement))

            if risk_score >= 40:
                risk = "High"
            elif risk_score >= 20:
                risk = "Medium"
            else:
                risk = "Low"

            settlement_results.append({
                "loan_id": loan["loan_id"],
                "lender_name": loan["lender_name"],
                "loan_type": loan["loan_type"],
                "settlement_percentage": settlement,
                "risk_score": risk_score,
                "risk": risk
            })

        return settlement_results


def calculate_settlement_probability(user, loans):
    """
    Wrapper function so backend.main can call this directly.
    Supports both SQLAlchemy objects and dictionaries.
    """

    # Convert user object to dictionary if necessary
    if isinstance(user, dict):
        user_data = user
    else:
        user_data = {
            "monthly_income": getattr(user, "monthly_income", 0)
        }

    # Convert loan objects to dictionaries if necessary
    loan_data = []

    for loan in loans:

        if isinstance(loan, dict):
            loan_data.append(loan)

        else:
            loan_data.append({
                "loan_id": getattr(loan, "id", 0),
                "lender_name": getattr(loan, "lender_name", ""),
                "loan_type": getattr(loan, "loan_type", "Personal Loan"),
                "outstanding_amount": getattr(loan, "outstanding_amount", 0),
                "interest_rate": getattr(loan, "interest_rate", 0),
                "overdue_months": getattr(loan, "overdue_months", 0)
            })

    return SettlementPrediction.predict(user_data, loan_data)
