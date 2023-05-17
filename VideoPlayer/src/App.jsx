import { useState, createContext } from "react";
import Video from "./Components/Video";
import ChangeVideo from "./Components/ChangeVideo";
export const playerContext = createContext();
const videos = {
  deer: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
  snail: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
  cat: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
  spider: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4",
};
function App() {
  const [crrVideo, setCrrVideo] = useState(videos.deer);
  const [crrOption, setCrrOption] = useState("option1");
  return (
    <playerContext.Provider value={{ setCrrVideo, videos, crrVideo, setCrrOption, crrOption }}>
      <ChangeVideo />
      <Video />
    </playerContext.Provider>
  );
}

export default App;
