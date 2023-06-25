import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="items-center">
      <div className="flex">
        <button onClick={() => setStep((step) => step - 1)}>-</button>
        <p>Step:{step}</p>
        <button onClick={() => setStep((step) => step + 1)}>+</button>
      </div>

      <div className="flex">
        <button onClick={() => setCount((count) => count - step)}>-</button>
        <p>Count:{count}</p>
        <button onClick={() => setCount((count) => count + step)}>+</button>
      </div>

      <p>
        {count === 0
          ? "Today is "
          : `${Math.abs(count)} days ${
              count > 0 ? "from today is " : "ago was "
            }`}
        {date.toDateString()}
        {/* {Math.abs(count)} days {count >= 0 ? "from" : "ago"} today is{" "}
        {date.toDateString()} */}
      </p>
    </div>
  );
}

export default App;
