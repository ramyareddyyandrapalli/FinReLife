from google import genai

API_KEY = "AQ.Ab8RN6Kw_Si9ajgkqm3VlTw5RYJIAzoJoNxfV_pxOL2Fb1YWog"

client = genai.Client(api_key=API_KEY)

response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents="Say Hello"
)

print(response.text)