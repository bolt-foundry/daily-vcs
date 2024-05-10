/// <reference path="https://esm.sh/v135/node.ns.d.ts" />
import * as stream from 'https://esm.sh/v135/@types/node@18.16.19/stream.d.ts';
import { JWTInput } from './credentials.d.ts';
import { GetTokenResponse, OAuth2Client, OAuth2ClientOptions } from './oauth2client.d.ts';
export declare const USER_REFRESH_ACCOUNT_TYPE = "authorized_user";
export interface UserRefreshClientOptions extends OAuth2ClientOptions {
    clientId?: string;
    clientSecret?: string;
    refreshToken?: string;
}
export declare class UserRefreshClient extends OAuth2Client {
    _refreshToken?: string | null;
    /**
     * User Refresh Token credentials.
     *
     * @param clientId The authentication client ID.
     * @param clientSecret The authentication client secret.
     * @param refreshToken The authentication refresh token.
     */
    constructor(clientId?: string, clientSecret?: string, refreshToken?: string);
    constructor(options: UserRefreshClientOptions);
    constructor(clientId?: string, clientSecret?: string, refreshToken?: string);
    /**
     * Refreshes the access token.
     * @param refreshToken An ignored refreshToken..
     * @param callback Optional callback.
     */
    protected refreshTokenNoCache(refreshToken?: string | null): Promise<GetTokenResponse>;
    /**
     * Create a UserRefreshClient credentials instance using the given input
     * options.
     * @param json The input object.
     */
    fromJSON(json: JWTInput): void;
    /**
     * Create a UserRefreshClient credentials instance using the given input
     * stream.
     * @param inputStream The input stream.
     * @param callback Optional callback.
     */
    fromStream(inputStream: stream.Readable): Promise<void>;
    fromStream(inputStream: stream.Readable, callback: (err?: Error) => void): void;
    private fromStreamAsync;
}
