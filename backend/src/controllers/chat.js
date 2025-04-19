// import database from "../../config/database.js";

export const chat = async (req, res) => {
  console.log("Chat request received");
  const { prompt } = req.body;
  const model = "google/learnlm-1.5-pro-experimental:free";

  const response = await sendPrompt(model, prompt);

  res.status(200).json({ message: response.choices[0].text });
};

async function sendPrompt(model, prompt) {
  try {
    console.log(process.env.OPENROUTER_API_KEY);
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ model: model, prompt: prompt }),
      }
    );

    const data = await response.json();
    console.log("Antwort vom Server:", data);
    return data;
  } catch (err) {
    console.error("Fehler beim Abrufen der Antwort:", err);
  }
}
