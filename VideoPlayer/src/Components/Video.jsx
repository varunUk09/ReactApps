import { useContext } from "react";
import { playerContext } from "../App.jsx";
export default function Video() {
  const { crrVideo } = useContext(playerContext);
  return (
    <div key={crrVideo}>
      <video width='320' height='240' controls>
        <source src={crrVideo} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
