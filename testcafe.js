const createTestCafe = require("testcafe");

const TESTS = ["./tests/tryTest.ts", "./tests/tryTest2.ts"];

let testcafe = null;
let runner = null;

createTestCafe("localhost", 1337, 1338)
  .then(tc => {
    testcafe = tc;
    runner = testcafe.createRunner();
    return runner
      .src(TESTS)
      .browsers("all")
      .screenshots()
      .run();
  })
  .then(failedCount => {
    console.log("Tests failed: " + failedCount);
    testcafe.close();
  });
