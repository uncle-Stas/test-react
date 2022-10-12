//
import { useState, useEffect } from 'react';

const App = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('Mouting phase: same when componentDidMount runs');
  }, []);

  return <button onClick={() => setValue(value + 1)}>{value}</button>;
};

export default App;
