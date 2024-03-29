import { Selector } from "testcafe";
import { PAGE_URL, XING_PLUGIN_TAG } from "../helpers/constants";

const EXPECTED_ATTRIBUTES: Object = {
  pid: XING_PLUGIN_TAG.pid
};

fixture`XING`.page`${PAGE_URL}`;

test(`Test for ${XING_PLUGIN_TAG.name} scripts`, async t => {
  const scriptElements = Selector(`[pid=${XING_PLUGIN_TAG.pid}]`).withAttribute("tagName", "SCRIPT");
  const countSctiptEl = await scriptElements.count;

  for (let i = 0; i < countSctiptEl; i++) {
    await t
      .expect(scriptElements.nth(i).getAttribute("type"))
      .eql("application/usercentrics", `Element (pid=${XING_PLUGIN_TAG.pid}) have wrong attribute 'type' value!`)
      .expect(scriptElements.nth(i).attributes)
      .contains(EXPECTED_ATTRIBUTES, `Expected attributes falsy on pid=${XING_PLUGIN_TAG.pid} elements!`);
  }
});

test(`Test for ${XING_PLUGIN_TAG.name} mock`, async t => {
  const xingElements = Selector(`[pid=${XING_PLUGIN_TAG.pid}]`).withAttribute("tagName", "XING-MOCK");
  const countXingEl = await xingElements.count;

  for (let i = 0; i < countXingEl; i++) {
    console.log(2);
    await t
      .expect(xingElements.nth(i).getAttribute("id"))
      .ok(`Element (pid=${XING_PLUGIN_TAG.pid}) don't have id!`)
      .expect(xingElements.nth(i).getAttribute("type"))
      .eql("xing", `Element (pid=${XING_PLUGIN_TAG.pid}) have wrong attribute 'type' value!`)
      .expect(xingElements.nth(i).attributes)
      .contains(EXPECTED_ATTRIBUTES, `Expected attributes falsy on pid=${XING_PLUGIN_TAG.pid} elements!`);
  }
});
