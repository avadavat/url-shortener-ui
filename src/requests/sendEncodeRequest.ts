import { MessageStatus } from "../view/MessageArea";
import { validURL } from "../util/validURL";

const axios = require("axios");
const thisHost = window.location.origin;

export const sendEncodeRequest = async (
  query: string
): Promise<[MessageStatus, string]> => {
  if (!validURL(query)) {
    query = `http://${query}`;
  }

  if (!validURL(query)) {
    return [MessageStatus.INVALID, ""];
  }

  try {
    const response = await axios.get("/encode/" + query);
    const shortLink: string = response.data;
    const fullLink = `${thisHost}/${shortLink}`;
    return [MessageStatus.SUCCESS, fullLink];
  } catch (e) {
    return [MessageStatus.ERROR, ""];
  }
};
