// Generated from Excellent2.g4 by ANTLR 4.6-SNAPSHOT

import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `Excellent2Parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface Excellent2Visitor<Result> extends ParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by the `parentheses`
     * labeled alternative in `Excellent2Parser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParentheses?: (ctx: ParenthesesContext) => Result;

    /**
     * Visit a parse tree produced by the `negation`
     * labeled alternative in `Excellent2Parser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNegation?: (ctx: NegationContext) => Result;

    /**
     * Visit a parse tree produced by the `comparison`
     * labeled alternative in `Excellent2Parser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComparison?: (ctx: ComparisonContext) => Result;

    /**
     * Visit a parse tree produced by the `concatenation`
     * labeled alternative in `Excellent2Parser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConcatenation?: (ctx: ConcatenationContext) => Result;

    /**
     * Visit a parse tree produced by the `multiplicationOrDivision`
     * labeled alternative in `Excellent2Parser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultiplicationOrDivision?: (ctx: MultiplicationOrDivisionContext) => Result;

    /**
     * Visit a parse tree produced by the `atomReference`
     * labeled alternative in `Excellent2Parser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAtomReference?: (ctx: AtomReferenceContext) => Result;

    /**
     * Visit a parse tree produced by the `additionOrSubtraction`
     * labeled alternative in `Excellent2Parser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdditionOrSubtraction?: (ctx: AdditionOrSubtractionContext) => Result;

    /**
     * Visit a parse tree produced by the `equality`
     * labeled alternative in `Excellent2Parser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEquality?: (ctx: EqualityContext) => Result;

    /**
     * Visit a parse tree produced by the `exponent`
     * labeled alternative in `Excellent2Parser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExponent?: (ctx: ExponentContext) => Result;

    /**
     * Visit a parse tree produced by the `dotLookup`
     * labeled alternative in `Excellent2Parser.atom`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDotLookup?: (ctx: DotLookupContext) => Result;

    /**
     * Visit a parse tree produced by the `null`
     * labeled alternative in `Excellent2Parser.atom`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNull?: (ctx: NullContext) => Result;

    /**
     * Visit a parse tree produced by the `functionCall`
     * labeled alternative in `Excellent2Parser.atom`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionCall?: (ctx: FunctionCallContext) => Result;

    /**
     * Visit a parse tree produced by the `true`
     * labeled alternative in `Excellent2Parser.atom`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTrue?: (ctx: TrueContext) => Result;

    /**
     * Visit a parse tree produced by the `false`
     * labeled alternative in `Excellent2Parser.atom`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFalse?: (ctx: FalseContext) => Result;

    /**
     * Visit a parse tree produced by the `arrayLookup`
     * labeled alternative in `Excellent2Parser.atom`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArrayLookup?: (ctx: ArrayLookupContext) => Result;

    /**
     * Visit a parse tree produced by the `contextReference`
     * labeled alternative in `Excellent2Parser.atom`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitContextReference?: (ctx: ContextReferenceContext) => Result;

    /**
     * Visit a parse tree produced by the `textLiteral`
     * labeled alternative in `Excellent2Parser.atom`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTextLiteral?: (ctx: TextLiteralContext) => Result;

    /**
     * Visit a parse tree produced by the `numberLiteral`
     * labeled alternative in `Excellent2Parser.atom`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumberLiteral?: (ctx: NumberLiteralContext) => Result;

    /**
     * Visit a parse tree produced by the `functionParameters`
     * labeled alternative in `Excellent2Parser.parameters`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionParameters?: (ctx: FunctionParametersContext) => Result;

    /**
     * Visit a parse tree produced by `Excellent2Parser.parse`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParse?: (ctx: ParseContext) => Result;

    /**
     * Visit a parse tree produced by `Excellent2Parser.atom`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAtom?: (ctx: AtomContext) => Result;

    /**
     * Visit a parse tree produced by `Excellent2Parser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpression?: (ctx: ExpressionContext) => Result;

    /**
     * Visit a parse tree produced by `Excellent2Parser.fnname`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFnname?: (ctx: FnnameContext) => Result;

    /**
     * Visit a parse tree produced by `Excellent2Parser.parameters`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameters?: (ctx: ParametersContext) => Result;
}
