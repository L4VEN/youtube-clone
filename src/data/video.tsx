// import React from "react";

interface VideoProps {
  videoData: {
    title: string;
    channelName: string;
    channelImage: string;
    views: number;
    uploadTime: string;
    link: string;
    thumbnail: string;
  };
}

const Video: React.FC<VideoProps> = ({ videoData }) => {
  return (
    <div className="video-container">
      <a href={`https://youtu.be/${videoData.link}`}>
        <img className="video-player" src={videoData.thumbnail} alt="" />
      </a>
      <div className="video-info">
        <img className="channel-icon" src={videoData.channelImage} alt="" />
        <div className="video-stats">
          <h1 className="video-title">{videoData.title}</h1>
          <p className="channel-name">{videoData.channelName}</p>
          <span className="views">
            조회수 {videoData.views.toLocaleString()}회
          </span>
          <span className="stats-divider"> • </span>
          <span className="upload-time">{videoData.uploadTime}</span>
        </div>
      </div>
    </div>
  );
};

export default Video;
