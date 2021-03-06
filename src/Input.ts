/**
 * Should mirror https://github.com/nyaruka/goflow/blob/master/excellent/input.go as much as reasonably possible.
 */

export const eof = '\0';

export class Reader {
    private s: string;
    private p: number;

    constructor(s: string) {
        this.s = s;
        this.p = 0;
    }

    public readChar(): string {
        if (this.p >= this.s.length) {
            throw new Error('no more characters');
        }
        return this.s[this.p++];
    }

    public getPos(): number {
        return this.p;
    }
}

export class XInput {
    private base: Reader;
    private unreadChars: string[];

    constructor(base: Reader) {
        this.base = base;
        this.unreadChars = [];
    }

    // gets the next char or EOF if we are at the end of the string
    public read(): string {
        // first see if we have any unread runes to return
        if (this.unreadChars.length > 0) {
            return this.unreadChars.pop() || eof;
        }

        // otherwise, read the next run
        try {
            return this.base.readChar();
        } catch (e) {
            return eof;
        }
    }

    // pops the passed in char as the next char to be returned
    public unread(ch: string): void {
        this.unreadChars.push(ch);
    }

    public getPos(): number {
        return this.base.getPos() - this.unreadChars.length;
    }
}
