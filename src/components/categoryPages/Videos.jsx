import React from "react"
import { mediaPlaylist } from "../../dummyData"
import VideoGallery from "./VideoGallery"

const Videos = () => <VideoGallery title='Videos' videos={mediaPlaylist.filter((item) => item.category === "Videos")} />

export default Videos