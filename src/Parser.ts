import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { Excellent2Lexer } from './gen/Excellent2Lexer';
import { Excellent2Parser } from './gen/Excellent2Parser';

export default class Parser {
    public parse(expression: string): boolean {
        const inputStream = new ANTLRInputStream(expression);
        const lexer = new Excellent2Lexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new Excellent2Parser(tokenStream);

        try {
            parser.parse();
            return true;
        } catch (e) {
            return false;
        }
    }
}
