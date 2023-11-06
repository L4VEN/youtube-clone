import { useState } from "react";
import "./index.css";
import VideoComponent from "./video-cmp";

function App() {
  const [isInteracting, setIsInteracting] = useState(false);

  const handleInputFocus = () => {
    setIsInteracting(true);
  };
  const handleInputBlur = () => {
    setIsInteracting(false);
  };

  return (
    <div>
      <header>
        <div id="nav-YtButton">
          <a href="">
            <img src="src\assets\hamburger.png" id="nav-Hamburger" />
          </a>
          <a href="">
            <img src="src\assets\youtubeLogo.png" id="nav-YoutubeLogo" />
          </a>
        </div>
        <div
          id="nav-SearchBar"
          // style={{ width: isInteracting ? "500px" : "470px" }}
        >
          <div
            id="nav-Form"
            style={{ borderColor: isInteracting ? "#1c62b9" : "#303030" }}
          >
            {isInteracting ? (
              <img src="src\assets\search.svg" id="nav-searchIcon" />
            ) : null}
            <input
              type="text"
              id="nav-Input"
              placeholder="검색"
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            ></input>
          </div>
          <button id="nav-searchBtn">
            <img src="src\assets\search.svg" alt="Search" />
          </button>
        </div>
        <div id="nav-Profile">
          <a href="">
            <img src="src\assets\Profile.png" className="nav-Apps" />
          </a>
        </div>
      </header>
      <main>
        <aside>
          <a id="aside-Home" className="asideIcon">
            <img src="src\assets\aside_home.svg" alt="" />
            <div>홈</div>
          </a>
          <a id="aside-Shorts" className="asideIcon">
            <img src="src\assets\aside_shorts.svg" alt="" />
            <div>Shorts</div>
          </a>
          <a id="aside-Sub" className="asideIcon">
            <img src="src\assets\aside_sub.svg" alt="" />
            <div>구독</div>
          </a>
          <a id="aside-Ytmusic" className="asideIcon">
            <img src="src\assets\aside_ytmusic.svg" alt="" />
            <div>YouTube Mu...</div>
          </a>
          <a id="aside-Me" className="asideIcon">
            <img src="src\assets\aside_me.svg" alt="" />
            <div>나</div>
          </a>
          <a id="aside-Off" className="asideIcon">
            <img src="src\assets\aside_offline.svg" alt="" />
            <div>오프라인 저장 ..</div>
          </a>
        </aside>
        <section>
          <nav></nav>
          <VideoComponent
            title="이세계아이돌 (ISEGYE IDOL) - KIDDING (키딩) Official MV"
            channelName="왁타버스 WAKTAVERSE"
            channelImage="src\data\channel\waktaverse.jpg"
            views={10471698}
            uploadTime="2달 전"
          />
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
