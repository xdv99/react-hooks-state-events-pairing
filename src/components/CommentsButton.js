function CommentsButton({ isVisible, toggleVisibilty }) {
  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={toggleVisibilty}>
        {isVisible ? "Hide Comments" : "Show Comments"}
      </button>
    </div>
  );
}

export default CommentsButton;
