import { Selector } from "testcafe";
import { PAGE_URL, YOUTUBE_CONSENT_TAG } from "../helpers/constants";

const EXPECTED_ATTRIBUTES: Object = {
  pid: YOUTUBE_CONSENT_TAG.pid
};

fixture`YOUTUBE`.page`${PAGE_URL}`;

test(`Test for ${YOUTUBE_CONSENT_TAG.name} `, async t => {
  const elements = Selector(`[pid=${YOUTUBE_CONSENT_TAG.pid}]`);
  const count = await elements.count;
  for (let i = 0; i < count; i++) {
    await t
      .expect(elements.nth(i).attributes)
      .contains(EXPECTED_ATTRIBUTES)
      .expect(elements.nth(i).getAttribute("src"))
      .notOk()
      .expect(elements.nth(i).getAttribute("id"))
      .ok();
  }
});
