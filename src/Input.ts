/**
 * Should mirror https://github.com/nyaruka/goflow/blob/master/excellent/input.go as much as reasonably possible.
 */

const EOF = '\0';

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
}

export class Input {
    private base: Reader;
    private unreadChars: string[];
    private unreadCount: number;

    constructor(base: Reader) {
        this.base = base;
        this.unreadChars = [];
        this.unreadCount = 0;
    }

    // gets the next char or EOF if we are at the end of the string
    public read(): string {
        // first see if we have any unread runes to return
        if (this.unreadCount > 0) {
            const ch = this.unreadChars[this.unreadCount - 1]
            this.unreadCount--
            return ch
        }

        // otherwise, read the next run
        try {
            return this.base.readChar();
        } catch (e) {
            return EOF;
        }
    }

    // pops the passed in char as the next char to be returned
    public unread(ch: string): void {
        this.unreadChars[this.unreadCount] = ch
        this.unreadCount++
    }
}