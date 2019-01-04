// Generated from Excellent2.g4 by ANTLR 4.6-SNAPSHOT

import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { CharStream } from 'antlr4ts/CharStream';
import { Lexer } from 'antlr4ts/Lexer';
import { LexerATNSimulator } from 'antlr4ts/atn/LexerATNSimulator';
import { NotNull } from 'antlr4ts/Decorators';
import { Override } from 'antlr4ts/Decorators';
import { RuleContext } from 'antlr4ts/RuleContext';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

export class Excellent2Lexer extends Lexer {
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
    // tslint:disable:no-trailing-whitespace
    public static readonly modeNames: string[] = ['DEFAULT_MODE'];

    public static readonly ruleNames: string[] = [
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
        'ERROR',
        'UnicodeLetter',
        'UnicodeClass_LU',
        'UnicodeClass_LL',
        'UnicodeClass_LT',
        'UnicodeClass_LM',
        'UnicodeClass_LO',
        'UnicodeDigit'
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
        Excellent2Lexer._LITERAL_NAMES,
        Excellent2Lexer._SYMBOLIC_NAMES,
        []
    );

    // @Override
    // @NotNull
    public get vocabulary(): Vocabulary {
        return Excellent2Lexer.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace

    constructor(input: CharStream) {
        super(input);
        this._interp = new LexerATNSimulator(Excellent2Lexer._ATN, this);
    }

    // @Override
    public get grammarFileName(): string {
        return 'Excellent2.g4';
    }

    // @Override
    public get ruleNames(): string[] {
        return Excellent2Lexer.ruleNames;
    }

    // @Override
    public get serializedATN(): string {
        return Excellent2Lexer._serializedATN;
    }

    // @Override
    public get modeNames(): string[] {
        return Excellent2Lexer.modeNames;
    }

    public static readonly _serializedATN: string =
        '\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x02\x1C\xBD\b\x01' +
        '\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06' +
        '\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r' +
        '\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t' +
        '\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t' +
        '\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t' +
        '\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04"\t' +
        '"\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03' +
        '\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v' +
        '\x03\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F' +
        '\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13' +
        '\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14q\n\x14\f\x14\x0E\x14' +
        't\v\x14\x03\x14\x03\x14\x03\x15\x06\x15y\n\x15\r\x15\x0E\x15z\x03\x15' +
        '\x03\x15\x06\x15\x7F\n\x15\r\x15\x0E\x15\x80\x05\x15\x83\n\x15\x03\x16' +
        '\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17' +
        '\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x06\x19\x96\n' +
        '\x19\r\x19\x0E\x19\x97\x03\x19\x03\x19\x03\x19\x07\x19\x9D\n\x19\f\x19' +
        '\x0E\x19\xA0\v\x19\x03\x1A\x06\x1A\xA3\n\x1A\r\x1A\x0E\x1A\xA4\x03\x1A' +
        '\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C' +
        '\xB0\n\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03' +
        '!\x03!\x03"\x03"\x02\x02\x02#\x03\x02\x03\x05\x02\x04\x07\x02\x05\t' +
        '\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17' +
        '\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13' +
        "%\x02\x14'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02" +
        '\x1B5\x02\x1C7\x02\x029\x02\x02;\x02\x02=\x02\x02?\x02\x02A\x02\x02C\x02' +
        '\x02\x03\x02\x14\x03\x02$$\x03\x022;\x04\x02VVvv\x04\x02TTtt\x04\x02W' +
        'Www\x04\x02GGgg\x04\x02HHhh\x04\x02CCcc\x04\x02NNnn\x04\x02UUuu\x04\x02' +
        'PPpp\x05\x02\v\f\x0F\x0F""T\x02C\\\xC2\xD8\xDA\xE0\u0102\u0138\u013B' +
        '\u0149\u014C\u017F\u0183\u0184\u0186\u018D\u0190\u0193\u0195\u0196\u0198' +
        '\u019A\u019E\u019F\u01A1\u01A2\u01A4\u01AB\u01AE\u01B5\u01B7\u01BE\u01C6' +
        '\u01CF\u01D1\u01DD\u01E0\u01F0\u01F3\u01F6\u01F8\u01FA\u01FC\u0234\u023C' +
        '\u023D\u023F\u0240\u0243\u0248\u024A\u0250\u0372\u0374\u0378\u0381\u0388' +
        '\u038C\u038E\u03A3\u03A5\u03AD\u03D1\u03D6\u03DA\u03F0\u03F6\u03F9\u03FB' +
        '\u03FC\u03FF\u0431\u0462\u0482\u048C\u04CF\u04D2\u0530\u0533\u0558\u10A2' +
        '\u10C7\u10C9\u10CF\u1E02\u1E96\u1EA0\u1F00\u1F0A\u1F11\u1F1A\u1F1F\u1F2A' +
        '\u1F31\u1F3A\u1F41\u1F4A\u1F4F\u1F5B\u1F61\u1F6A\u1F71\u1FBA\u1FBD\u1FCA' +
        '\u1FCD\u1FDA\u1FDD\u1FEA\u1FEE\u1FFA\u1FFD\u2104\u2109\u210D\u210F\u2112' +
        '\u2114\u2117\u211F\u2126\u212F\u2132\u2135\u2140\u2141\u2147\u2185\u2C02' +
        '\u2C30\u2C62\u2C66\u2C69\u2C72\u2C74\u2C77\u2C80\u2C82\u2C84\u2CE4\u2CED' +
        '\u2CEF\u2CF4\uA642\uA644\uA66E\uA682\uA69C\uA724\uA730\uA734\uA770\uA77B' +
        '\uA788\uA78D\uA78F\uA792\uA794\uA798\uA7AF\uA7B2\uA7B3\uFF23\uFF3CS\x02' +
        'c|\xB7\xF8\xFA\u0101\u0103\u0179\u017C\u0182\u0185\u0187\u018A\u0194\u0197' +
        '\u019D\u01A0\u01A3\u01A5\u01A7\u01AA\u01AF\u01B2\u01B6\u01B8\u01C1\u01C8' +
        '\u01CE\u01D0\u01F5\u01F7\u01FB\u01FD\u023B\u023E\u0244\u0249\u0295\u0297' +
        '\u02B1\u0373\u0375\u0379\u037F\u0392\u03D0\u03D2\u03D3\u03D7\u03D9\u03DB' +
        '\u03F5\u03F7\u0461\u0463\u0483\u048D\u04C1\u04C4\u0531\u0563\u0589\u1D02' +
        '\u1D2D\u1D6D\u1D79\u1D7B\u1D9C\u1E03\u1E9F\u1EA1\u1F09\u1F12\u1F17\u1F22' +
        '\u1F29\u1F32\u1F39\u1F42\u1F47\u1F52\u1F59\u1F62\u1F69\u1F72\u1F7F\u1F82' +
        '\u1F89\u1F92\u1F99\u1FA2\u1FA9\u1FB2\u1FB6\u1FB8\u1FB9\u1FC0\u1FC6\u1FC8' +
        '\u1FC9\u1FD2\u1FD5\u1FD8\u1FD9\u1FE2\u1FE9\u1FF4\u1FF6\u1FF8\u1FF9\u210C' +
        '\u2115\u2131\u213B\u213E\u213F\u2148\u214B\u2150\u2186\u2C32\u2C60\u2C63' +
        '\u2C6E\u2C73\u2C7D\u2C83\u2CEE\u2CF0\u2CF5\u2D02\u2D27\u2D29\u2D2F\uA643' +
        '\uA66F\uA683\uA69D\uA725\uA733\uA735\uA77A\uA77C\uA77E\uA781\uA789\uA78E' +
        '\uA790\uA793\uA797\uA799\uA7AB\uA7FC\uAB5C\uAB66\uAB67\uFB02\uFB08\uFB15' +
        '\uFB19\uFF43\uFF5C\b\x02\u01C7\u01CD\u01F4\u1F91\u1F9A\u1FA1\u1FAA\u1FB1' +
        '\u1FBE\u1FCE\u1FFE\u1FFE#\x02\u02B2\u02C3\u02C8\u02D3\u02E2\u02E6\u02EE' +
        '\u02F0\u0376\u037C\u055B\u0642\u06E7\u06E8\u07F6\u07F7\u07FC\u081C\u0826' +
        '\u082A\u0973\u0E48\u0EC8\u10FE\u17D9\u1845\u1AA9\u1C7F\u1D2E\u1D6C\u1D7A' +
        '\u1DC1\u2073\u2081\u2092\u209E\u2C7E\u2C7F\u2D71\u2E31\u3007\u3037\u303D' +
        '\u3100\uA017\uA4FF\uA60E\uA681\uA69E\uA69F\uA719\uA721\uA772\uA78A\uA7FA' +
        '\uA7FB\uA9D1\uA9E8\uAA72\uAADF\uAAF5\uAAF6\uAB5E\uAB61\uFF72\uFFA1\xEC' +
        '\x02\xAC\xBC\u01BD\u01C5\u0296\u05EC\u05F2\u05F4\u0622\u0641\u0643\u064C' +
        '\u0670\u0671\u0673\u06D5\u06D7\u06FE\u0701\u0712\u0714\u0731\u074F\u07A7' +
        '\u07B3\u07EC\u0802\u0817\u0842\u085A\u08A2\u08B4\u0906\u093B\u093F\u0952' +
        '\u095A\u0963\u0974\u0982\u0987\u098E\u0991\u0992\u0995\u09AA\u09AC\u09B2' +
        '\u09B4\u09BB\u09BF\u09D0\u09DE\u09DF\u09E1\u09E3\u09F2\u09F3\u0A07\u0A0C' +
        '\u0A11\u0A12\u0A15\u0A2A\u0A2C\u0A32\u0A34\u0A35\u0A37\u0A38\u0A3A\u0A3B' +
        '\u0A5B\u0A5E\u0A60\u0A76\u0A87\u0A8F\u0A91\u0A93\u0A95\u0AAA\u0AAC\u0AB2' +
        '\u0AB4\u0AB5\u0AB7\u0ABB\u0ABF\u0AD2\u0AE2\u0AE3\u0B07\u0B0E\u0B11\u0B12' +
        '\u0B15\u0B2A\u0B2C\u0B32\u0B34\u0B35\u0B37\u0B3B\u0B3F\u0B63\u0B73\u0B85' +
        '\u0B87\u0B8C\u0B90\u0B92\u0B94\u0B97\u0B9B\u0B9C\u0B9E\u0BAC\u0BB0\u0BBB' +
        '\u0BD2\u0C0E\u0C10\u0C12\u0C14\u0C2A\u0C2C\u0C3B\u0C3F\u0C8E\u0C90\u0C92' +
        '\u0C94\u0CAA\u0CAC\u0CB5\u0CB7\u0CBB\u0CBF\u0CE0\u0CE2\u0CE3\u0CF3\u0CF4' +
        '\u0D07\u0D0E\u0D10\u0D12\u0D14\u0D3C\u0D3F\u0D50\u0D62\u0D63\u0D7C\u0D81' +
        '\u0D87\u0D98\u0D9C\u0DB3\u0DB5\u0DBD\u0DBF\u0DC8\u0E03\u0E32\u0E34\u0E35' +
        '\u0E42\u0E47\u0E83\u0E84\u0E86\u0E8C\u0E8F\u0E99\u0E9B\u0EA1\u0EA3\u0EA5' +
        '\u0EA7\u0EA9\u0EAC\u0EAD\u0EAF\u0EB2\u0EB4\u0EB5\u0EBF\u0EC6\u0EDE\u0EE1' +
        '\u0F02\u0F49\u0F4B\u0F6E\u0F8A\u0F8E\u1002\u102C\u1041\u1057\u105C\u105F' +
        '\u1063\u1072\u1077\u1083\u1090\u10FC\u10FF\u124A\u124C\u124F\u1252\u1258' +
        '\u125A\u125F\u1262\u128A\u128C\u128F\u1292\u12B2\u12B4\u12B7\u12BA\u12C0' +
        '\u12C2\u12C7\u12CA\u12D8\u12DA\u1312\u1314\u1317\u131A\u135C\u1382\u1391' +
        '\u13A2\u13F6\u1403\u166E\u1671\u1681\u1683\u169C\u16A2\u16EC\u16F3\u16FA' +
        '\u1702\u170E\u1710\u1713\u1722\u1733\u1742\u1753\u1762\u176E\u1770\u1772' +
        '\u1782\u17B5\u17DE\u1844\u1846\u1879\u1882\u18AA\u18AC\u18F7\u1902\u1920' +
        '\u1952\u196F\u1972\u1976\u1982\u19AD\u19C3\u19C9\u1A02\u1A18\u1A22\u1A56' +
        '\u1B07\u1B35\u1B47\u1B4D\u1B85\u1BA2\u1BB0\u1BB1\u1BBC\u1BE7\u1C02\u1C25' +
        '\u1C4F\u1C51\u1C5C\u1C79\u1CEB\u1CEE\u1CF0\u1CF3\u1CF7\u1CF8\u2137\u213A' +
        '\u2D32\u2D69\u2D82\u2D98\u2DA2\u2DA8\u2DAA\u2DB0\u2DB2\u2DB8\u2DBA\u2DC0' +
        '\u2DC2\u2DC8\u2DCA\u2DD0\u2DD2\u2DD8\u2DDA\u2DE0\u3008\u303E\u3043\u3098' +
        '\u30A1\u30FC\u3101\u312F\u3133\u3190\u31A2\u31BC\u31F2\u3201\u3402\u4DB7' +
        '\u4E02\u9FCE\uA002\uA016\uA018\uA48E\uA4D2\uA4F9\uA502\uA60D\uA612\uA621' +
        '\uA62C\uA62D\uA670\uA6E7\uA7F9\uA803\uA805\uA807\uA809\uA80C\uA80E\uA824' +
        '\uA842\uA875\uA884\uA8B5\uA8F4\uA8F9\uA8FD\uA927\uA932\uA948\uA962\uA97E' +
        '\uA986\uA9B4\uA9E2\uA9E6\uA9E9\uA9F1\uA9FC\uAA00\uAA02\uAA2A\uAA42\uAA44' +
        '\uAA46\uAA4D\uAA62\uAA71\uAA73\uAA78\uAA7C\uAAB1\uAAB3\uAABF\uAAC2\uAAC4' +
        '\uAADD\uAADE\uAAE2\uAAEC\uAAF4\uAB08\uAB0B\uAB10\uAB13\uAB18\uAB22\uAB28' +
        '\uAB2A\uAB30\uABC2\uABE4\uAC02\uD7A5\uD7B2\uD7C8\uD7CD\uD7FD\uF902\uFA6F' +
        '\uFA72\uFADB\uFB1F\uFB2A\uFB2C\uFB38\uFB3A\uFB3E\uFB40\uFBB3\uFBD5\uFD3F' +
        '\uFD52\uFD91\uFD94\uFDC9\uFDF2\uFDFD\uFE72\uFE76\uFE78\uFEFE\uFF68\uFF71' +
        '\uFF73\uFF9F\uFFA2\uFFC0\uFFC4\uFFC9\uFFCC\uFFD1\uFFD4\uFFD9\uFFDC\uFFDE' +
        "'\x022;\u0662\u066B\u06F2\u06FB\u07C2\u07CB\u0968\u0971\u09E8\u09F1\u0A68" +
        '\u0A71\u0AE8\u0AF1\u0B68\u0B71\u0BE8\u0BF1\u0C68\u0C71\u0CE8\u0CF1\u0D68' +
        '\u0D71\u0DE8\u0DF1\u0E52\u0E5B\u0ED2\u0EDB\u0F22\u0F2B\u1042\u104B\u1092' +
        '\u109B\u17E2\u17EB\u1812\u181B\u1948\u1951\u19D2\u19DB\u1A82\u1A8B\u1A92' +
        '\u1A9B\u1B52\u1B5B\u1BB2\u1BBB\u1C42\u1C4B\u1C52\u1C5B\uA622\uA62B\uA8D2' +
        '\uA8DB\uA902\uA90B\uA9D2\uA9DB\uA9F2\uA9FB\uAA52\uAA5B\uABF2\uABFB\uFF12' +
        '\uFF1B\xC3\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03' +
        '\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02' +
        '\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02' +
        '\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02' +
        '\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02' +
        '\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02' +
        "\x02'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-" +
        '\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02' +
        '\x02\x02\x025\x03\x02\x02\x02\x03E\x03\x02\x02\x02\x05G\x03\x02\x02\x02' +
        '\x07I\x03\x02\x02\x02\tK\x03\x02\x02\x02\vM\x03\x02\x02\x02\rO\x03\x02' +
        '\x02\x02\x0FQ\x03\x02\x02\x02\x11S\x03\x02\x02\x02\x13U\x03\x02\x02\x02' +
        '\x15W\x03\x02\x02\x02\x17Y\x03\x02\x02\x02\x19[\x03\x02\x02\x02\x1B]\x03' +
        '\x02\x02\x02\x1D`\x03\x02\x02\x02\x1Fc\x03\x02\x02\x02!e\x03\x02\x02\x02' +
        "#h\x03\x02\x02\x02%j\x03\x02\x02\x02'l\x03\x02\x02\x02)x\x03\x02\x02" +
        '\x02+\x84\x03\x02\x02\x02-\x89\x03\x02\x02\x02/\x8F\x03\x02\x02\x021\x95' +
        '\x03\x02\x02\x023\xA2\x03\x02\x02\x025\xA8\x03\x02\x02\x027\xAF\x03\x02' +
        '\x02\x029\xB1\x03\x02\x02\x02;\xB3\x03\x02\x02\x02=\xB5\x03\x02\x02\x02' +
        '?\xB7\x03\x02\x02\x02A\xB9\x03\x02\x02\x02C\xBB\x03\x02\x02\x02EF\x07' +
        '.\x02\x02F\x04\x03\x02\x02\x02GH\x07*\x02\x02H\x06\x03\x02\x02\x02IJ\x07' +
        '+\x02\x02J\b\x03\x02\x02\x02KL\x07]\x02\x02L\n\x03\x02\x02\x02MN\x07_' +
        '\x02\x02N\f\x03\x02\x02\x02OP\x070\x02\x02P\x0E\x03\x02\x02\x02QR\x07' +
        '-\x02\x02R\x10\x03\x02\x02\x02ST\x07/\x02\x02T\x12\x03\x02\x02\x02UV\x07' +
        ',\x02\x02V\x14\x03\x02\x02\x02WX\x071\x02\x02X\x16\x03\x02\x02\x02YZ\x07' +
        '`\x02\x02Z\x18\x03\x02\x02\x02[\\\x07?\x02\x02\\\x1A\x03\x02\x02\x02]' +
        '^\x07#\x02\x02^_\x07?\x02\x02_\x1C\x03\x02\x02\x02`a\x07>\x02\x02ab\x07' +
        '?\x02\x02b\x1E\x03\x02\x02\x02cd\x07>\x02\x02d \x03\x02\x02\x02ef\x07' +
        '@\x02\x02fg\x07?\x02\x02g"\x03\x02\x02\x02hi\x07@\x02\x02i$\x03\x02\x02' +
        '\x02jk\x07(\x02\x02k&\x03\x02\x02\x02lr\x07$\x02\x02mq\n\x02\x02\x02n' +
        'o\x07^\x02\x02oq\x07$\x02\x02pm\x03\x02\x02\x02pn\x03\x02\x02\x02qt\x03' +
        '\x02\x02\x02rp\x03\x02\x02\x02rs\x03\x02\x02\x02su\x03\x02\x02\x02tr\x03' +
        '\x02\x02\x02uv\x07$\x02\x02v(\x03\x02\x02\x02wy\t\x03\x02\x02xw\x03\x02' +
        '\x02\x02yz\x03\x02\x02\x02zx\x03\x02\x02\x02z{\x03\x02\x02\x02{\x82\x03' +
        '\x02\x02\x02|~\x070\x02\x02}\x7F\t\x03\x02\x02~}\x03\x02\x02\x02\x7F\x80' +
        '\x03\x02\x02\x02\x80~\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02\x81\x83' +
        '\x03\x02\x02\x02\x82|\x03\x02\x02\x02\x82\x83\x03\x02\x02\x02\x83*\x03' +
        '\x02\x02\x02\x84\x85\t\x04\x02\x02\x85\x86\t\x05\x02\x02\x86\x87\t\x06' +
        '\x02\x02\x87\x88\t\x07\x02\x02\x88,\x03\x02\x02\x02\x89\x8A\t\b\x02\x02' +
        '\x8A\x8B\t\t\x02\x02\x8B\x8C\t\n\x02\x02\x8C\x8D\t\v\x02\x02\x8D\x8E\t' +
        '\x07\x02\x02\x8E.\x03\x02\x02\x02\x8F\x90\t\f\x02\x02\x90\x91\t\x06\x02' +
        '\x02\x91\x92\t\n\x02\x02\x92\x93\t\n\x02\x02\x930\x03\x02\x02\x02\x94' +
        '\x96\x057\x1C\x02\x95\x94\x03\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97' +
        '\x95\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x9E\x03\x02\x02\x02\x99' +
        '\x9D\x057\x1C\x02\x9A\x9D\x05C"\x02\x9B\x9D\x07a\x02\x02\x9C\x99\x03' +
        '\x02\x02\x02\x9C\x9A\x03\x02\x02\x02\x9C\x9B\x03\x02\x02\x02\x9D\xA0\x03' +
        '\x02\x02\x02\x9E\x9C\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F2\x03' +
        '\x02\x02\x02\xA0\x9E\x03\x02\x02\x02\xA1\xA3\t\r\x02\x02\xA2\xA1\x03\x02' +
        '\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\xA2\x03\x02\x02\x02\xA4\xA5\x03\x02' +
        '\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6\xA7\b\x1A\x02\x02\xA74\x03\x02\x02' +
        '\x02\xA8\xA9\v\x02\x02\x02\xA96\x03\x02\x02\x02\xAA\xB0\x059\x1D\x02\xAB' +
        '\xB0\x05;\x1E\x02\xAC\xB0\x05=\x1F\x02\xAD\xB0\x05? \x02\xAE\xB0\x05A' +
        '!\x02\xAF\xAA\x03\x02\x02\x02\xAF\xAB\x03\x02\x02\x02\xAF\xAC\x03\x02' +
        '\x02\x02\xAF\xAD\x03\x02\x02\x02\xAF\xAE\x03\x02\x02\x02\xB08\x03\x02' +
        '\x02\x02\xB1\xB2\t\x0E\x02\x02\xB2:\x03\x02\x02\x02\xB3\xB4\t\x0F\x02' +
        '\x02\xB4<\x03\x02\x02\x02\xB5\xB6\t\x10\x02\x02\xB6>\x03\x02\x02\x02\xB7' +
        '\xB8\t\x11\x02\x02\xB8@\x03\x02\x02\x02\xB9\xBA\t\x12\x02\x02\xBAB\x03' +
        '\x02\x02\x02\xBB\xBC\t\x13\x02\x02\xBCD\x03\x02\x02\x02\r\x02prz\x80\x82' +
        '\x97\x9C\x9E\xA4\xAF\x03\b\x02\x02';
    public static __ATN: ATN;
    public static get _ATN(): ATN {
        if (!Excellent2Lexer.__ATN) {
            Excellent2Lexer.__ATN = new ATNDeserializer().deserialize(
                Utils.toCharArray(Excellent2Lexer._serializedATN)
            );
        }

        return Excellent2Lexer.__ATN;
    }
}
