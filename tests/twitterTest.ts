import { Selector } from "testcafe";
import { PAGE_URL, TWITTER_PLUGIN_TAG } from "../helpers/constants";

const EXPECTED_ATTRIBUTES: Object = {
  pid: TWITTER_PLUGIN_TAG.pid
};

fixture`TWITTER`.page`${PAGE_URL}`;

test(`Test for ${TWITTER_PLUGIN_TAG.name} scripts`, async t => {
  const scriptElements = Selector(`[pid=${TWITTER_PLUGIN_TAG.pid}]`).withAttribute("tagName", "SCRIPT");
  const countSctiptEl = await scriptElements.count;

  for (let i = 0; i < countSctiptEl; i++) {
    await t
      .expect(scriptElements.nth(i).getAttribute("type"))
      .eql("application/usercentrics", `Element (pid=${TWITTER_PLUGIN_TAG.pid}) have wrong attribute 'type' value!`)
      .expect(scriptElements.nth(i).attributes)
      .contains(EXPECTED_ATTRIBUTES, `Expected attributes falsy on pid=${TWITTER_PLUGIN_TAG.pid} elements!`);
  }
});

test(`Test for ${TWITTER_PLUGIN_TAG.name} mock`, async t => {
  const twitterElements = Selector(`[pid=${TWITTER_PLUGIN_TAG.pid}]`).withAttribute("tagName", "TWITTER-MOCK");

  const countXingEl = await twitterElements.count;

  for (let i = 0; i < countXingEl; i++) {
    console.log(2);
    await t
      .expect(twitterElements.nth(i).getAttribute("id"))
      .ok(`Element (pid=${TWITTER_PLUGIN_TAG.pid}) don't have id!`)
      .expect(twitterElements.nth(i).getAttribute("type"))
      .eql("twitter", `Element (pid=${TWITTER_PLUGIN_TAG.pid}) have wrong attribute 'type' value!`)
      .expect(twitterElements.nth(i).attributes)
      .contains(EXPECTED_ATTRIBUTES, `Expected attributes falsy on pid=${TWITTER_PLUGIN_TAG.pid} elements!`);
  }
});
