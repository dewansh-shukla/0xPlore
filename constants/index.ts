const APP_NAME = "OurTube"
const APP_DESCRIPTION = "A decentralized video sharing platform"
const APP_VERSION = "0.0.1"
const CONTRACT_ADDRESS = "0x0dD779eb89DF2783098F85027d09C6cb59F1dA9B"
const IPFS_GATEWAY = "https://w3s.link/ipfs/"
const IMAGEKIT_URL =
  "https://ik.imagekit.io/" + process.env.NEXT_PUBLIC_IMAGEKIT_ID + "/"
const LIVEPEER_KEY = process.env.NEXT_PUBLIC_LIVEPEER_KEY
const WEB3_STORAGE_URL = "https://api.web3.storage/upload"
const WEB3_STORAGE_KEY = process.env.NEXT_PUBLIC_WEB3_STORAGE_KEY
// const SUB_GRAPH_BASE_URL = "https://api.thegraph.com"
// const SUB_GRAPH_NAME = "Dewansh/decc"
const SUB_GRAPH_URL = `https://api.thegraph.com/subgraphs/name/dewansh-shukla/ourtube`

export {
  APP_NAME,
  APP_DESCRIPTION,
  APP_VERSION,
  CONTRACT_ADDRESS,
  IPFS_GATEWAY,
  IMAGEKIT_URL,
  WEB3_STORAGE_URL,
  SUB_GRAPH_URL,
  LIVEPEER_KEY,
  WEB3_STORAGE_KEY,
}
