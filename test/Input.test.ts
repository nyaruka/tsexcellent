import { Reader, XInput } from "../src/Input";

describe("Reader", () => {
    it("Reader reads characters from a string", () => {
        var reader = new Reader("foo");
        expect(reader).toBeInstanceOf(Reader);

        expect(reader.getPos()).toEqual(0);
        expect(reader.readChar()).toEqual("f");
        expect(reader.getPos()).toEqual(1);
        expect(reader.readChar()).toEqual("o");
        expect(reader.getPos()).toEqual(2);
        expect(reader.readChar()).toEqual("o");
        expect(reader.getPos()).toEqual(3);

        expect(() => { reader.readChar() }).toThrowError("no more characters");
        expect(() => { reader.readChar() }).toThrowError("no more characters");
        expect(reader.getPos()).toEqual(3);
    })
})

describe("Input", () => {
    it("Input reads and unreads from a reader", () => {
        var input = new XInput(new Reader("foo"));
        expect(input).toBeInstanceOf(XInput);

        expect(input.getPos()).toEqual(0);
        expect(input.read()).toEqual("f");
        expect(input.getPos()).toEqual(1);
        expect(input.read()).toEqual("o");
        expect(input.getPos()).toEqual(2);

        input.unread("o");
        expect(input.getPos()).toEqual(1);
        input.unread("f");
        expect(input.getPos()).toEqual(0);

        expect(input.read()).toEqual("f");
        expect(input.getPos()).toEqual(1);
        expect(input.read()).toEqual("o");
        expect(input.getPos()).toEqual(2);
        expect(input.read()).toEqual("o");
        expect(input.getPos()).toEqual(3);
        expect(input.read()).toEqual("\0");
        expect(input.getPos()).toEqual(3);
        expect(input.read()).toEqual("\0");
        expect(input.getPos()).toEqual(3);
    })
})
