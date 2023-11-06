// VideoComponent.tsx
import React from "react";
import { videos } from "./data/videos";
import "./data/video-style.css";

const VideoComponent: React.FC = () => {
  const videoData = videos[0];

  return (
    <div className="video-container">
      <a href="https://youtu.be/rDFUl2mHIW4?feature=shared">
        <img
          className="video-player"
          src="src/data/thumbnail/kidding.jpg"
          alt="Video Thumbnail"
        />
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

export default VideoComponent;
