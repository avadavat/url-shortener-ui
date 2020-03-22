import { validURL } from "./validURL";

it("amazon link with ref is valid", () => {
  const link =
    "http://www.amazon.com/Kindle-Wireless-Reading-Display-Globally/dp/B003FSUDM4/ref=amb_link_353259562_2?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=center-10&pf_rd_r=11EYKTN682A79T370AM3&pf_rd_t=201&pf_rd_p=1270985982&pf_rd_i=B002Y27P3M";
  const result: boolean = validURL(link);
  expect(result).toBeTruthy();
});

it("amazon link is vaild", () => {
  const link =
    "http://www.amazon.com/Kindle-Wireless-Reading-Display-Globally/dp/B003FSUDM4/?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=center-10&pf_rd_r=11EYKTN682A79T370AM3&pf_rd_t=201&pf_rd_p=1270985982&pf_rd_i=B002Y27P3M";
  const result: boolean = validURL(link);
  expect(result).toBeTruthy();
});

it("google is valid", () => {
  const link = "http://google.com";
  const result = validURL(link);
  expect(result).toBeTruthy();
});

it("no protocol is invalid", () => {
  const link = "google.com";
  const result = validURL(link);
  expect(result).toBeFalsy();
});
