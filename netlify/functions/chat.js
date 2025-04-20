require("dotenv").config();

module.exports.handler = async function (event, context) {
  const { prompt } = JSON.parse(event.body || '{}');
  const model = "google/learnlm-1.5-pro-experimental:free";

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ model, prompt }),
  });

  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify({ message: data?.choices?.[0]?.text || "Keine Antwort" }),
  };
};
