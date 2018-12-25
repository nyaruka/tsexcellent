import Parser from "../src/Parser";

describe("Parser", () => {
  it("Parser is instantiable", () => {
    const parser = new Parser();
    expect(parser).toBeInstanceOf(Parser);

    var success = parser.parse("1 + 2")
    expect(success).toEqual(true);
  })
})
