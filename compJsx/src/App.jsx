import { people } from "./data.jsx";
import "./App.css";
import Profile from "./Profile.jsx";

function App() {
  return (
    <>
      <ul>
        {people.map(p => {
          return <Profile p={p} key={p.id} />;
        })}
      </ul>
    </>
  );
}

export default App;
