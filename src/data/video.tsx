import React from "react";

interface VideoProps {
  videoData: {
    title: string;
    channelName: string;
    channelImage: string;
    views: number;
    uploadTime: string;
    link: string;
  };
}

const Video: React.FC<VideoProps> = ({ videoData }) => {
  return (
    <a href={`https://youtu.be/${videoData.link}`} className="video-container">
      <img
        className="video-player"
        src={`https://img.youtube.com/vi/${videoData.link}/0.jpg`}
        alt=""
      />
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
    </a>
  );
};

export default Video;
