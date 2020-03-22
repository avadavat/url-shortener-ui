import { validURL } from ".";

const axios = require("axios");
const thisHost = window.location.origin;

const encodeEndpoint = "/encode/";
const decodeEndpoint = "/decode/";

export enum MessageStatus {
  DEFAULT,
  INVALID,
  ERROR,
  SUCCESS
}

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
    const response = await axios.get(encodeEndpoint + query);
    const shortLink: string = response.data;
    const fullLink = `${thisHost}/${shortLink}`;
    return [MessageStatus.SUCCESS, fullLink];
  } catch (e) {
    return [MessageStatus.ERROR, ""];
  }
};

export const sendDecodeRequest = async (
  query: string
): Promise<[MessageStatus, string]> => {
  try {
    const response = await axios.get(decodeEndpoint + query);
    const longLink: string = response.data;
    return [MessageStatus.SUCCESS, longLink];
  } catch (e) {
    return [MessageStatus.ERROR, ""];
  }
};
