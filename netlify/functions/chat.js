require("dotenv").config();

module.exports.handler = async function (event, context) {
  const { input } = JSON.parse(event.body || '{}');
  prompt = buildPrompt(input);
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

function buildPrompt(input) {
  let prompt = "You are a travel specialist. Based on the following information, suggest a specific travel destination that best matches the given criteria:";
  prompt += "\n- Travel period: " + input.date.range + " (Duration: " + input.date.duration + ")";
  prompt += "\n- Budget: " + input.budget;
  prompt += "\n- Preferred climate: " + input.climate;
  prompt += "\n- Interests: " + input.interests.join(", ");
  prompt += "\n- Preferred transportation methods: " + input.transportation.join(", ");
  prompt += "\n\nThe destination should be realistically reachable and fit within the given budget. Pay special attention to matching the preferred climate and interests.";
  prompt += "\nPlease respond with only the name of the recommended destination and a short sentence explaining why it is a good match.";
  return prompt
}
