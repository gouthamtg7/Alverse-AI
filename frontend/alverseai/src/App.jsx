function App() {
  async function handleClick() {
    try {
      const response = await fetch("http://localhost:2750/api/test"); // FIXED PORT
      if(!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <>
      <button id="test-button" onClick={handleClick}>Click Me!</button>
    </> 
  );
}

export default App;
