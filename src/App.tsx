import "./App.css";
import Card from "./Card";
import movies from './movies.json'

function App() {
  return (
    <div className="page">
      <div className="layout">
        <main className="container">
          <Card {...movies[0]}/>
          <Card {...movies[1]}/>
          <Card {...movies[2]}/>
        </main>
        <article className="container">
          <Card {...movies[3]}/>
          <Card {...movies[2]}/>
          <Card {...movies[1]}/>
        </article>
      </div>
    </div>
  );
}

export default App;
