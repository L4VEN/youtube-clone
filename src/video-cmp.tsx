import React from "react";
import "./data/video-style.css";

interface VideoComponentProps {
  title: string;
  channelName: string;
  channelImage: string;
  views: number;
  uploadTime: string;
}

const VideoComponent: React.FC<VideoComponentProps> = ({
  title,
  channelName,
  channelImage,
  views,
  uploadTime,
}) => {
  return (
    <div className="video-container">
      <a href="https://youtu.be/rDFUl2mHIW4?feature=shared">
        <img
          className="video-player"
          src="src\data\thumbnail\kidding.jpg"
        ></img>
      </a>
      <div className="video-info">
        <img className="channel-icon" src={channelImage} alt="" />
        <div className="video-stats">
          <h1 className="video-title">{title}</h1>
          <p className="channel-name">{channelName}</p>
          <span className="views">조회수 {views.toLocaleString()}회</span>
          <span className="stats-divider"> • </span>
          <span className="upload-time">{uploadTime}</span>
        </div>
      </div>
      <div className="recommended-videos">
        {/* 추천 비디오 목록을 추가할 수 있음 */}
      </div>
    </div>
  );
};

export default VideoComponent;
