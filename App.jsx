import useToggle from "./useToggle";

function App() {
  const [value, toggleValue] = useToggle(true);
  // console.log("val.....", value);
  const [data, setdata] = useToggle(true);
  return (
    <>
      <button onClick={() => toggleValue(!value)}>Toggle</button>
      <button onClick={() => toggleValue(false)}>Hide</button>
      <button onClick={() => toggleValue(true)}>Show</button>
      {value ? (
        <h3
          style={{
            color: "red",
            backgroundColor: "black",
            textAlign: "center",
          }}
        >
          Custom Hooks in React Js
        </h3>
      ) : null}

      <hr />
      <button onClick={() => setdata(!data)}>Toggle</button>
      <button onClick={() => setdata(false)}>Hide</button>
      <button onClick={() => setdata(true)}>Show</button>
      {data ? <h3>Second Heading</h3> : null}
    </>
  );
}

export default App;
