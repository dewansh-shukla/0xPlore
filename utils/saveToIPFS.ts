import axios from "axios"
import { WEB3_STORAGE_URL, WEB3_STORAGE_KEY } from "../constants"

// Construct with token and endpoint
const saveToIPFS = async (file) => {
  // create a new multipart form data
  const formData = new FormData()
  // add file to the form data
  formData.append("file", file)

  var config = {
    method: "post",
    url: `https://api.web3.storage/upload`,
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEY5QzBCYzk5MzRjZjBFQTQzMUU5QjVhNjA3NzA0MDNEZkJhNzU5ODIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzAwNDI4ODUzODQsIm5hbWUiOiJ0ZXN0In0._SnHusGsD5TJTi63WmFYEYYS2HsUJBJJjIqquzShA5w`,
      "Content-Type": "text/plain",
    },
    data: formData,
  }
  const response = await axios(config)

  return response.data.cid
}

export default saveToIPFS
