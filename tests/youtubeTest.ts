import { Selector } from "testcafe";
import { PAGE_URL, YOUTUBE_TAG } from "../helpers/constants";

const EXPECTED_ATTRIBUTES: Object = {
  pid: YOUTUBE_TAG.pid
};

fixture`YOUTUBE`.page`${PAGE_URL}`;

test(`Test for ${YOUTUBE_TAG.name} `, async t => {
  const elements = Selector(`[pid=${YOUTUBE_TAG.pid}]`);
  const count = await elements.count;
  for (let i = 0; i < count; i++) {
    await t
      .expect(elements.nth(i).getAttribute("id"))
      .ok(`Element (pid=${YOUTUBE_TAG.pid}) don't have id!`)
      .expect(elements.nth(i).getAttribute("src"))
      .notOk(`Src attribute not deleted on pid=${YOUTUBE_TAG.pid} elements!`)
      .expect(elements.nth(i).attributes)
      .contains(EXPECTED_ATTRIBUTES, `Expected attributes falsy on pid=${YOUTUBE_TAG.pid} elements!`);
  }
});
