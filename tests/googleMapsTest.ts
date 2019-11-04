import { Selector } from "testcafe";
import { TagIdentety } from "../helpers/interfaces";
import { PAGE_URL, GOOGLE_MAPS_CONSENT_TAG } from "../helpers/constants";

const ELEMENT_IDENTIFY_FIELD: TagIdentety = {
  attributeName: "id",
  attributeValue: `privacyProxyElement_`
};
const EXPECTED_ATTRIBUTES: Object = {
  pid: GOOGLE_MAPS_CONSENT_TAG.pid
};

fixture`GOOGLE_MAPS_CONSENT`.page`${PAGE_URL}`;

for (let i = GOOGLE_MAPS_CONSENT_TAG.startIdNumber; i <= GOOGLE_MAPS_CONSENT_TAG.count; i++) {
  test(`Test for ${GOOGLE_MAPS_CONSENT_TAG.name} ${i}`, async t => {
    const element = Selector(GOOGLE_MAPS_CONSENT_TAG.tagName).withAttribute(
      ELEMENT_IDENTIFY_FIELD.attributeName,
      `${ELEMENT_IDENTIFY_FIELD.attributeValue}${i}`
    );
    await t
      .expect(element.attributes)
      .contains(EXPECTED_ATTRIBUTES)
      .expect(element.getAttribute("src"))
      .notOk();
  });
}
