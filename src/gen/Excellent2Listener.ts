// Generated from Excellent2.g4 by ANTLR 4.6-SNAPSHOT

import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

import { ParenthesesContext } from './Excellent2Parser';
import { NegationContext } from './Excellent2Parser';
import { ComparisonContext } from './Excellent2Parser';
import { ConcatenationContext } from './Excellent2Parser';
import { MultiplicationOrDivisionContext } from './Excellent2Parser';
import { AtomReferenceContext } from './Excellent2Parser';
import { AdditionOrSubtractionContext } from './Excellent2Parser';
import { EqualityContext } from './Excellent2Parser';
import { ExponentContext } from './Excellent2Parser';
import { DotLookupContext } from './Excellent2Parser';
import { NullContext } from './Excellent2Parser';
import { FunctionCallContext } from './Excellent2Parser';
import { TrueContext } from './Excellent2Parser';
import { FalseContext } from './Excellent2Parser';
import { ArrayLookupContext } from './Excellent2Parser';
import { ContextReferenceContext } from './Excellent2Parser';
import { TextLiteralContext } from './Excellent2Parser';
import { NumberLiteralContext } from './Excellent2Parser';
import { FunctionParametersContext } from './Excellent2Parser';
import { ParseContext } from './Excellent2Parser';
import { AtomContext } from './Excellent2Parser';
import { ExpressionContext } from './Excellent2Parser';
import { FnnameContext } from './Excellent2Parser';
import { ParametersContext } from './Excellent2Parser';

/**
 * This interface defines a complete listener for a parse tree produced by
 * `Excellent2Parser`.
 */
export interface Excellent2Listener extends ParseTreeListener {
    /**
     * Enter a parse tree produced by the `parentheses`
     * labeled alternative in `Excellent2Parser.expression`.
     * @param ctx the parse tree
     */
    enterParentheses?: (ctx: ParenthesesContext) => void;
    /**
     * Exit a parse tree produced by the `parentheses`
     * labeled alternative in `Excellent2Parser.expression`.
     * @param ctx the parse tree
     */
    exitParentheses?: (ctx: ParenthesesContext) => void;

    /**
     * Enter a parse tree produced by the `negation`
     * labeled alternative in `Excellent2Parser.expression`.
     * @param ctx the parse tree
     */
    enterNegation?: (ctx: NegationContext) => void;
    /**
     * Exit a parse tree produced by the `negation`
     * labeled alternative in `Excellent2Parser.expression`.
     * @param ctx the parse tree
     */
    exitNegation?: (ctx: NegationContext) => void;

    /**
     * Enter a parse tree produced by the `comparison`
     * labeled alternative in `Excellent2Parser.expression`.
     * @param ctx the parse tree
     */
    enterComparison?: (ctx: ComparisonContext) => void;
    /**
     * Exit a parse tree produced by the `comparison`
     * labeled alternative in `Excellent2Parser.expression`.
     * @param ctx the parse tree
     */
    exitComparison?: (ctx: ComparisonContext) => void;

    /**
     * Enter a parse tree produced by the `concatenation`
     * labeled alternative in `Excellent2Parser.expression`.
     * @param ctx the parse tree
     */
    enterConcatenation?: (ctx: ConcatenationContext) => void;
    /**
     * Exit a parse tree produced by the `concatenation`
     * labeled alternative in `Excellent2Parser.expression`.
     * @param ctx the parse tree
     */
    exitConcatenation?: (ctx: ConcatenationContext) => void;

    /**
     * Enter a parse tree produced by the `multiplicationOrDivision`
     * labeled alternative in `Excellent2Parser.expression`.
     * @param ctx the parse tree
     */
    enterMultiplicationOrDivision?: (ctx: MultiplicationOrDivisionContext) => void;
    /**
     * Exit a parse tree produced by the `multiplicationOrDivision`
     * labeled alternative in `Excellent2Parser.expression`.
     * @param ctx the parse tree
     */
    exitMultiplicationOrDivision?: (ctx: MultiplicationOrDivisionContext) => void;

    /**
     * Enter a parse tree produced by the `atomReference`
     * labeled alternative in `Excellent2Parser.expression`.
     * @param ctx the parse tree
     */
    enterAtomReference?: (ctx: AtomReferenceContext) => void;
    /**
     * Exit a parse tree produced by the `atomReference`
     * labeled alternative in `Excellent2Parser.expression`.
     * @param ctx the parse tree
     */
    exitAtomReference?: (ctx: AtomReferenceContext) => void;

    /**
     * Enter a parse tree produced by the `additionOrSubtraction`
     * labeled alternative in `Excellent2Parser.expression`.
     * @param ctx the parse tree
     */
    enterAdditionOrSubtraction?: (ctx: AdditionOrSubtractionContext) => void;
    /**
     * Exit a parse tree produced by the `additionOrSubtraction`
     * labeled alternative in `Excellent2Parser.expression`.
     * @param ctx the parse tree
     */
    exitAdditionOrSubtraction?: (ctx: AdditionOrSubtractionContext) => void;

    /**
     * Enter a parse tree produced by the `equality`
     * labeled alternative in `Excellent2Parser.expression`.
     * @param ctx the parse tree
     */
    enterEquality?: (ctx: EqualityContext) => void;
    /**
     * Exit a parse tree produced by the `equality`
     * labeled alternative in `Excellent2Parser.expression`.
     * @param ctx the parse tree
     */
    exitEquality?: (ctx: EqualityContext) => void;

    /**
     * Enter a parse tree produced by the `exponent`
     * labeled alternative in `Excellent2Parser.expression`.
     * @param ctx the parse tree
     */
    enterExponent?: (ctx: ExponentContext) => void;
    /**
     * Exit a parse tree produced by the `exponent`
     * labeled alternative in `Excellent2Parser.expression`.
     * @param ctx the parse tree
     */
    exitExponent?: (ctx: ExponentContext) => void;

    /**
     * Enter a parse tree produced by the `dotLookup`
     * labeled alternative in `Excellent2Parser.atom`.
     * @param ctx the parse tree
     */
    enterDotLookup?: (ctx: DotLookupContext) => void;
    /**
     * Exit a parse tree produced by the `dotLookup`
     * labeled alternative in `Excellent2Parser.atom`.
     * @param ctx the parse tree
     */
    exitDotLookup?: (ctx: DotLookupContext) => void;

    /**
     * Enter a parse tree produced by the `null`
     * labeled alternative in `Excellent2Parser.atom`.
     * @param ctx the parse tree
     */
    enterNull?: (ctx: NullContext) => void;
    /**
     * Exit a parse tree produced by the `null`
     * labeled alternative in `Excellent2Parser.atom`.
     * @param ctx the parse tree
     */
    exitNull?: (ctx: NullContext) => void;

    /**
     * Enter a parse tree produced by the `functionCall`
     * labeled alternative in `Excellent2Parser.atom`.
     * @param ctx the parse tree
     */
    enterFunctionCall?: (ctx: FunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `functionCall`
     * labeled alternative in `Excellent2Parser.atom`.
     * @param ctx the parse tree
     */
    exitFunctionCall?: (ctx: FunctionCallContext) => void;

    /**
     * Enter a parse tree produced by the `true`
     * labeled alternative in `Excellent2Parser.atom`.
     * @param ctx the parse tree
     */
    enterTrue?: (ctx: TrueContext) => void;
    /**
     * Exit a parse tree produced by the `true`
     * labeled alternative in `Excellent2Parser.atom`.
     * @param ctx the parse tree
     */
    exitTrue?: (ctx: TrueContext) => void;

    /**
     * Enter a parse tree produced by the `false`
     * labeled alternative in `Excellent2Parser.atom`.
     * @param ctx the parse tree
     */
    enterFalse?: (ctx: FalseContext) => void;
    /**
     * Exit a parse tree produced by the `false`
     * labeled alternative in `Excellent2Parser.atom`.
     * @param ctx the parse tree
     */
    exitFalse?: (ctx: FalseContext) => void;

    /**
     * Enter a parse tree produced by the `arrayLookup`
     * labeled alternative in `Excellent2Parser.atom`.
     * @param ctx the parse tree
     */
    enterArrayLookup?: (ctx: ArrayLookupContext) => void;
    /**
     * Exit a parse tree produced by the `arrayLookup`
     * labeled alternative in `Excellent2Parser.atom`.
     * @param ctx the parse tree
     */
    exitArrayLookup?: (ctx: ArrayLookupContext) => void;

    /**
     * Enter a parse tree produced by the `contextReference`
     * labeled alternative in `Excellent2Parser.atom`.
     * @param ctx the parse tree
     */
    enterContextReference?: (ctx: ContextReferenceContext) => void;
    /**
     * Exit a parse tree produced by the `contextReference`
     * labeled alternative in `Excellent2Parser.atom`.
     * @param ctx the parse tree
     */
    exitContextReference?: (ctx: ContextReferenceContext) => void;

    /**
     * Enter a parse tree produced by the `textLiteral`
     * labeled alternative in `Excellent2Parser.atom`.
     * @param ctx the parse tree
     */
    enterTextLiteral?: (ctx: TextLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `textLiteral`
     * labeled alternative in `Excellent2Parser.atom`.
     * @param ctx the parse tree
     */
    exitTextLiteral?: (ctx: TextLiteralContext) => void;

    /**
     * Enter a parse tree produced by the `numberLiteral`
     * labeled alternative in `Excellent2Parser.atom`.
     * @param ctx the parse tree
     */
    enterNumberLiteral?: (ctx: NumberLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `numberLiteral`
     * labeled alternative in `Excellent2Parser.atom`.
     * @param ctx the parse tree
     */
    exitNumberLiteral?: (ctx: NumberLiteralContext) => void;

    /**
     * Enter a parse tree produced by the `functionParameters`
     * labeled alternative in `Excellent2Parser.parameters`.
     * @param ctx the parse tree
     */
    enterFunctionParameters?: (ctx: FunctionParametersContext) => void;
    /**
     * Exit a parse tree produced by the `functionParameters`
     * labeled alternative in `Excellent2Parser.parameters`.
     * @param ctx the parse tree
     */
    exitFunctionParameters?: (ctx: FunctionParametersContext) => void;

    /**
     * Enter a parse tree produced by `Excellent2Parser.parse`.
     * @param ctx the parse tree
     */
    enterParse?: (ctx: ParseContext) => void;
    /**
     * Exit a parse tree produced by `Excellent2Parser.parse`.
     * @param ctx the parse tree
     */
    exitParse?: (ctx: ParseContext) => void;

    /**
     * Enter a parse tree produced by `Excellent2Parser.atom`.
     * @param ctx the parse tree
     */
    enterAtom?: (ctx: AtomContext) => void;
    /**
     * Exit a parse tree produced by `Excellent2Parser.atom`.
     * @param ctx the parse tree
     */
    exitAtom?: (ctx: AtomContext) => void;

    /**
     * Enter a parse tree produced by `Excellent2Parser.expression`.
     * @param ctx the parse tree
     */
    enterExpression?: (ctx: ExpressionContext) => void;
    /**
     * Exit a parse tree produced by `Excellent2Parser.expression`.
     * @param ctx the parse tree
     */
    exitExpression?: (ctx: ExpressionContext) => void;

    /**
     * Enter a parse tree produced by `Excellent2Parser.fnname`.
     * @param ctx the parse tree
     */
    enterFnname?: (ctx: FnnameContext) => void;
    /**
     * Exit a parse tree produced by `Excellent2Parser.fnname`.
     * @param ctx the parse tree
     */
    exitFnname?: (ctx: FnnameContext) => void;

    /**
     * Enter a parse tree produced by `Excellent2Parser.parameters`.
     * @param ctx the parse tree
     */
    enterParameters?: (ctx: ParametersContext) => void;
    /**
     * Exit a parse tree produced by `Excellent2Parser.parameters`.
     * @param ctx the parse tree
     */
    exitParameters?: (ctx: ParametersContext) => void;
}
