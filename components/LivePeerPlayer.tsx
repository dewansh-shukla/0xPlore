import { Player, useAsset } from "@livepeer/react"

interface PlayerProps {
  id: any
}

const LivePeerPlayer: React.FC<PlayerProps> = ({ id }) => {
  const { data: asset } = useAsset(id)
  console.log("asset", asset)
  return <></>
}

export default LivePeerPlayer
