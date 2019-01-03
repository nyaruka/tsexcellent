import { isNameChar, XScanner, XTokenType } from "../src/Scanner";
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

class scannedToken {
    public tokenType: XTokenType;
    public value: string;
}

describe("XScanner", () => {
    const scannerTests: { input: string, tokens: scannedToken[] }[] = [
        { input: "@contact", tokens: [{ tokenType: XTokenType.IDENTIFIER, value: "contact" }] },
        { input: "Hi @contact how are you?", tokens: [{ tokenType: XTokenType.BODY, value: "Hi " }, { tokenType: XTokenType.IDENTIFIER, value: "contact" }, { tokenType: XTokenType.BODY, value: " how are you?" }] },
        { input: "@contact...?", tokens: [{ tokenType: XTokenType.IDENTIFIER, value: "contact" }, { tokenType: XTokenType.BODY, value: "...?" }] },
        { input: "My Twitter is @bob", tokens: [{ tokenType: XTokenType.BODY, value: "My Twitter is " }, { tokenType: XTokenType.BODY, value: "@bob" }] },
        { input: '@(upper("abc"))', tokens: [{ tokenType: XTokenType.EXPRESSION, value: 'upper("abc")' }] },
        { input: ' @(upper("abc")) ', tokens: [{ tokenType: XTokenType.BODY, value: " " }, { tokenType: XTokenType.EXPRESSION, value: 'upper("abc")' }, { tokenType: XTokenType.BODY, value: " " }] },
        { input: '@(', tokens: [{ tokenType: XTokenType.BODY, value: '@(' }] },
        { input: '@(")', tokens: [{ tokenType: XTokenType.BODY, value: '@(")' }] },
        { input: '@(")")', tokens: [{ tokenType: XTokenType.EXPRESSION, value: '")"' }] },
        { input: '@("zz\\"zz")', tokens: [{ tokenType: XTokenType.EXPRESSION, value: '"zz\\"zz"' }] },
    ];

    it("XScanner returns correct tokens", () => {
        for (let test of scannerTests) {
            const scanner = new XScanner(new Reader(test.input), ["contact", "flow"]);
            expect(scanner).toBeInstanceOf(XScanner);

            const tokens: scannedToken[] = [];
            for (let [tokenType, value] = scanner.scan(); tokenType != XTokenType.EOF; [tokenType, value] = scanner.scan()) {
                tokens.push({ tokenType: tokenType, value: value });
            }
        }
    })
})
