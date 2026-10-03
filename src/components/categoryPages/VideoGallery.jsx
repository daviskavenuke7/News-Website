import React from "react"
import { VideoPlayer, VideoSkin, Video } from "@videojs/react/video"
import "../../../node_modules/@videojs/react/dist/default/presets/video/skin.css"
import "./category-pages.css"

const VideoGallery = ({ title, videos }) => (
  <main className='category-page'>
    <div className='container'>
      <header className='category-page-header'>
        <h1>{title}</h1>
      </header>
      <div className='video-gallery'>
        {videos.map((video) => (
          <article className='video-gallery-card' key={video.id}>
            <VideoPlayer>
              <VideoSkin style={{ width: "100%", aspectRatio: "16 / 9" }}>
                <Video src={video.src} playsInline />
              </VideoSkin>
            </VideoPlayer>
            <h2>{video.title}</h2>
          </article>
        ))}
      </div>
    </div>
  </main>
)

export default VideoGallery