import "./styles.css";
import { useState, useEffect } from "react";
import { Comment } from "./Comment";
import { Greeting } from "./Greeting";
export default function App() {
  const [comment, greeting] = getInsertions(); // Destructuring
  return (
    <div className="App">
      <h1>{greeting}</h1>
      <h2>{comment}</h2>
    </div>
  );
}

function getInsertions() {
  const [strComment, setStrComment] = useState("");
  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    setStrComment("Start editing to see some magic happen!");
    setGreeting("CodeSandbox");
  }, [strComment, greeting]);
  return [
    new Comment({ comment: strComment }),
    new Greeting({ name: greeting }),
  ];
}
