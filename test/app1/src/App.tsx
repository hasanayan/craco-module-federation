import React from "react";
import "./App.css";
//@ts-expect-error
import Button from "app2/Button";

function App() {
  return (
    <div className="App">
      This is app1
      <React.Suspense fallback="loading">
        <Button />
      </React.Suspense>
    </div>
  );
}

export default App;
