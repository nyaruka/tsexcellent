import { XTemplate, XExpression } from "../src/Template";

describe("XTemplate", () => {
    const parseTests: { input: string, exps: XExpression[] }[] = [
        { input: "@contact", exps: [{ value: "contact", complex: false, start: 0, end: 8 }] },
        { input: "Hi @contact how are you?", exps: [{ value: "contact", complex: false, start: 3, end: 11 }] },
        { input: "@contact...?", exps: [{ value: "contact", complex: false, start: 0, end: 8 }] },
        { input: "My Twitter is @bob", exps: [] },
        { input: '@(upper("abc"))', exps: [{ value: 'upper("abc")', complex: true, start: 0, end: 15 }] },
        { input: ' @( upper("abc") ) ', exps: [{ value: ' upper("abc") ', complex: true, start: 1, end: 18 }] },
        { input: '@(', exps: [] },
        { input: '@(")', exps: [] },
        { input: '@(")")', exps: [{ value: '")"', complex: true, start: 0, end: 6 }] },
        { input: '@("zz\\"zz")', exps: [{ value: '"zz\\"zz"', complex: true, start: 0, end: 11 }] },
        { input: '@@contact', exps: [] },
        { input: '@@@contact', exps: [{ value: "contact", complex: false, start: 2, end: 10 }] },
    ];

    it("parse returns correct tokens", () => {
        for (let test of parseTests) {
            const template = XTemplate.parse(test.input, ["contact", "flow"]);
            expect(template).toBeInstanceOf(XTemplate);
            expect(template.getExpressions()).toEqual(test.exps);
        }
    })
})
