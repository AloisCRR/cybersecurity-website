import React from "react"
import tw, { styled } from "twin.macro"

const StyledVideoEmbedded = styled.div(() => [
  tw`bg-black p-20 flex justify-center items-center`,
  `flex: 2;`,
])

const VideoEmbedded = () => (
  <StyledVideoEmbedded>
    <iframe
      style={{ width: `100%`, height: `100%` }}
      title="Video sobre carreras de ciberseguridad"
      src="https://www.youtube.com/embed/-AkuKKJ8dN0"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </StyledVideoEmbedded>
)

export default VideoEmbedded
