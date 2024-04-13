import { useState } from "react";
import video from "../data/video.js";
import Controls from "./Controls.js";
import VideoData from "./VideoData.js";
import CommentsButton from "./CommentsButton.js";
import Comments from "./Comments.js";

function App() {
  const [votes, setVotes] = useState({
    up: video.upvotes,
    down: video.downvotes,
  });

  const [visibleComments, setVisibleComments] = useState(true);

  function handleVote(isUp = true) {
    const name = isUp ? "up" : "down";
    setVotes({ ...votes, [name]: votes[name] + 1 });
  }

  function handleCommentsVisibility() {
    setVisibleComments((current) => !current);
  }

  return (
    <div>
      <VideoData video={video} />
      <Controls votes={votes} handleVote={handleVote} />
      <CommentsButton
        isVisible={visibleComments}
        toggleVisibilty={handleCommentsVisibility}
      />
      {visibleComments ? <Comments comments={video.comments} /> : null}
    </div>
  );
}

export default App;
