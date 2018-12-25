import { Reader, Input } from "../src/Input";

describe("Reader", () => {
    it("Reader reads characters from a string", () => {
        var reader = new Reader("foo");
        expect(reader).toBeInstanceOf(Reader);

        expect(reader.readChar()).toEqual("f");
        expect(reader.readChar()).toEqual("o");
        expect(reader.readChar()).toEqual("o");
        expect(() => { reader.readChar() }).toThrowError("no more characters");
        expect(() => { reader.readChar() }).toThrowError("no more characters");
    })
})

describe("Input", () => {
    it("Input reads and unreads from a reader", () => {
        var input = new Input(new Reader("foo"));
        expect(input).toBeInstanceOf(Input);

        expect(input.read()).toEqual("f");
        expect(input.read()).toEqual("o");

        input.unread("o");
        input.unread("f");

        expect(input.read()).toEqual("f");
        expect(input.read()).toEqual("o");
        expect(input.read()).toEqual("o");
        expect(input.read()).toEqual("\0");
        expect(input.read()).toEqual("\0");
    })
})
