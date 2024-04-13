function Comment({ comment }) {
  return (
    <div>
      <h4>{comment.user}</h4>
      <p>{comment.comment}</p>
    </div>
  );
}

export default Comment;
