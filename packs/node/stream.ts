import {Emitter} from "./events";
import {Buffer} from './buffer';
import {proxy} from "./proxy";


export interface ReadableOptions {
    highWaterMark?: number;
    encoding?: string;
    objectMode?: boolean;
    read?: (this: Readable, size?: number) => any;
    destroy?: (error?: Error) => any;
}
export interface WritableOptions {
    highWaterMark?: number;
    decodeStrings?: boolean;
    objectMode?: boolean;
    write?: (chunk: string | Buffer, encoding: string, callback: Function) => any;
    writev?: (chunks: Array<{ chunk: string | Buffer, encoding: string }>, callback: Function) => any;
    destroy?: (error?: Error) => any;
    final?: (callback: (error?: Error) => void) => void;
}
export interface DuplexOptions extends ReadableOptions, WritableOptions {
    allowHalfOpen?: boolean;
    readableObjectMode?: boolean;
    writableObjectMode?: boolean;
}
export interface TransformOptions extends DuplexOptions {
    transform?: (chunk: string | Buffer, encoding: string, callback: Function) => any;
    flush?: (callback: Function) => any;
}
export interface ReadableStream extends Emitter {
    isTTY?:boolean
    readable: boolean;
    read(size?: number): string | Buffer;
    setEncoding(encoding: string): this;
    pause(): this;
    resume(): this;
    isPaused(): boolean;
    pipe<T extends WritableStream>(destination: T, options?: { end?: boolean; }): T;
    unpipe<T extends WritableStream>(destination?: T): this;
    unshift(chunk: string): void;
    unshift(chunk: Buffer): void;
    wrap(oldStream: ReadableStream): this;
}
export interface WritableStream extends Emitter {
    isTTY?:boolean
    writable: boolean;
    write(buffer: Buffer | string, cb?: Function): boolean;
    write(str: string, encoding?: string, cb?: Function): boolean;
    end(): void;
    end(buffer: Buffer, cb?: Function): void;
    end(str: string, cb?: Function): void;
    end(str: string, encoding?: string, cb?: Function): void;
}
export interface ReadWriteStream extends ReadableStream, WritableStream { }
export declare class Stream extends Emitter { }
export declare class Readable extends Stream implements ReadableStream {

    readable: boolean;
    constructor(opts?: ReadableOptions);
    _read(size: number): void;
    read(size?: number): any;
    setEncoding(encoding: string): this;
    pause(): this;
    resume(): this;
    isPaused(): boolean;
    unpipe<T extends WritableStream>(destination?: T): this;
    unshift(chunk: any): void;
    wrap(oldStream: ReadableStream): this;
    push(chunk: any, encoding?: string): boolean;
    _destroy(err: Error, callback: Function): void;
    destroy(error?: Error): void;

    /**
     * Event emitter
     * The defined events on documents including:
     * 1. close
     * 2. data
     * 3. end
     * 4. readable
     * 5. error
     */
    addListener(event: string, listener: (...args: any[]) => void): this;
    addListener(event: string, listener: (...args: any[]) => void): this;
    addListener(event: "close", listener: () => void): this;
    addListener(event: "data", listener: (chunk: Buffer | string) => void): this;
    addListener(event: "end", listener: () => void): this;
    addListener(event: "readable", listener: () => void): this;
    addListener(event: "error", listener: (err: Error) => void): this;

    emit(event: string | symbol, ...args: any[]): boolean;
    emit(event: "close"): boolean;
    emit(event: "data", chunk: Buffer | string): boolean;
    emit(event: "end"): boolean;
    emit(event: "readable"): boolean;
    emit(event: "error", err: Error): boolean;

    on(event: string, listener: (...args: any[]) => void): this;
    on(event: "close", listener: () => void): this;
    on(event: "data", listener: (chunk: Buffer | string) => void): this;
    on(event: "end", listener: () => void): this;
    on(event: "readable", listener: () => void): this;
    on(event: "error", listener: (err: Error) => void): this;

    once(event: string, listener: (...args: any[]) => void): this;
    once(event: "close", listener: () => void): this;
    once(event: "data", listener: (chunk: Buffer | string) => void): this;
    once(event: "end", listener: () => void): this;
    once(event: "readable", listener: () => void): this;
    once(event: "error", listener: (err: Error) => void): this;

    prependListener(event: string, listener: (...args: any[]) => void): this;
    prependListener(event: "close", listener: () => void): this;
    prependListener(event: "data", listener: (chunk: Buffer | string) => void): this;
    prependListener(event: "end", listener: () => void): this;
    prependListener(event: "readable", listener: () => void): this;
    prependListener(event: "error", listener: (err: Error) => void): this;

    prependOnceListener(event: string, listener: (...args: any[]) => void): this;
    prependOnceListener(event: "close", listener: () => void): this;
    prependOnceListener(event: "data", listener: (chunk: Buffer | string) => void): this;
    prependOnceListener(event: "end", listener: () => void): this;
    prependOnceListener(event: "readable", listener: () => void): this;
    prependOnceListener(event: "error", listener: (err: Error) => void): this;

    removeListener(event: string, listener: (...args: any[]) => void): this;
    removeListener(event: "close", listener: () => void): this;
    removeListener(event: "data", listener: (chunk: Buffer | string) => void): this;
    removeListener(event: "end", listener: () => void): this;
    removeListener(event: "readable", listener: () => void): this;
    removeListener(event: "error", listener: (err: Error) => void): this;
    pipe<T extends WritableStream>(destination: T, options?: { end?: boolean }): T;
}
export declare class Writable extends Stream implements WritableStream {
    writable: boolean;
    constructor(opts?: WritableOptions);
    _write(chunk: any, encoding: string, callback: (err?: Error) => void): void;
    _writev?(chunks: Array<{chunk: any, encoding: string}>, callback: (err?: Error) => void): void;
    _destroy(err: Error, callback: Function): void;
    _final(callback: Function): void;
    write(chunk: any, cb?: Function): boolean;
    write(chunk: any, encoding?: string, cb?: Function): boolean;
    setDefaultEncoding(encoding: string): this;
    end(): void;
    end(chunk: any, cb?: Function): void;
    end(chunk: any, encoding?: string, cb?: Function): void;
    cork(): void;
    uncork(): void;
    destroy(error?: Error): void;

    /**
     * Event emitter
     * The defined events on documents including:
     * 1. close
     * 2. drain
     * 3. error
     * 4. finish
     * 5. pipe
     * 6. unpipe
     */
    addListener(event: string, listener: (...args: any[]) => void): this;
    addListener(event: "close", listener: () => void): this;
    addListener(event: "drain", listener: () => void): this;
    addListener(event: "error", listener: (err: Error) => void): this;
    addListener(event: "finish", listener: () => void): this;
    addListener(event: "pipe", listener: (src: Readable) => void): this;
    addListener(event: "unpipe", listener: (src: Readable) => void): this;

    emit(event: string | symbol, ...args: any[]): boolean;
    emit(event: "close"): boolean;
    emit(event: "drain", chunk: Buffer | string): boolean;
    emit(event: "error", err: Error): boolean;
    emit(event: "finish"): boolean;
    emit(event: "pipe", src: Readable): boolean;
    emit(event: "unpipe", src: Readable): boolean;

    on(event: string, listener: (...args: any[]) => void): this;
    on(event: "close", listener: () => void): this;
    on(event: "drain", listener: () => void): this;
    on(event: "error", listener: (err: Error) => void): this;
    on(event: "finish", listener: () => void): this;
    on(event: "pipe", listener: (src: Readable) => void): this;
    on(event: "unpipe", listener: (src: Readable) => void): this;

    once(event: string, listener: (...args: any[]) => void): this;
    once(event: "close", listener: () => void): this;
    once(event: "drain", listener: () => void): this;
    once(event: "error", listener: (err: Error) => void): this;
    once(event: "finish", listener: () => void): this;
    once(event: "pipe", listener: (src: Readable) => void): this;
    once(event: "unpipe", listener: (src: Readable) => void): this;

    prependListener(event: string, listener: (...args: any[]) => void): this;
    prependListener(event: "close", listener: () => void): this;
    prependListener(event: "drain", listener: () => void): this;
    prependListener(event: "error", listener: (err: Error) => void): this;
    prependListener(event: "finish", listener: () => void): this;
    prependListener(event: "pipe", listener: (src: Readable) => void): this;
    prependListener(event: "unpipe", listener: (src: Readable) => void): this;

    prependOnceListener(event: string, listener: (...args: any[]) => void): this;
    prependOnceListener(event: "close", listener: () => void): this;
    prependOnceListener(event: "drain", listener: () => void): this;
    prependOnceListener(event: "error", listener: (err: Error) => void): this;
    prependOnceListener(event: "finish", listener: () => void): this;
    prependOnceListener(event: "pipe", listener: (src: Readable) => void): this;
    prependOnceListener(event: "unpipe", listener: (src: Readable) => void): this;

    removeListener(event: string, listener: (...args: any[]) => void): this;
    removeListener(event: "close", listener: () => void): this;
    removeListener(event: "drain", listener: () => void): this;
    removeListener(event: "error", listener: (err: Error) => void): this;
    removeListener(event: "finish", listener: () => void): this;
    removeListener(event: "pipe", listener: (src: Readable) => void): this;
    removeListener(event: "unpipe", listener: (src: Readable) => void): this;
}

export declare class Duplex extends Readable implements Writable, ReadWriteStream {
    writable: boolean;
    constructor(opts?: DuplexOptions);
    _write(chunk: any, encoding: string, callback: (err?: Error) => void): void;
    _writev?(chunks: Array<{chunk: any, encoding: string}>, callback: (err?: Error) => void): void;
    _destroy(err: Error, callback: Function): void;
    _final(callback: Function): void;
    write(chunk: any, cb?: Function): boolean;
    write(chunk: any, encoding?: string, cb?: Function): boolean;
    setDefaultEncoding(encoding: string): this;
    end(): void;
    end(chunk: any, cb?: Function): void;
    end(chunk: any, encoding?: string, cb?: Function): void;
    cork(): void;
    uncork(): void;
}

export declare class Transform extends Duplex {
    constructor(opts?: TransformOptions);
    _transform(chunk: any, encoding: string, callback: Function): void;
    destroy(error?: Error): void;
}

export declare class PassThrough extends Transform { }

proxy('stream', module);