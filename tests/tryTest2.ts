import { Selector } from "testcafe";

const PAGE_URL = `http://127.0.0.1:5500/example/integration_test.html`;
const ELEMENT_IDENTIFY_FIELD = {
  tagName: "iframe",
  attributeName: "src",
  attributeValue: "https://www.youtube.com/embed/eLeIJtLebZk"
};
const expectedAttributes: Object = { src: "https://www.youtube.com/embed/eLeIJtLebZk" };

fixture`Getting Started`.page`${PAGE_URL}`;

test("My second test", async t => {
  const element = Selector(ELEMENT_IDENTIFY_FIELD.tagName).withAttribute(ELEMENT_IDENTIFY_FIELD.attributeName, ELEMENT_IDENTIFY_FIELD.attributeValue);
  await t.expect(element.attributes).contains(expectedAttributes);
});
