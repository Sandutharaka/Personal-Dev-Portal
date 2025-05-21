import { useState, useEffect } from 'react';

export default function LiveClock() {
  const [time, setTime] = useState(new Date());
  const [is12Hour, setIs12Hour] = useState(true);
  const [showSeconds, setShowSeconds] = useState(true);
  const [dateString, setDateString] = useState('');

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now);
      setDateString(now.toLocaleDateString(undefined, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format time based on preferences
  const formatTime = () => {
    let options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: is12Hour
    };

    if (showSeconds) {
      options.second = '2-digit';
    }

    return time.toLocaleTimeString(undefined, options);
  };

  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-blue-400">Live Clock</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => setIs12Hour(!is12Hour)}
            className="text-xs bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded"
            aria-label={`Switch to ${is12Hour ? '24-hour' : '12-hour'} format`}
          >
            {is12Hour ? '12h' : '24h'}
          </button>
          <button
            onClick={() => setShowSeconds(!showSeconds)}
            className="text-xs bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded"
            aria-label={`${showSeconds ? 'Hide' : 'Show'} seconds`}
          >
            {showSeconds ? 'Hide sec' : 'Show sec'}
          </button>
        </div>
      </div>

      <div className="text-center space-y-4">
        <p className="text-5xl md:text-6xl font-mono text-white">
          {formatTime()}
        </p>
        <p className="text-gray-400 text-lg">
          {dateString}
        </p>
        <div className="pt-4 border-t border-gray-700">
          <p className="text-gray-500 text-sm">
            Your local time | {Intl.DateTimeFormat().resolvedOptions().timeZone}
          </p>
        </div>
      </div>
    </div>
  );
}
