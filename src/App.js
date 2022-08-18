import React, { createContext, useContext, useMemo, useState } from "react";

const CounterValueContext = createContext();
const CounterActionContext = createContext();

export default function App() {
  return (
    <CounterProvider>
      <div>
        <Value />
        <Buttons />
      </div>
    </CounterProvider>
  );
}

function CounterProvider({ children }) {
  const [counter, setCounter] = useState(1);
  const actions = useMemo(
    () => ({
      increase() {
        setCounter((prev) => prev + 1);
      },
      decrease() {
        setCounter((prev) => prev - 1);
      },
    }),
    []
  );
  return (
    <CounterValueContext.Provider value={counter}>
      <CounterActionContext.Provider value={actions}>
        {children}
      </CounterActionContext.Provider>
    </CounterValueContext.Provider>
  );
}

function useCounterValue() {
  const value = useContext(CounterValueContext);
  if (value === undefined) {
    throw new Error("useCounterState should be used within CounterProvider");
  }
  return value;
}

function useCounterAction() {
  const value = useContext(CounterActionContext);
  if (value === undefined) {
    throw new Error("useCounterState should be used within CounterProvider");
  }
  return value;
}

function Value() {
  console.log("values");
  const counter = useCounterValue();
  return <h1>{counter}</h1>;
}

function Buttons() {
  console.log("buttons");
  const actions = useCounterAction();
  return (
    <div>
      <button onClick={actions.increase}>+</button>
      <button onClick={actions.decrease}>-</button>
    </div>
  );
}
