var numeralize = require('iso/numeralize');

describe("numeralize", function() {
  describe("numerals", function() {
    it("supports numbers 1-19", function() {
      expect(numeralize(1)).to.equal("one");
      expect(numeralize(2)).to.equal("two");
      expect(numeralize(10)).to.equal("ten");
      expect(numeralize(12)).to.equal("twelve");
      expect(numeralize(19)).to.equal("nineteen");
    });

    it("supports numbers with multiple of 10s less than 100", function() {
      expect(numeralize(10)).to.equal("ten");
      expect(numeralize(20)).to.equal("twenty");
    });

    it("supports mumbers between 21-99", function() {
      expect(numeralize(21)).to.equal("twenty-one");
      expect(numeralize(35)).to.equal("thirty-five");
      expect(numeralize(99)).to.equal("ninety-nine");
    });

    it("supports number between 100 and 999", function() {
      expect(numeralize(100)).to.equal("one hundred");
      expect(numeralize(230)).to.equal("two hundred thirty");
      expect(numeralize(999)).to.equal("nine hundred ninety-nine");
    });

    it("supports number between 1000 and 999,999", function() {
      expect(numeralize(1000)).to.equal("one thousand");
      expect(numeralize(2345)).to.equal("two thousand three hundred forty-five");
      expect(numeralize(999222)).to.equal("nine hundred ninety-nine thousand two hundred twenty-two");
    });

    it("supports number between 1000000 and 999,999,999", function() {
      expect(numeralize(1000000)).to.equal("one million");
      expect(numeralize(1002345)).to.equal("one million two thousand three hundred forty-five");
    });

  });
});
