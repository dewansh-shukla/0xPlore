import { createReactClient } from "@livepeer/react"
import { studioProvider } from "livepeer/providers/studio"
import { LIVEPEER_KEY } from "../constants"

const LivePeerClient = createReactClient({
  provider: studioProvider({ apiKey: "99971b60-6a59-4d4f-8a20-7ab64c28c030" }),
})

export default LivePeerClient
