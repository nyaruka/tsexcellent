import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { Excellent2Lexer } from './gen/Excellent2Lexer';
import { Excellent2Parser } from './gen/Excellent2Parser';

export default class Excellent {

    parse(expression: string) {
        let inputStream = new ANTLRInputStream(expression);
        let lexer = new Excellent2Lexer(inputStream);
        let tokenStream = new CommonTokenStream(lexer);
        let parser = new Excellent2Parser(tokenStream);
        let tree = parser.parse();

        return tree;
    }
}
