/**
 * Should mirror https://github.com/nyaruka/goflow/blob/master/excellent/input.go as much as reasonably possible.
 */

const EOF = '\0';

export class Reader {
    s: string;
    p: number;

    constructor(s: string) {
        this.s = s;
        this.p = 0;
    }

    readChar(): string {
        if (this.p >= this.s.length) {
            throw new Error("no more characters");
        }
        return this.s[this.p++];
    }
}

export class Input {
    base: Reader;
    unreadChars: string[];
    unreadCount: number;

    constructor(base: Reader) {
        this.base = base;
        this.unreadChars = [];
        this.unreadCount = 0;
    }

    // gets the next char or EOF if we are at the end of the string
    read(): string {
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
    unread(ch: string) {
        this.unreadChars[this.unreadCount] = ch
        this.unreadCount++
    }
}