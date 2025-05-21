import { useState } from 'react';

export default function RandomFact() {
  const [fact, setFact] = useState('Click the button to discover an interesting fact!');
  const [loading, setLoading] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const fetchFact = async () => {
    setLoading(true);
    setIsClicked(true);
    try {
      const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
      const data = await response.json();
      setFact(data.text);
    } catch (error) {
      setFact('Failed to load fact. Try again!');
    } finally {
      setLoading(false);
      setTimeout(() => setIsClicked(false), 1000); // Reset button color after 1s
    }
  };

  return (
    <div className="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700 text-center">
      <h2 className="text-2xl font-bold text-purple-400 mb-6">Did You Know?</h2>
      
      <div className="min-h-24 flex items-center justify-center mb-8">
        <p className="text-gray-300 text-lg italic">
          {loading ? 'Fetching an amazing fact...' : `"${fact}"`}
        </p>
      </div>

      <div className="flex justify-center">
        <button
          onClick={fetchFact}
          disabled={loading}
          className={`px-6 py-3 rounded-full text-white font-medium transition-all duration-300 ${
            isClicked 
              ? 'bg-blue-700 shadow-inner'
              : 'bg-blue-600 hover:bg-blue-500 shadow-lg'
          } ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
        >
          {loading ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Loading...
            </span>
          ) : (
            'Get Random Fact'
          )}
        </button>
      </div>
    </div>
  );
}
