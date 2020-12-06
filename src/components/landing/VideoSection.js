import React from "react"
import tw from "twin.macro"

import VideoInfo from "./atoms/VideoInfo"
import Video from "./atoms/Video"

const StyledVideoSection = tw.section`flex flex-wrap font-cyber text-white`

const VideoSection = () => (
  <StyledVideoSection>
    <VideoInfo />
    <Video />
  </StyledVideoSection>
)

export default VideoSection
