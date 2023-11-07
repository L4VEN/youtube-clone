// videoCmp.tsx
import React from "react";
import { videos } from "./data/videos";
import "./data/video-style.css";
import Video from "./data/video";

const videoCmp: React.FC = () => {
  return (
    <div className="video-grid">
      {videos.map((videoData, v) => (
        <Video key={v} videoData={videoData} />
      ))}
    </div>
  );
};

export default videoCmp;
