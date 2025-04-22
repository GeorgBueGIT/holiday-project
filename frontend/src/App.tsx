import { useState } from 'react'
import './App.css'

function App() {

  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
const [unUsed, setUnUsed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setResponse('');

    try {
      const res = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: input }),
      })

      const data = await res.json();

      setResponse(data.message);
    } catch (error) {
      console.error('Fehler beim Senden der Nachricht:', error);
    } finally {
      setLoading(false);
    }

    setInput('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
      </form>

      {loading && <p>Loading...</p>}
      {response && <div><strong>Response:</strong> {response}</div>}
    </div>
  );
}

export default App
