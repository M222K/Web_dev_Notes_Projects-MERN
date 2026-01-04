import Youtube from './Youtube';

function App() {
  return (
    <div className="App">
      <>
        <h1>Welcome to the react app</h1>
        <Youtube />
        {/* we cant have multiple elements in one element here so we use a wmpty fragment that display everything in one element */}
      </>
    </div>
  );
}

export default App;
