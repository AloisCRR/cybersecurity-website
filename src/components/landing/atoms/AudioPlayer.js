import React from "react"
import tw from "twin.macro"
import AudioPlayer from "react-h5-audio-player"

const Styles = {
  maxWidth: `300px`,
  borderRadius: `15px`,
  position: `absolute`,
  bottom: `2rem`,
  right: `2rem`,
  background: `rgba(255,255,255,0.2)`,
}

const Player = () => (
  <AudioPlayer
    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    volume={0.03}
    showJumpControls={false}
    showSkipControls={false}
    customAdditionalControls={[]}
    style={Styles}
  />
)

const StyledPlayer = tw(Player)`absolute font-cyberSpace bottom-8 right-8`

export default StyledPlayer
