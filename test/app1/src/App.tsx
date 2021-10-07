import React from "react";
import "./App.css";
//@ts-expect-error
import Button from "app2/Button";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      This is app1
      <React.Suspense fallback="loading">
        <Button />
        <StyledButton />
      </React.Suspense>
    </div>
  );
}

const StyledButton = styled(Button)`
  color: blue;
`;

export default App;
