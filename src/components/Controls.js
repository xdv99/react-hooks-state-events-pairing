function Controls({ votes, handleVote }) {
  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={handleVote}>{`${votes.up} 👍`}</button>
      <button onClick={() => handleVote(false)}>{`${votes.down} 👎`}</button>
    </div>
  );
}

export default Controls;
