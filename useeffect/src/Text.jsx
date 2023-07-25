import { useState, useEffect } from "react";
export default function Text() {
  const [text, setText] = useState("");
  useEffect(() => {
    console.log("COMP MOUNTED");
    return () => {
      console.log("COMP UNMOUNTED!");
    };
  }, []);
  return (
    <div>
      <input onChange={event => setText(event.target.value)} />
      <p>{text}</p>
    </div>
  );
}
