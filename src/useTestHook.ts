import { useState } from 'react'

const useTestHook = (message: string) => {
  const [testState, setTestState] = useState(message);

  return {
    testState,
    setTestState,
  }
}

export default useTestHook