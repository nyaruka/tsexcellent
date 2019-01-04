// Generated from Excellent2.g4 by ANTLR 4.6-SNAPSHOT

import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { Excellent2Listener } from './Excellent2Listener';
import { Excellent2Visitor } from './Excellent2Visitor';

export class Excellent2Parser extends Parser {
    public static readonly COMMA = 1;
    public static readonly LPAREN = 2;
    public static readonly RPAREN = 3;
    public static readonly LBRACK = 4;
    public static readonly RBRACK = 5;
    public static readonly DOT = 6;
    public static readonly PLUS = 7;
    public static readonly MINUS = 8;
    public static readonly TIMES = 9;
    public static readonly DIVIDE = 10;
    public static readonly EXPONENT = 11;
    public static readonly EQ = 12;
    public static readonly NEQ = 13;
    public static readonly LTE = 14;
    public static readonly LT = 15;
    public static readonly GTE = 16;
    public static readonly GT = 17;
    public static readonly AMPERSAND = 18;
    public static readonly TEXT = 19;
    public static readonly NUMBER = 20;
    public static readonly TRUE = 21;
    public static readonly FALSE = 22;
    public static readonly NULL = 23;
    public static readonly NAME = 24;
    public static readonly WS = 25;
    public static readonly ERROR = 26;
    public static readonly RULE_parse = 0;
    public static readonly RULE_atom = 1;
    public static readonly RULE_expression = 2;
    public static readonly RULE_fnname = 3;
    public static readonly RULE_parameters = 4;
    // tslint:disable:no-trailing-whitespace
    public static readonly ruleNames: string[] = [
        'parse',
        'atom',
        'expression',
        'fnname',
        'parameters'
    ];

    private static readonly _LITERAL_NAMES: Array<string | undefined> = [
        undefined,
        "','",
        "'('",
        "')'",
        "'['",
        "']'",
        "'.'",
        "'+'",
        "'-'",
        "'*'",
        "'/'",
        "'^'",
        "'='",
        "'!='",
        "'<='",
        "'<'",
        "'>='",
        "'>'",
        "'&'"
    ];
    private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
        undefined,
        'COMMA',
        'LPAREN',
        'RPAREN',
        'LBRACK',
        'RBRACK',
        'DOT',
        'PLUS',
        'MINUS',
        'TIMES',
        'DIVIDE',
        'EXPONENT',
        'EQ',
        'NEQ',
        'LTE',
        'LT',
        'GTE',
        'GT',
        'AMPERSAND',
        'TEXT',
        'NUMBER',
        'TRUE',
        'FALSE',
        'NULL',
        'NAME',
        'WS',
        'ERROR'
    ];
    public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
        Excellent2Parser._LITERAL_NAMES,
        Excellent2Parser._SYMBOLIC_NAMES,
        []
    );

    // @Override
    // @NotNull
    public get vocabulary(): Vocabulary {
        return Excellent2Parser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace

    // @Override
    public get grammarFileName(): string {
        return 'Excellent2.g4';
    }

    // @Override
    public get ruleNames(): string[] {
        return Excellent2Parser.ruleNames;
    }

    // @Override
    public get serializedATN(): string {
        return Excellent2Parser._serializedATN;
    }

    constructor(input: TokenStream) {
        super(input);
        this._interp = new ParserATNSimulator(Excellent2Parser._ATN, this);
    }
    // @RuleVersion(0)
    public parse(): ParseContext {
        let _localctx: ParseContext = new ParseContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, Excellent2Parser.RULE_parse);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 10;
                this.expression(0);
                this.state = 11;
                this.match(Excellent2Parser.EOF);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return _localctx;
    }

    public atom(): AtomContext;
    public atom(_p: number): AtomContext;
    // @RuleVersion(0)
    public atom(_p?: number): AtomContext {
        if (_p === undefined) {
            _p = 0;
        }

        let _parentctx: ParserRuleContext = this._ctx;
        let _parentState: number = this.state;
        let _localctx: AtomContext = new AtomContext(this._ctx, _parentState);
        let _prevctx: AtomContext = _localctx;
        let _startState: number = 2;
        this.enterRecursionRule(_localctx, 2, Excellent2Parser.RULE_atom, _p);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 27;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
                    case 1:
                        {
                            _localctx = new FunctionCallContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;

                            this.state = 14;
                            this.fnname();
                            this.state = 15;
                            this.match(Excellent2Parser.LPAREN);
                            this.state = 17;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (
                                (_la & ~0x1f) === 0 &&
                                ((1 << _la) &
                                    ((1 << Excellent2Parser.LPAREN) |
                                        (1 << Excellent2Parser.MINUS) |
                                        (1 << Excellent2Parser.TEXT) |
                                        (1 << Excellent2Parser.NUMBER) |
                                        (1 << Excellent2Parser.TRUE) |
                                        (1 << Excellent2Parser.FALSE) |
                                        (1 << Excellent2Parser.NULL) |
                                        (1 << Excellent2Parser.NAME))) !==
                                    0
                            ) {
                                {
                                    this.state = 16;
                                    this.parameters();
                                }
                            }

                            this.state = 19;
                            this.match(Excellent2Parser.RPAREN);
                        }
                        break;

                    case 2:
                        {
                            _localctx = new ContextReferenceContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 21;
                            this.match(Excellent2Parser.NAME);
                        }
                        break;

                    case 3:
                        {
                            _localctx = new TextLiteralContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 22;
                            this.match(Excellent2Parser.TEXT);
                        }
                        break;

                    case 4:
                        {
                            _localctx = new NumberLiteralContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 23;
                            this.match(Excellent2Parser.NUMBER);
                        }
                        break;

                    case 5:
                        {
                            _localctx = new TrueContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 24;
                            this.match(Excellent2Parser.TRUE);
                        }
                        break;

                    case 6:
                        {
                            _localctx = new FalseContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 25;
                            this.match(Excellent2Parser.FALSE);
                        }
                        break;

                    case 7:
                        {
                            _localctx = new NullContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 26;
                            this.match(Excellent2Parser.NULL);
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 39;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 37;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new DotLookupContext(
                                            new AtomContext(_parentctx, _parentState)
                                        );
                                        this.pushNewRecursionContext(
                                            _localctx,
                                            _startState,
                                            Excellent2Parser.RULE_atom
                                        );
                                        this.state = 29;
                                        if (!this.precpred(this._ctx, 8)) {
                                            throw new FailedPredicateException(
                                                this,
                                                'this.precpred(this._ctx, 8)'
                                            );
                                        }
                                        this.state = 30;
                                        this.match(Excellent2Parser.DOT);
                                        this.state = 31;
                                        this.atom(9);
                                    }
                                    break;

                                case 2:
                                    {
                                        _localctx = new ArrayLookupContext(
                                            new AtomContext(_parentctx, _parentState)
                                        );
                                        this.pushNewRecursionContext(
                                            _localctx,
                                            _startState,
                                            Excellent2Parser.RULE_atom
                                        );
                                        this.state = 32;
                                        if (!this.precpred(this._ctx, 7)) {
                                            throw new FailedPredicateException(
                                                this,
                                                'this.precpred(this._ctx, 7)'
                                            );
                                        }
                                        this.state = 33;
                                        this.match(Excellent2Parser.LBRACK);
                                        this.state = 34;
                                        this.expression(0);
                                        this.state = 35;
                                        this.match(Excellent2Parser.RBRACK);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 41;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }

    public expression(): ExpressionContext;
    public expression(_p: number): ExpressionContext;
    // @RuleVersion(0)
    public expression(_p?: number): ExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let _parentctx: ParserRuleContext = this._ctx;
        let _parentState: number = this.state;
        let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
        let _prevctx: ExpressionContext = _localctx;
        let _startState: number = 4;
        this.enterRecursionRule(_localctx, 4, Excellent2Parser.RULE_expression, _p);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 50;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case Excellent2Parser.TEXT:
                    case Excellent2Parser.NUMBER:
                    case Excellent2Parser.TRUE:
                    case Excellent2Parser.FALSE:
                    case Excellent2Parser.NULL:
                    case Excellent2Parser.NAME:
                        {
                            _localctx = new AtomReferenceContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;

                            this.state = 43;
                            this.atom(0);
                        }
                        break;
                    case Excellent2Parser.MINUS:
                        {
                            _localctx = new NegationContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 44;
                            this.match(Excellent2Parser.MINUS);
                            this.state = 45;
                            this.expression(8);
                        }
                        break;
                    case Excellent2Parser.LPAREN:
                        {
                            _localctx = new ParenthesesContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 46;
                            this.match(Excellent2Parser.LPAREN);
                            this.state = 47;
                            this.expression(0);
                            this.state = 48;
                            this.match(Excellent2Parser.RPAREN);
                        }
                        break;
                    default:
                        throw new NoViableAltException(this);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 72;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 70;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new ExponentContext(
                                            new ExpressionContext(_parentctx, _parentState)
                                        );
                                        this.pushNewRecursionContext(
                                            _localctx,
                                            _startState,
                                            Excellent2Parser.RULE_expression
                                        );
                                        this.state = 52;
                                        if (!this.precpred(this._ctx, 7)) {
                                            throw new FailedPredicateException(
                                                this,
                                                'this.precpred(this._ctx, 7)'
                                            );
                                        }
                                        this.state = 53;
                                        this.match(Excellent2Parser.EXPONENT);
                                        this.state = 54;
                                        this.expression(8);
                                    }
                                    break;

                                case 2:
                                    {
                                        _localctx = new MultiplicationOrDivisionContext(
                                            new ExpressionContext(_parentctx, _parentState)
                                        );
                                        this.pushNewRecursionContext(
                                            _localctx,
                                            _startState,
                                            Excellent2Parser.RULE_expression
                                        );
                                        this.state = 55;
                                        if (!this.precpred(this._ctx, 6)) {
                                            throw new FailedPredicateException(
                                                this,
                                                'this.precpred(this._ctx, 6)'
                                            );
                                        }
                                        this.state = 56;
                                        (_localctx as MultiplicationOrDivisionContext)._op = this._input.LT(
                                            1
                                        );
                                        _la = this._input.LA(1);
                                        if (
                                            !(
                                                _la === Excellent2Parser.TIMES ||
                                                _la === Excellent2Parser.DIVIDE
                                            )
                                        ) {
                                            (_localctx as MultiplicationOrDivisionContext)._op = this._errHandler.recoverInline(
                                                this
                                            );
                                        } else {
                                            if (this._input.LA(1) === Token.EOF) {
                                                this.matchedEOF = true;
                                            }

                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 57;
                                        this.expression(7);
                                    }
                                    break;

                                case 3:
                                    {
                                        _localctx = new AdditionOrSubtractionContext(
                                            new ExpressionContext(_parentctx, _parentState)
                                        );
                                        this.pushNewRecursionContext(
                                            _localctx,
                                            _startState,
                                            Excellent2Parser.RULE_expression
                                        );
                                        this.state = 58;
                                        if (!this.precpred(this._ctx, 5)) {
                                            throw new FailedPredicateException(
                                                this,
                                                'this.precpred(this._ctx, 5)'
                                            );
                                        }
                                        this.state = 59;
                                        (_localctx as AdditionOrSubtractionContext)._op = this._input.LT(
                                            1
                                        );
                                        _la = this._input.LA(1);
                                        if (
                                            !(
                                                _la === Excellent2Parser.PLUS ||
                                                _la === Excellent2Parser.MINUS
                                            )
                                        ) {
                                            (_localctx as AdditionOrSubtractionContext)._op = this._errHandler.recoverInline(
                                                this
                                            );
                                        } else {
                                            if (this._input.LA(1) === Token.EOF) {
                                                this.matchedEOF = true;
                                            }

                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 60;
                                        this.expression(6);
                                    }
                                    break;

                                case 4:
                                    {
                                        _localctx = new ComparisonContext(
                                            new ExpressionContext(_parentctx, _parentState)
                                        );
                                        this.pushNewRecursionContext(
                                            _localctx,
                                            _startState,
                                            Excellent2Parser.RULE_expression
                                        );
                                        this.state = 61;
                                        if (!this.precpred(this._ctx, 4)) {
                                            throw new FailedPredicateException(
                                                this,
                                                'this.precpred(this._ctx, 4)'
                                            );
                                        }
                                        this.state = 62;
                                        (_localctx as ComparisonContext)._op = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (
                                            !(
                                                (_la & ~0x1f) === 0 &&
                                                ((1 << _la) &
                                                    ((1 << Excellent2Parser.LTE) |
                                                        (1 << Excellent2Parser.LT) |
                                                        (1 << Excellent2Parser.GTE) |
                                                        (1 << Excellent2Parser.GT))) !==
                                                    0
                                            )
                                        ) {
                                            (_localctx as ComparisonContext)._op = this._errHandler.recoverInline(
                                                this
                                            );
                                        } else {
                                            if (this._input.LA(1) === Token.EOF) {
                                                this.matchedEOF = true;
                                            }

                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 63;
                                        this.expression(5);
                                    }
                                    break;

                                case 5:
                                    {
                                        _localctx = new EqualityContext(
                                            new ExpressionContext(_parentctx, _parentState)
                                        );
                                        this.pushNewRecursionContext(
                                            _localctx,
                                            _startState,
                                            Excellent2Parser.RULE_expression
                                        );
                                        this.state = 64;
                                        if (!this.precpred(this._ctx, 3)) {
                                            throw new FailedPredicateException(
                                                this,
                                                'this.precpred(this._ctx, 3)'
                                            );
                                        }
                                        this.state = 65;
                                        (_localctx as EqualityContext)._op = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (
                                            !(
                                                _la === Excellent2Parser.EQ ||
                                                _la === Excellent2Parser.NEQ
                                            )
                                        ) {
                                            (_localctx as EqualityContext)._op = this._errHandler.recoverInline(
                                                this
                                            );
                                        } else {
                                            if (this._input.LA(1) === Token.EOF) {
                                                this.matchedEOF = true;
                                            }

                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 66;
                                        this.expression(4);
                                    }
                                    break;

                                case 6:
                                    {
                                        _localctx = new ConcatenationContext(
                                            new ExpressionContext(_parentctx, _parentState)
                                        );
                                        this.pushNewRecursionContext(
                                            _localctx,
                                            _startState,
                                            Excellent2Parser.RULE_expression
                                        );
                                        this.state = 67;
                                        if (!this.precpred(this._ctx, 2)) {
                                            throw new FailedPredicateException(
                                                this,
                                                'this.precpred(this._ctx, 2)'
                                            );
                                        }
                                        this.state = 68;
                                        this.match(Excellent2Parser.AMPERSAND);
                                        this.state = 69;
                                        this.expression(3);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 74;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    // @RuleVersion(0)
    public fnname(): FnnameContext {
        let _localctx: FnnameContext = new FnnameContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, Excellent2Parser.RULE_fnname);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 75;
                this.match(Excellent2Parser.NAME);
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    public parameters(): ParametersContext {
        let _localctx: ParametersContext = new ParametersContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, Excellent2Parser.RULE_parameters);
        let _la: number;
        try {
            _localctx = new FunctionParametersContext(_localctx);
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 77;
                this.expression(0);
                this.state = 82;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === Excellent2Parser.COMMA) {
                    {
                        {
                            this.state = 78;
                            this.match(Excellent2Parser.COMMA);
                            this.state = 79;
                            this.expression(0);
                        }
                    }
                    this.state = 84;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        } catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return _localctx;
    }

    public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
            case 1:
                return this.atom_sempred(_localctx as AtomContext, predIndex);

            case 2:
                return this.expression_sempred(_localctx as ExpressionContext, predIndex);
        }
        return true;
    }
    private atom_sempred(_localctx: AtomContext, predIndex: number): boolean {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 8);

            case 1:
                return this.precpred(this._ctx, 7);
        }
        return true;
    }
    private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
        switch (predIndex) {
            case 2:
                return this.precpred(this._ctx, 7);

            case 3:
                return this.precpred(this._ctx, 6);

            case 4:
                return this.precpred(this._ctx, 5);

            case 5:
                return this.precpred(this._ctx, 4);

            case 6:
                return this.precpred(this._ctx, 3);

            case 7:
                return this.precpred(this._ctx, 2);
        }
        return true;
    }

    public static readonly _serializedATN: string =
        '\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\x1CX\x04\x02' +
        '\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03\x02' +
        '\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\x14\n\x03\x03' +
        '\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\x1E' +
        '\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03' +
        '\x07\x03(\n\x03\f\x03\x0E\x03+\v\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03' +
        '\x04\x03\x04\x03\x04\x03\x04\x05\x045\n\x04\x03\x04\x03\x04\x03\x04\x03' +
        '\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03' +
        '\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04I\n\x04\f\x04\x0E' +
        '\x04L\v\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x07\x06S\n\x06\f\x06' +
        '\x0E\x06V\v\x06\x03\x06\x02\x02\x04\x04\x06\x07\x02\x02\x04\x02\x06\x02' +
        '\b\x02\n\x02\x02\x06\x03\x02\v\f\x03\x02\t\n\x03\x02\x10\x13\x03\x02\x0E' +
        '\x0Fd\x02\f\x03\x02\x02\x02\x04\x1D\x03\x02\x02\x02\x064\x03\x02\x02\x02' +
        '\bM\x03\x02\x02\x02\nO\x03\x02\x02\x02\f\r\x05\x06\x04\x02\r\x0E\x07\x02' +
        '\x02\x03\x0E\x03\x03\x02\x02\x02\x0F\x10\b\x03\x01\x02\x10\x11\x05\b\x05' +
        '\x02\x11\x13\x07\x04\x02\x02\x12\x14\x05\n\x06\x02\x13\x12\x03\x02\x02' +
        '\x02\x13\x14\x03\x02\x02\x02\x14\x15\x03\x02\x02\x02\x15\x16\x07\x05\x02' +
        '\x02\x16\x1E\x03\x02\x02\x02\x17\x1E\x07\x1A\x02\x02\x18\x1E\x07\x15\x02' +
        '\x02\x19\x1E\x07\x16\x02\x02\x1A\x1E\x07\x17\x02\x02\x1B\x1E\x07\x18\x02' +
        '\x02\x1C\x1E\x07\x19\x02\x02\x1D\x0F\x03\x02\x02\x02\x1D\x17\x03\x02\x02' +
        '\x02\x1D\x18\x03\x02\x02\x02\x1D\x19\x03\x02\x02\x02\x1D\x1A\x03\x02\x02' +
        '\x02\x1D\x1B\x03\x02\x02\x02\x1D\x1C\x03\x02\x02\x02\x1E)\x03\x02\x02' +
        '\x02\x1F \f\n\x02\x02 !\x07\b\x02\x02!(\x05\x04\x03\v"#\f\t\x02\x02#' +
        '$\x07\x06\x02\x02$%\x05\x06\x04\x02%&\x07\x07\x02\x02&(\x03\x02\x02\x02' +
        "'\x1F\x03\x02\x02\x02'\"\x03\x02\x02\x02(+\x03\x02\x02\x02)'\x03\x02" +
        '\x02\x02)*\x03\x02\x02\x02*\x05\x03\x02\x02\x02+)\x03\x02\x02\x02,-\b' +
        '\x04\x01\x02-5\x05\x04\x03\x02./\x07\n\x02\x02/5\x05\x06\x04\n01\x07\x04' +
        '\x02\x0212\x05\x06\x04\x0223\x07\x05\x02\x0235\x03\x02\x02\x024,\x03\x02' +
        '\x02\x024.\x03\x02\x02\x0240\x03\x02\x02\x025J\x03\x02\x02\x0267\f\t\x02' +
        '\x0278\x07\r\x02\x028I\x05\x06\x04\n9:\f\b\x02\x02:;\t\x02\x02\x02;I\x05' +
        '\x06\x04\t<=\f\x07\x02\x02=>\t\x03\x02\x02>I\x05\x06\x04\b?@\f\x06\x02' +
        '\x02@A\t\x04\x02\x02AI\x05\x06\x04\x07BC\f\x05\x02\x02CD\t\x05\x02\x02' +
        'DI\x05\x06\x04\x06EF\f\x04\x02\x02FG\x07\x14\x02\x02GI\x05\x06\x04\x05' +
        'H6\x03\x02\x02\x02H9\x03\x02\x02\x02H<\x03\x02\x02\x02H?\x03\x02\x02\x02' +
        'HB\x03\x02\x02\x02HE\x03\x02\x02\x02IL\x03\x02\x02\x02JH\x03\x02\x02\x02' +
        'JK\x03\x02\x02\x02K\x07\x03\x02\x02\x02LJ\x03\x02\x02\x02MN\x07\x1A\x02' +
        '\x02N\t\x03\x02\x02\x02OT\x05\x06\x04\x02PQ\x07\x03\x02\x02QS\x05\x06' +
        '\x04\x02RP\x03\x02\x02\x02SV\x03\x02\x02\x02TR\x03\x02\x02\x02TU\x03\x02' +
        "\x02\x02U\v\x03\x02\x02\x02VT\x03\x02\x02\x02\n\x13\x1D')4HJT";
    public static __ATN: ATN;
    public static get _ATN(): ATN {
        if (!Excellent2Parser.__ATN) {
            Excellent2Parser.__ATN = new ATNDeserializer().deserialize(
                Utils.toCharArray(Excellent2Parser._serializedATN)
            );
        }

        return Excellent2Parser.__ATN;
    }
}

export class ParseContext extends ParserRuleContext {
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext);
    }
    public EOF(): TerminalNode {
        return this.getToken(Excellent2Parser.EOF, 0);
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return Excellent2Parser.RULE_parse;
    }
    // @Override
    public enterRule(listener: Excellent2Listener): void {
        if (listener.enterParse) {
            listener.enterParse(this);
        }
    }
    // @Override
    public exitRule(listener: Excellent2Listener): void {
        if (listener.exitParse) {
            listener.exitParse(this);
        }
    }
    // @Override
    public accept<Result>(visitor: Excellent2Visitor<Result>): Result {
        if (visitor.visitParse) {
            return visitor.visitParse(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class AtomContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return Excellent2Parser.RULE_atom;
    }
    public copyFrom(ctx: AtomContext): void {
        super.copyFrom(ctx);
    }
}
export class DotLookupContext extends AtomContext {
    public atom(): AtomContext[];
    public atom(i: number): AtomContext;
    public atom(i?: number): AtomContext | AtomContext[] {
        if (i === undefined) {
            return this.getRuleContexts(AtomContext);
        } else {
            return this.getRuleContext(i, AtomContext);
        }
    }
    public DOT(): TerminalNode {
        return this.getToken(Excellent2Parser.DOT, 0);
    }
    constructor(ctx: AtomContext) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    public enterRule(listener: Excellent2Listener): void {
        if (listener.enterDotLookup) {
            listener.enterDotLookup(this);
        }
    }
    // @Override
    public exitRule(listener: Excellent2Listener): void {
        if (listener.exitDotLookup) {
            listener.exitDotLookup(this);
        }
    }
    // @Override
    public accept<Result>(visitor: Excellent2Visitor<Result>): Result {
        if (visitor.visitDotLookup) {
            return visitor.visitDotLookup(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NullContext extends AtomContext {
    public NULL(): TerminalNode {
        return this.getToken(Excellent2Parser.NULL, 0);
    }
    constructor(ctx: AtomContext) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    public enterRule(listener: Excellent2Listener): void {
        if (listener.enterNull) {
            listener.enterNull(this);
        }
    }
    // @Override
    public exitRule(listener: Excellent2Listener): void {
        if (listener.exitNull) {
            listener.exitNull(this);
        }
    }
    // @Override
    public accept<Result>(visitor: Excellent2Visitor<Result>): Result {
        if (visitor.visitNull) {
            return visitor.visitNull(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class FunctionCallContext extends AtomContext {
    public fnname(): FnnameContext {
        return this.getRuleContext(0, FnnameContext);
    }
    public LPAREN(): TerminalNode {
        return this.getToken(Excellent2Parser.LPAREN, 0);
    }
    public RPAREN(): TerminalNode {
        return this.getToken(Excellent2Parser.RPAREN, 0);
    }
    public parameters(): ParametersContext | undefined {
        return this.tryGetRuleContext(0, ParametersContext);
    }
    constructor(ctx: AtomContext) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    public enterRule(listener: Excellent2Listener): void {
        if (listener.enterFunctionCall) {
            listener.enterFunctionCall(this);
        }
    }
    // @Override
    public exitRule(listener: Excellent2Listener): void {
        if (listener.exitFunctionCall) {
            listener.exitFunctionCall(this);
        }
    }
    // @Override
    public accept<Result>(visitor: Excellent2Visitor<Result>): Result {
        if (visitor.visitFunctionCall) {
            return visitor.visitFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class TrueContext extends AtomContext {
    public TRUE(): TerminalNode {
        return this.getToken(Excellent2Parser.TRUE, 0);
    }
    constructor(ctx: AtomContext) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    public enterRule(listener: Excellent2Listener): void {
        if (listener.enterTrue) {
            listener.enterTrue(this);
        }
    }
    // @Override
    public exitRule(listener: Excellent2Listener): void {
        if (listener.exitTrue) {
            listener.exitTrue(this);
        }
    }
    // @Override
    public accept<Result>(visitor: Excellent2Visitor<Result>): Result {
        if (visitor.visitTrue) {
            return visitor.visitTrue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class FalseContext extends AtomContext {
    public FALSE(): TerminalNode {
        return this.getToken(Excellent2Parser.FALSE, 0);
    }
    constructor(ctx: AtomContext) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    public enterRule(listener: Excellent2Listener): void {
        if (listener.enterFalse) {
            listener.enterFalse(this);
        }
    }
    // @Override
    public exitRule(listener: Excellent2Listener): void {
        if (listener.exitFalse) {
            listener.exitFalse(this);
        }
    }
    // @Override
    public accept<Result>(visitor: Excellent2Visitor<Result>): Result {
        if (visitor.visitFalse) {
            return visitor.visitFalse(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ArrayLookupContext extends AtomContext {
    public atom(): AtomContext {
        return this.getRuleContext(0, AtomContext);
    }
    public LBRACK(): TerminalNode {
        return this.getToken(Excellent2Parser.LBRACK, 0);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext);
    }
    public RBRACK(): TerminalNode {
        return this.getToken(Excellent2Parser.RBRACK, 0);
    }
    constructor(ctx: AtomContext) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    public enterRule(listener: Excellent2Listener): void {
        if (listener.enterArrayLookup) {
            listener.enterArrayLookup(this);
        }
    }
    // @Override
    public exitRule(listener: Excellent2Listener): void {
        if (listener.exitArrayLookup) {
            listener.exitArrayLookup(this);
        }
    }
    // @Override
    public accept<Result>(visitor: Excellent2Visitor<Result>): Result {
        if (visitor.visitArrayLookup) {
            return visitor.visitArrayLookup(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ContextReferenceContext extends AtomContext {
    public NAME(): TerminalNode {
        return this.getToken(Excellent2Parser.NAME, 0);
    }
    constructor(ctx: AtomContext) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    public enterRule(listener: Excellent2Listener): void {
        if (listener.enterContextReference) {
            listener.enterContextReference(this);
        }
    }
    // @Override
    public exitRule(listener: Excellent2Listener): void {
        if (listener.exitContextReference) {
            listener.exitContextReference(this);
        }
    }
    // @Override
    public accept<Result>(visitor: Excellent2Visitor<Result>): Result {
        if (visitor.visitContextReference) {
            return visitor.visitContextReference(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class TextLiteralContext extends AtomContext {
    public TEXT(): TerminalNode {
        return this.getToken(Excellent2Parser.TEXT, 0);
    }
    constructor(ctx: AtomContext) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    public enterRule(listener: Excellent2Listener): void {
        if (listener.enterTextLiteral) {
            listener.enterTextLiteral(this);
        }
    }
    // @Override
    public exitRule(listener: Excellent2Listener): void {
        if (listener.exitTextLiteral) {
            listener.exitTextLiteral(this);
        }
    }
    // @Override
    public accept<Result>(visitor: Excellent2Visitor<Result>): Result {
        if (visitor.visitTextLiteral) {
            return visitor.visitTextLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NumberLiteralContext extends AtomContext {
    public NUMBER(): TerminalNode {
        return this.getToken(Excellent2Parser.NUMBER, 0);
    }
    constructor(ctx: AtomContext) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    public enterRule(listener: Excellent2Listener): void {
        if (listener.enterNumberLiteral) {
            listener.enterNumberLiteral(this);
        }
    }
    // @Override
    public exitRule(listener: Excellent2Listener): void {
        if (listener.exitNumberLiteral) {
            listener.exitNumberLiteral(this);
        }
    }
    // @Override
    public accept<Result>(visitor: Excellent2Visitor<Result>): Result {
        if (visitor.visitNumberLiteral) {
            return visitor.visitNumberLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ExpressionContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return Excellent2Parser.RULE_expression;
    }
    public copyFrom(ctx: ExpressionContext): void {
        super.copyFrom(ctx);
    }
}
export class ParenthesesContext extends ExpressionContext {
    public LPAREN(): TerminalNode {
        return this.getToken(Excellent2Parser.LPAREN, 0);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext);
    }
    public RPAREN(): TerminalNode {
        return this.getToken(Excellent2Parser.RPAREN, 0);
    }
    constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    public enterRule(listener: Excellent2Listener): void {
        if (listener.enterParentheses) {
            listener.enterParentheses(this);
        }
    }
    // @Override
    public exitRule(listener: Excellent2Listener): void {
        if (listener.exitParentheses) {
            listener.exitParentheses(this);
        }
    }
    // @Override
    public accept<Result>(visitor: Excellent2Visitor<Result>): Result {
        if (visitor.visitParentheses) {
            return visitor.visitParentheses(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NegationContext extends ExpressionContext {
    public MINUS(): TerminalNode {
        return this.getToken(Excellent2Parser.MINUS, 0);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext);
    }
    constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    public enterRule(listener: Excellent2Listener): void {
        if (listener.enterNegation) {
            listener.enterNegation(this);
        }
    }
    // @Override
    public exitRule(listener: Excellent2Listener): void {
        if (listener.exitNegation) {
            listener.exitNegation(this);
        }
    }
    // @Override
    public accept<Result>(visitor: Excellent2Visitor<Result>): Result {
        if (visitor.visitNegation) {
            return visitor.visitNegation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ComparisonContext extends ExpressionContext {
    public _op: Token;
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext;
    public expression(i?: number): ExpressionContext | ExpressionContext[] {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        } else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    public LTE(): TerminalNode | undefined {
        return this.tryGetToken(Excellent2Parser.LTE, 0);
    }
    public LT(): TerminalNode | undefined {
        return this.tryGetToken(Excellent2Parser.LT, 0);
    }
    public GTE(): TerminalNode | undefined {
        return this.tryGetToken(Excellent2Parser.GTE, 0);
    }
    public GT(): TerminalNode | undefined {
        return this.tryGetToken(Excellent2Parser.GT, 0);
    }
    constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    public enterRule(listener: Excellent2Listener): void {
        if (listener.enterComparison) {
            listener.enterComparison(this);
        }
    }
    // @Override
    public exitRule(listener: Excellent2Listener): void {
        if (listener.exitComparison) {
            listener.exitComparison(this);
        }
    }
    // @Override
    public accept<Result>(visitor: Excellent2Visitor<Result>): Result {
        if (visitor.visitComparison) {
            return visitor.visitComparison(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ConcatenationContext extends ExpressionContext {
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext;
    public expression(i?: number): ExpressionContext | ExpressionContext[] {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        } else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    public AMPERSAND(): TerminalNode {
        return this.getToken(Excellent2Parser.AMPERSAND, 0);
    }
    constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    public enterRule(listener: Excellent2Listener): void {
        if (listener.enterConcatenation) {
            listener.enterConcatenation(this);
        }
    }
    // @Override
    public exitRule(listener: Excellent2Listener): void {
        if (listener.exitConcatenation) {
            listener.exitConcatenation(this);
        }
    }
    // @Override
    public accept<Result>(visitor: Excellent2Visitor<Result>): Result {
        if (visitor.visitConcatenation) {
            return visitor.visitConcatenation(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class MultiplicationOrDivisionContext extends ExpressionContext {
    public _op: Token;
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext;
    public expression(i?: number): ExpressionContext | ExpressionContext[] {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        } else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    public TIMES(): TerminalNode | undefined {
        return this.tryGetToken(Excellent2Parser.TIMES, 0);
    }
    public DIVIDE(): TerminalNode | undefined {
        return this.tryGetToken(Excellent2Parser.DIVIDE, 0);
    }
    constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    public enterRule(listener: Excellent2Listener): void {
        if (listener.enterMultiplicationOrDivision) {
            listener.enterMultiplicationOrDivision(this);
        }
    }
    // @Override
    public exitRule(listener: Excellent2Listener): void {
        if (listener.exitMultiplicationOrDivision) {
            listener.exitMultiplicationOrDivision(this);
        }
    }
    // @Override
    public accept<Result>(visitor: Excellent2Visitor<Result>): Result {
        if (visitor.visitMultiplicationOrDivision) {
            return visitor.visitMultiplicationOrDivision(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AtomReferenceContext extends ExpressionContext {
    public atom(): AtomContext {
        return this.getRuleContext(0, AtomContext);
    }
    constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    public enterRule(listener: Excellent2Listener): void {
        if (listener.enterAtomReference) {
            listener.enterAtomReference(this);
        }
    }
    // @Override
    public exitRule(listener: Excellent2Listener): void {
        if (listener.exitAtomReference) {
            listener.exitAtomReference(this);
        }
    }
    // @Override
    public accept<Result>(visitor: Excellent2Visitor<Result>): Result {
        if (visitor.visitAtomReference) {
            return visitor.visitAtomReference(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AdditionOrSubtractionContext extends ExpressionContext {
    public _op: Token;
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext;
    public expression(i?: number): ExpressionContext | ExpressionContext[] {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        } else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    public PLUS(): TerminalNode | undefined {
        return this.tryGetToken(Excellent2Parser.PLUS, 0);
    }
    public MINUS(): TerminalNode | undefined {
        return this.tryGetToken(Excellent2Parser.MINUS, 0);
    }
    constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    public enterRule(listener: Excellent2Listener): void {
        if (listener.enterAdditionOrSubtraction) {
            listener.enterAdditionOrSubtraction(this);
        }
    }
    // @Override
    public exitRule(listener: Excellent2Listener): void {
        if (listener.exitAdditionOrSubtraction) {
            listener.exitAdditionOrSubtraction(this);
        }
    }
    // @Override
    public accept<Result>(visitor: Excellent2Visitor<Result>): Result {
        if (visitor.visitAdditionOrSubtraction) {
            return visitor.visitAdditionOrSubtraction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class EqualityContext extends ExpressionContext {
    public _op: Token;
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext;
    public expression(i?: number): ExpressionContext | ExpressionContext[] {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        } else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    public EQ(): TerminalNode | undefined {
        return this.tryGetToken(Excellent2Parser.EQ, 0);
    }
    public NEQ(): TerminalNode | undefined {
        return this.tryGetToken(Excellent2Parser.NEQ, 0);
    }
    constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    public enterRule(listener: Excellent2Listener): void {
        if (listener.enterEquality) {
            listener.enterEquality(this);
        }
    }
    // @Override
    public exitRule(listener: Excellent2Listener): void {
        if (listener.exitEquality) {
            listener.exitEquality(this);
        }
    }
    // @Override
    public accept<Result>(visitor: Excellent2Visitor<Result>): Result {
        if (visitor.visitEquality) {
            return visitor.visitEquality(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ExponentContext extends ExpressionContext {
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext;
    public expression(i?: number): ExpressionContext | ExpressionContext[] {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        } else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    public EXPONENT(): TerminalNode {
        return this.getToken(Excellent2Parser.EXPONENT, 0);
    }
    constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    public enterRule(listener: Excellent2Listener): void {
        if (listener.enterExponent) {
            listener.enterExponent(this);
        }
    }
    // @Override
    public exitRule(listener: Excellent2Listener): void {
        if (listener.exitExponent) {
            listener.exitExponent(this);
        }
    }
    // @Override
    public accept<Result>(visitor: Excellent2Visitor<Result>): Result {
        if (visitor.visitExponent) {
            return visitor.visitExponent(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class FnnameContext extends ParserRuleContext {
    public NAME(): TerminalNode {
        return this.getToken(Excellent2Parser.NAME, 0);
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return Excellent2Parser.RULE_fnname;
    }
    // @Override
    public enterRule(listener: Excellent2Listener): void {
        if (listener.enterFnname) {
            listener.enterFnname(this);
        }
    }
    // @Override
    public exitRule(listener: Excellent2Listener): void {
        if (listener.exitFnname) {
            listener.exitFnname(this);
        }
    }
    // @Override
    public accept<Result>(visitor: Excellent2Visitor<Result>): Result {
        if (visitor.visitFnname) {
            return visitor.visitFnname(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ParametersContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState);
    }
    // @Override
    public get ruleIndex(): number {
        return Excellent2Parser.RULE_parameters;
    }
    public copyFrom(ctx: ParametersContext): void {
        super.copyFrom(ctx);
    }
}
export class FunctionParametersContext extends ParametersContext {
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext;
    public expression(i?: number): ExpressionContext | ExpressionContext[] {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        } else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    public COMMA(): TerminalNode[];
    public COMMA(i: number): TerminalNode;
    public COMMA(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(Excellent2Parser.COMMA);
        } else {
            return this.getToken(Excellent2Parser.COMMA, i);
        }
    }
    constructor(ctx: ParametersContext) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    public enterRule(listener: Excellent2Listener): void {
        if (listener.enterFunctionParameters) {
            listener.enterFunctionParameters(this);
        }
    }
    // @Override
    public exitRule(listener: Excellent2Listener): void {
        if (listener.exitFunctionParameters) {
            listener.exitFunctionParameters(this);
        }
    }
    // @Override
    public accept<Result>(visitor: Excellent2Visitor<Result>): Result {
        if (visitor.visitFunctionParameters) {
            return visitor.visitFunctionParameters(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
