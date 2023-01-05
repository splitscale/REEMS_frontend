import { Container } from "../Container";
import axios from "axios";
import Cookies from "js-cookie";

export async function getContainerList(): Promise<Container[]> {
  const URL = `http://34.143.216.186:28762/api/containers`;
  
  try {
    const response = await axios.get(URL, {
      params: { uid: Cookies.get("uid") },
      headers: {
        authorization: Cookies.get("authorization"),
      },
    });
    return response.data as Container[];
  } catch (err: any) {
    if (err.response) {
      // The client was given an error response (5xx, 4xx)
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    } else if (err.request) {
      // The client never received a response, and the request was never left
      console.log(err.request);
    } else {
      // Anything else
      console.log("Error", err.message);
    }
  }
  return [];
}
