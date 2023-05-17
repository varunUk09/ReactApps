import { useContext } from "react";
import { playerContext } from "../App.jsx";
export default function ChangeVideo() {
  const { setCrrVideo, videos, crrOption, setCrrOption } = useContext(playerContext);
  const setVideo = (idx, vl) => {
    setCrrVideo(videos[idx]);
    setCrrOption(vl);
  };
  return (
    <ul>
      <label>
        <input
          type='radio'
          name='radio'
          onChange={() => {
            setVideo("deer", "option1");
          }}
          checked={crrOption === "option1"}
        />
        Deer
      </label>
      <label>
        <input
          type='radio'
          name='radio'
          onChange={() => {
            setVideo("snail", "option2");
          }}
          checked={crrOption === "option2"}
        />
        Snail
      </label>
      <label>
        <input
          type='radio'
          name='radio'
          onChange={() => {
            setVideo("cat", "option3");
          }}
          checked={crrOption === "option3"}
        />
        Cat
      </label>
      <label>
        <input
          type='radio'
          name='radio'
          onChange={() => {
            setVideo("spider", "option4");
          }}
          checked={crrOption === "option4"}
        />
        Spider
      </label>
    </ul>
  );
}
