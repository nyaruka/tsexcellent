import Parser from "../src/Parser";

describe("Parser", () => {
  it("Parser is instantiable", () => {
    var parser = new Parser();
    expect(parser).toBeInstanceOf(Parser);

    var tree = parser.parse("1 + 2")
  })
})
