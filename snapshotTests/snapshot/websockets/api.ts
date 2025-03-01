/* eslint @typescript-eslint/no-unused-vars: off */
/**
 * WebSockets
 * An example of sending requests and commands
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: johannes@brodwall.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    ChangeTrackedDto,
    CreatePersonCommandDto,
    PersonDto,
    PersonSnapshotDto,
    StringSnapshotDto,
    SubscribeDto,
    UnsubscribeDto,
    UpdatePersonCommandDto,
    WebSocketCommandDto,
    WebSocketMessageDto,
    WebSocketRequestDto,
} from "./model";

import { BaseAPI, RequestCallOptions, SecurityScheme } from "./base";

export interface ApplicationApis {
    defaultApi: DefaultApiInterface;
}

/**
 * DefaultApi - object-oriented interface
 */
export interface DefaultApiInterface {
    /**
     *
     * @throws {HttpError}
     */
    commandsGet(params?: RequestCallOptions): Promise<WebSocketCommandDto>;
}

/**
 * DefaultApi - object-oriented interface
 */
export class DefaultApi extends BaseAPI implements DefaultApiInterface {
    /**
     *
     * @throws {HttpError}
     */
    public async commandsGet(params: RequestCallOptions = {}): Promise<WebSocketCommandDto> {
        return await this.fetch(
            this.basePath + "/commands", params
        );
    }
}

type ServerNames =
    | "default";

export const servers: Record<ServerNames, ApplicationApis> = {
    default: {
        defaultApi: new DefaultApi(""),
    },
};

