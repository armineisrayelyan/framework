import * as tls from "./tls";
import * as http from "./http";
import { URL } from "./url";
import {proxy} from "./proxy";

export interface ServerOptions {
    pfx?: any;
    key?: any;
    passphrase?: string;
    cert?: any;
    ca?: any;
    crl?: any;
    ciphers?: string;
    honorCipherOrder?: boolean;
    requestCert?: boolean;
    rejectUnauthorized?: boolean;
    NPNProtocols?: any;
    SNICallback?: (servername: string, cb: (err: Error | null, ctx: tls.SecureContext) => void) => void;
}

export interface RequestOptions extends http.RequestOptions {
    pfx?: any;
    key?: any;
    passphrase?: string;
    cert?: any;
    ca?: any;
    ciphers?: string;
    rejectUnauthorized?: boolean;
    secureProtocol?: string;
    servername?: string;
}

export interface AgentOptions extends http.AgentOptions {
    pfx?: any;
    key?: any;
    passphrase?: string;
    cert?: any;
    ca?: any;
    ciphers?: string;
    rejectUnauthorized?: boolean;
    serverName?: string;
    secureProtocol?: string;
    maxCachedSessions?: number;
}

export declare class Agent extends http.Agent {
    constructor(options?: AgentOptions);
}

export declare class Server extends tls.Server {
    setTimeout(callback: () => void): this;
    setTimeout(msecs?: number, callback?: () => void): this;
    timeout: number;
    keepAliveTimeout: number;
}

export declare function createServer(options: ServerOptions, requestListener?: (req: http.IncomingMessage, res: http.ServerResponse) => void): Server;
export declare function request(options: RequestOptions | string | URL, callback?: (res: http.IncomingMessage) => void): http.ClientRequest;
export declare function get(options: RequestOptions | string | URL, callback?: (res: http.IncomingMessage) => void): http.ClientRequest;
export declare const globalAgent: Agent;

proxy('https', module);

module.exports.override({
    get ClientResponse(){
        return class ClientResponse extends module.exports.OutgoingMessage {}
    },
});