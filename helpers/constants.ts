import { Elements } from "./interfaces";

export const PAGE_URL: string = `http://127.0.0.1:8080/example/integration_test.html`;

export const YOUTUBE_CONSENT_TAG: Elements = {
  name: "YOUTUBE_CONSENT",
  tagName: `privacy-proxy-video`,
  pid: "BJz7qNsdj-7",
  startIdNumber: 1,
  count: 5
};
export const GOOGLE_MAPS_CONSENT_TAG: Elements = {
  name: "GOOGLE_MAPS_CONSENT",
  tagName: `privacy-proxy-google-maps`,
  pid: "S1pcEj_jZX",
  startIdNumber: 8,
  count: 4
};
