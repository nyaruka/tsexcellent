import { isNameChar, XScanner, XTokenType, XToken } from "../src/Scanner";
import { Reader } from "../src/Input";

describe("isNameChar", () => {
    it("isNameChar returns true only if string is single name char", () => {
        expect(isNameChar("A")).toEqual(true);
        expect(isNameChar("z")).toEqual(true);
        expect(isNameChar("0")).toEqual(true);
        expect(isNameChar("9")).toEqual(true);
        expect(isNameChar("á")).toEqual(true);
        expect(isNameChar("ñ")).toEqual(true);
        expect(isNameChar("_")).toEqual(true);
        expect(isNameChar(".")).toEqual(false);
        expect(isNameChar("@")).toEqual(false);
    })
})

describe("XScanner", () => {
    const scanTests: { input: string, tokens: XToken[] }[] = [
        { input: "@contact", tokens: [{ type: XTokenType.IDENTIFIER, value: "contact", start: 0, end: 8 }] },
        { input: "Hi @contact how are you?", tokens: [{ type: XTokenType.BODY, value: "Hi ", start: 0, end: 3 }, { type: XTokenType.IDENTIFIER, value: "contact", start: 3, end: 11 }, { type: XTokenType.BODY, value: " how are you?", start: 11, end: 24 }] },
        { input: "@contact...?", tokens: [{ type: XTokenType.IDENTIFIER, value: "contact", start: 0, end: 8 }, { type: XTokenType.BODY, value: "...?", start: 8, end: 12 }] },
        { input: "My Twitter is @bob", tokens: [{ type: XTokenType.BODY, value: "My Twitter is ", start: 0, end: 14 }, { type: XTokenType.BODY, value: "@bob", start: 14, end: 18 }] },
        { input: '@(upper("abc"))', tokens: [{ type: XTokenType.EXPRESSION, value: 'upper("abc")', start: 0, end: 15 }] },
        { input: ' @( upper("abc") ) ', tokens: [{ type: XTokenType.BODY, value: " ", start: 0, end: 1 }, { type: XTokenType.EXPRESSION, value: ' upper("abc") ', start: 1, end: 18 }, { type: XTokenType.BODY, value: " ", start: 18, end: 19 }] },
        { input: '@(', tokens: [{ type: XTokenType.BODY, value: '@(', start: 0, end: 2 }] },
        { input: '@(")', tokens: [{ type: XTokenType.BODY, value: '@(")', start: 0, end: 4 }] },
        { input: '@(")")', tokens: [{ type: XTokenType.EXPRESSION, value: '")"', start: 0, end: 6 }] },
        { input: '@("zz\\"zz")', tokens: [{ type: XTokenType.EXPRESSION, value: '"zz\\"zz"', start: 0, end: 11 }] },
        { input: '@@contact', tokens: [{ type: XTokenType.BODY, value: '@@contact', start: 0, end: 9 }] },
        { input: '@@@contact', tokens: [{ type: XTokenType.BODY, value: '@@', start: 0, end: 2 }, { type: XTokenType.IDENTIFIER, value: "contact", start: 2, end: 10 }] },
    ];

    it("scan returns correct tokens", () => {
        for (let test of scanTests) {
            const scanner = new XScanner(new Reader(test.input), ["contact", "flow"]);
            expect(scanner).toBeInstanceOf(XScanner);

            const tokens: XToken[] = [];
            for (let token = scanner.scan(); token.type != XTokenType.EOF; token = scanner.scan()) {
                tokens.push(token);
            }

            expect(tokens).toEqual(test.tokens);
        }
    })
})
