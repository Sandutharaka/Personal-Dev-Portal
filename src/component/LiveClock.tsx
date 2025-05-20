import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

export default function LiveClock() {
  const [time, setTime] = useState<string>(format(new Date(), 'HH:mm:ss'));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(format(new Date(), 'HH:mm:ss'));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-6 bg-blue-50 rounded-lg">
      <h2 className="text-xl font-semibold">Live Clock</h2>
      <p className="text-2xl mt-2">{time}</p>
    </div>
  );
}