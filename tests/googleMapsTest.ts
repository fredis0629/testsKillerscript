import { Selector } from "testcafe";
import { TagIdentety } from "../helpers/interfaces";
import { PAGE_URL, GOOGLE_MAPS_CONSENT_TAG } from "../helpers/constants";

const EXPECTED_ATTRIBUTES: Object = {
  pid: GOOGLE_MAPS_CONSENT_TAG.pid
};

fixture`GOOGLE_MAPS`.page`${PAGE_URL}`;

test(`Test for ${GOOGLE_MAPS_CONSENT_TAG.name}`, async t => {
  const elements = Selector(`[pid=${GOOGLE_MAPS_CONSENT_TAG.pid}]`);
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
