import { useState } from 'react';

export default function RandomFact() {
  const [fact, setFact] = useState('Click the button to get a fact!');
  const [loading, setLoading] = useState(false);

  const fetchFact = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
      const data = await response.json();
      setFact(data.text);
    } catch (error) {
      setFact('Failed to load fact');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
      <h2 className="text-xl text-green-400">Random Fact</h2>
      <p className="text-gray-300 my-4">{fact}</p>
      <button 
        onClick={fetchFact}
        className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg"
        disabled={loading}
      >
        {loading ? 'Loading...' : 'New Fact'}
      </button>
    </div>
  );
}
