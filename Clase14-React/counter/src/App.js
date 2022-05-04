import { CounterWithHook } from "./components/CounterWithHook"
function App() {
  return (
    <>
      <h1>Esta es mi App</h1>
      <pre>Aquí debajo renderizamos el componente Counter, es decir, App básicamente no hace un pomo</pre>
      <CounterWithHook />
    </>
  );
}

export default App;
