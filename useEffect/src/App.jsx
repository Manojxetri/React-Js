import { useState, useEffect } from 'react';

function App() {
  const [formattedTime, setFormattedTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFormattedTime(new Date().toLocaleTimeString());
    }, 1000);

    
    return () => {
      clearInterval(intervalId);
      console.log("Interval cleared");
    };
  }, []);

  return (
    <>
      <h2>{formattedTime}</h2>
    </>
  );
}

export default App;
