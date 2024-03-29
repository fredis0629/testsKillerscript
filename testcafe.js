const createTestCafe = require("testcafe");

let testcafe = null;
let runner = null;

createTestCafe("localhost", 1337, 1338)
  .then(tc => {
    testcafe = tc;
    runner = testcafe.createRunner();
    return runner.screenshots().run();
  })
  .then(failedCount => {
    console.log("Tests failed: " + failedCount);
    testcafe.close();
  });
