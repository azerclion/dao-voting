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
    it("setPoll", async () => {
      await vote.setPoll("hello human", "are you happy?");
    });
    it("getPoll", async () => {
      const result = await vote.getPoll("hello human");
      assert.equal(result.title, "hello human");
    });
    it("vote", async () => {
      await vote.vote("hello human", true);
    });
    it("getPoll", async () => {
      const result = await vote.getPoll("hello human");
      assert.equal(result.agree, 1);
    });
  });
});
