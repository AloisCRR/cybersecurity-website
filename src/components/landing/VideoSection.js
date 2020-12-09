import React from "react"
import tw from "twin.macro"

import VideoInfo from "./atoms/VideoInfo"
import Video from "./atoms/Video"

const StyledVideoSection = tw.section`flex flex-wrap font-cyber text-white`

const VideoSection = () => (
  <StyledVideoSection
    data-sal="slide-up"
    data-sal-delay="300"
    data-sal-easing="ease"
  >
    <VideoInfo />
    <Video />
  </StyledVideoSection>
)

export default VideoSection
