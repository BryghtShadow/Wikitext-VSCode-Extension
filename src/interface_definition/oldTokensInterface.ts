/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Rowe Wilson Frederisk Holme. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { u, o, r, cast, uncast, TypeMap } from "./convertFunction";

/*
    OldTokensResult {
        tokens?: Tokens {
            edittoken?: string
        }
    }
 */

export interface OldTokensResult {
    tokens?: Tokens;
}

export interface Tokens {
    edittoken?: string;
}

export class OldTokensConvert {
    public static toOldTokensResult(json: unknown): OldTokensResult {
        return cast(json, r("OldTokensResult"), oldTokensTypeMap);
    }

    public static oldTokensResultToJson(value: OldTokensResult): unknown {
        return uncast(value, r("OldTokensResult"), oldTokensTypeMap);
    }
}

/* eslint-disable @typescript-eslint/naming-convention */
const oldTokensTypeMap: TypeMap = {
    "OldTokensResult": o([
        { json: "tokens", js: "tokens", typ: u(undefined, r("Tokens")) },
    ], false),
    "Tokens": o([
        { json: "edittoken", js: "edittoken", typ: u(undefined, "") },
    ], false),
};
