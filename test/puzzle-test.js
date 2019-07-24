const expect = chai.expect;

import chai from "chai";
import Puzzle from "../src/Puzzle.js";
import data from "../src/data/sample-data";


describe("Puzzle", function() {
  let puzzle;

  beforeEach(function() {
    puzzle = new Puzzle(data.puzzles.one_word_answers.puzzle_bank[6]);
  });

  it("should be a function", () => {
    expect(Puzzle).to.be.a("function");
  });

  it("should be an instance of puzzle", () => {
    expect(puzzle).to.be.an.instanceOf(Puzzle);
  });

  it("should have a category", () => {
    expect(puzzle.category).to.be.equal("The 90s");
  });

  it("should have a description", () => {
    expect(puzzle.hint).to.be.equal(
      "Puzzles pertaining to the decade in question."
    );
  });

  it("should have a correct answer", () => {
    expect(puzzle.correctAnswer.join("")).to.be.equal("SKETCHERS");
  });
});
