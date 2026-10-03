import React from "react"
import { mediaPlaylist } from "../../dummyData"
import VideoGallery from "./VideoGallery"

const Movies = () => <VideoGallery title='Movies' videos={mediaPlaylist.filter((item) => item.category === "Movies")} />

export default Movies