const daovote = artifacts.require("B2");

contract("B2", async () => {
  let vote;
  before(async () => {
    vote = await daovote.new();
  });
  describe("function test", async () => {
    it("setUser", async () => {
      await vote.setUser("spaceBest choi");
    });
    it("getUser", async () => {
      const result = await vote.getUser();
      assert.equal(result, "spaceBest choi");
    });
  });
});
