from fastapi import FastAPI
from pydantic import BaseModel
import openai

openai.api_key = "YOUR_API_KEY"

app = FastAPI()

class Request(BaseModel):
    message: str

@app.post("/chat")
def chat(req: Request):
    response = openai.ChatCompletion.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "Ти консультант з ремонту"},
            {"role": "user", "content": req.message}
        ]
    )
    return {"reply": response.choices[0].message.content}
