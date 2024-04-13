function VideoData({ video }) {
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <h1>{video.title}</h1>
      <p>{`${video.views} Views | Uploaded ${video.createdAt}`}</p>
    </div>
  );
}

export default VideoData;
