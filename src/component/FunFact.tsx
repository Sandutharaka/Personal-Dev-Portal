import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Define the response interface
interface FactResponse {
  text: string;
  // Add other fields if needed
}

const FunFact = () => {
  const [fact, setFact] = useState<string>('Loading...');

  const fetchFact = async () => {
    try {
      const response = await axios.get<FactResponse>('https://uselessfacts.jsph.pl/random.json?language=en');
      setFact(response.data.text);
    } catch (error) {
      setFact('Failed to fetch fact.');
    }
  };

  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <div className="p-6 bg-green-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">Random Fun Fact</h2>
      <p className="mt-2 italic">{fact}</p>
      <button
        onClick={fetchFact}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Refresh Fact
      </button>
    </div>
  );
};

export default FunFact;
