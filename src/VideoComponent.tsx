// videoComponent.tsx
import React from "react";
import { videos } from "./data/videos";
import "./data/video-style.css";
import Video from "./data/video";

interface VideoComponentProps {
  selectedGenre: string;
}

const VideoComponent: React.FC<VideoComponentProps> = ({ selectedGenre }) => {
  const filteredVideos =
    selectedGenre === "all"
      ? videos
      : videos.filter((video) => video.genre === selectedGenre);

  return (
    <div className="video-grid">
      {filteredVideos.map((videoData, v) => (
        <Video key={v} videoData={videoData} />
      ))}
    </div>
  );
};

export default VideoComponent;
