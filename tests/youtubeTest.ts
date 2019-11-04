import { Selector } from "testcafe";
import { TagIdentety } from "../helpers/interfaces";
import { PAGE_URL, YOUTUBE_CONSENT_TAG } from "../helpers/constants";

const ELEMENT_IDENTIFY_FIELD: TagIdentety = {
  attributeName: "id",
  attributeValue: `privacyProxyElement_`
};
const EXPECTED_ATTRIBUTES: Object = {
  pid: YOUTUBE_CONSENT_TAG.pid
};

fixture`YOUTUBE_CONSENT`.page`${PAGE_URL}`;

for (let i = YOUTUBE_CONSENT_TAG.startIdNumber; i < YOUTUBE_CONSENT_TAG.startIdNumber + YOUTUBE_CONSENT_TAG.count; i++) {
  test(`Test for ${YOUTUBE_CONSENT_TAG.name} ${i}`, async t => {
    const element = Selector(YOUTUBE_CONSENT_TAG.tagName).withAttribute(ELEMENT_IDENTIFY_FIELD.attributeName, `${ELEMENT_IDENTIFY_FIELD.attributeValue}${i}`);
    await t
      .expect(element.attributes)
      .contains(EXPECTED_ATTRIBUTES)
      .expect(element.getAttribute("src"))
      .notOk();
  });
}
