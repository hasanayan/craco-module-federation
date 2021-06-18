//@ts-ignore
import RemoteComponent from "app2/App";
import { Suspense } from "react";
import "./index.css";
import "./App.css";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Suspense fallback="Loading...">
        <RemoteComponent />
      </Suspense>
    </div>
  );
}

export default App;
