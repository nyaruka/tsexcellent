import Excellent from "../src/excellentjs";

describe("Excellent", () => {
  it("Excellent is instantiable", () => {
    var parser = new Excellent();
    expect(parser).toBeInstanceOf(Excellent);

    var tree = parser.parse("1 + 2")
  })
})
