import { useState, useEffect } from 'react'

const useTestHook = (message: string) => {
  const [testState, setTestState] = useState(message);
  const [catFact, setCatFact] = useState('');

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then((data) => {
        setCatFact(data.fact);
      });
  }, []);

  return {
    catFact,
    testState,
    setTestState,
  }
}

export default useTestHook