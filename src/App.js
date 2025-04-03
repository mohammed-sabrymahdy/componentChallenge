import "./App.css";
import Header from "./Header";
import Post from "./Post";
import Side from "./Side";

function App() {
  return (
    <div className="App">
      <Header />
      {/**container+aside */}
      <main style={{ display: "flex", justifyContent: "space-between" }}>
        {/**container of section */}
        <section style={{ width: "60%" }}>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </section>
        {/**container of section */}

        {/** Side Component (Sidebar) */}
        <Side />
      </main>
    </div>
  );
}

export default App;
