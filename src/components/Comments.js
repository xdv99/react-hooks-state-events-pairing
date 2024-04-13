import Comment from "./Comment";

function Comments({ comments }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h3>{`${comments.length} Comments`}</h3>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default Comments;
