import { useState } from 'react';

const UseStateDemo: React.FC = () => {
  const [count] = useState<number>(0);
  return (
    <div>
      useStateDemo
      <span>{count}</span>
    </div>
  );
};

export default UseStateDemo;
