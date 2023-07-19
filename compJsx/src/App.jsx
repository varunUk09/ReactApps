import { people } from "./data.jsx";
import "./App.css";
import Profile from "./Profile.jsx";

function App() {
  // const listItems = people.map(p => {
  //   return (
  //     <li
  //       key={p.id}
  //       style={{
  //         display: "flex",
  //         alignItems: "center",
  //         gap: "30px",
  //         marginBottom: "30px",
  //       }}>
  //       <img
  //         src={p.img}
  //         style={{
  //           width: "100px",
  //           height: "100px",
  //           borderRadius: "100vmax",
  //         }}
  //       />
  //       <p>{p.name}</p>
  //       <small>{p.profession}</small>
  //     </li>
  //   );
  // });
  const listItems = people.map(p => {
    return <Profile p={p} key={p.id} />;
  });
  return (
    <>
      <ul>{listItems}</ul>
    </>
  );
}

export default App;
