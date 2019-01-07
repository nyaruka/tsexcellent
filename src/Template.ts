
import { Reader } from './Input';
import { XTokenType, XScanner } from './Scanner';

export class XExpression {
    public value: string;
    public complex: boolean;
    public start: number;
    public end: number;

    public constructor(value: string, complex: boolean, start: number, end: number) {
        this.value = value;
        this.complex = complex;
        this.start = start;
        this.end = end;
    }
}

export class XTemplate {
    private expressions: XExpression[];

    private constructor(expressions: XExpression[]) {
        this.expressions = expressions;
    }

    public static parse(raw: string, topLevels: string[]): XTemplate {
        const scanner: XScanner = new XScanner(new Reader(raw), topLevels);
        const expressions: XExpression[] = [];

        for (let token = scanner.scan(); token.type != XTokenType.EOF; token = scanner.scan()) {
            switch (token.type) {
                case XTokenType.EXPRESSION:
                    expressions.push(new XExpression(token.value, true, token.start, token.end));
                    break;
                case XTokenType.IDENTIFIER:
                    expressions.push(new XExpression(token.value, false, token.start, token.end));
                    break;
            }
        }

        return new XTemplate(expressions);
    }

    public getExpressions(): XExpression[] {
        return this.expressions;
    }
}