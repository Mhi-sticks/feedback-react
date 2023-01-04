function App() {
  const title = "blog post";
  const body = "body post";
  const comments = [
    { id: 1, text: "coment one" },
    { id: 1, text: "coment two" },
    { id: 1, text: "coment three" },
  ];
  return (
    <div className="container">
      <h1> {title.toUpperCase()} </h1>
      <p> {body} </p>

      <div className="comments">
        <h3>comments ({comments.length})</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
