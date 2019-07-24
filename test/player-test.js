const expect = chai.expect;

import chai from "chai";
import Player from "../src/Player.js";


describe("Player", function() {
  let player;

  beforeEach(function() {
    player = new Player(1, "Barbara");
  });

  it("should be a function", () => {
    expect(Player).to.be.a("function");
  });

  it("should be an instance of player", function() {
    expect(player).to.be.an.instanceOf(Player);
  });

  it("should give the player a name", function() {
    expect(player.name).to.be.equal("Barbara");
  });

  it("should have an id", function() {
    expect(player.id).to.be.equal(1);
  });

  it("should have a default score of zero", function() {
    expect(player.score).to.equal(0);
  });
});
