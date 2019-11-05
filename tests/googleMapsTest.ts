import { Selector } from "testcafe";
import { TagIdentety } from "../helpers/interfaces";
import { PAGE_URL, GOOGLE_MAPS_TAG } from "../helpers/constants";

const EXPECTED_ATTRIBUTES: Object = {
  pid: GOOGLE_MAPS_TAG.pid
};

fixture`GOOGLE_MAPS`.page`${PAGE_URL}`;

test(`Test for ${GOOGLE_MAPS_TAG.name} scripts`, async t => {
  const scriptElements = Selector(`[pid=${GOOGLE_MAPS_TAG.pid}]`).withAttribute("tagName", "SCRIPT");
  const countSctiptEl = await scriptElements.count;

  for (let i = 0; i < countSctiptEl; i++) {
    await t
      .expect(scriptElements.nth(i).attributes)
      .contains(EXPECTED_ATTRIBUTES)
      .expect(scriptElements.nth(i).getAttribute("type"))
      .eql("application/usercentrics");
  }
});
test(`Test for ${GOOGLE_MAPS_TAG.name}`, async t => {
  const mapsElements = Selector(`[pid=${GOOGLE_MAPS_TAG.pid}]`).withAttribute("tagName", "PRIVACY-PROXY-GOOGLE-MAPS");
  const count = await mapsElements.count;

  for (let i = 0; i < count; i++) {
    await t
      .expect(mapsElements.nth(i).attributes)
      .contains(EXPECTED_ATTRIBUTES)
      .expect(mapsElements.nth(i).getAttribute("src"))
      .notOk()
      .expect(mapsElements.nth(i).getAttribute("id"))
      .ok();
  }
});
