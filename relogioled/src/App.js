import { createGlobalStyle } from "styled-components";
import Home from './components/Home';

const GlobalStyle = createGlobalStyle`
body{
  /* box-sizing: border-box;
  /* height: 100vh;
  width: 100vw; */
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}

div{
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  border-radius: 4px;
}
`

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Home/>
    </div>
  );
}

export default App;
