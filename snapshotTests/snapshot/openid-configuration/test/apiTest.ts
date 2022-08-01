/* eslint @typescript-eslint/no-unused-vars: off */
/**
 * Open ID Connect
 * Open ID Connect Discovery
 *
 * The version of the OpenAPI document: 1.0.0-draft
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    DiscoveryDocumentDto,
    JwksDocumentDto,
    JwksKeyDto,
    JwtHeaderDto,
    JwtPayloadDto,
    TokenResponseDto,
} from "../model";

import {
    ApplicationApis,
    DefaultApiInterface,
} from "../api";

function reject(operation: string) {
    return () => Promise.reject(new Error("Unexpected function call " + operation));
}

export function mockApplicationApis({
    defaultApi = mockDefaultApi(),
}: Partial<ApplicationApis> = {}): ApplicationApis {
    return { defaultApi };
}

export function mockDefaultApi(
    operations: Partial<DefaultApiInterface> = {}
): DefaultApiInterface {
    return {
        fetchToken: operations.fetchToken || reject("DefaultApi.fetchToken"),
        wellKnownKeysGet: operations.wellKnownKeysGet || reject("DefaultApi.wellKnownKeysGet"),
        wellKnownOpenidConfigurationGet: operations.wellKnownOpenidConfigurationGet || reject("DefaultApi.wellKnownOpenidConfigurationGet"),
    };
}
