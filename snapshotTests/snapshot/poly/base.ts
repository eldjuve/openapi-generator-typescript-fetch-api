/* eslint @typescript-eslint/no-explicit-any: off */
/* eslint @typescript-eslint/explicit-module-boundary-types: off */
/**
 * Poly API
 * An example of a polymorphic API
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: johannes@brodwall.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class BaseAPI {

    constructor(protected basePath: string = window.location.origin) {}

    protected async GET(path: string, queryParams: any): Promise<any> {
        const result = await fetch(this.basePath + path + this.query(queryParams), {
            credentials: "same-origin",
        });
        return await this.handleResponse(result);
    }

    protected async PUT(path: string, queryParams: any, requestBody?: RequestBody): Promise<any> {
        const headers: any = {};
        const body = this.createRequestBody(requestBody);
        if (requestBody) {
            headers["Content-Type"] = requestBody.contentType;
        }
        const result = await fetch(this.basePath + path + this.query(queryParams), {
            method: "PUT",
            credentials: "same-origin",
            headers,
            body,
        });
        return await this.handleResponse(result);
    }

    protected async POST(path: string, queryParams: any, requestBody?: RequestBody): Promise<any> {
        const headers: any = {};
        const body = this.createRequestBody(requestBody);
        if (requestBody) {
            headers["Content-Type"] = requestBody.contentType;
        }
        const result = await fetch(this.basePath + path + this.query(queryParams), {
            method: "POST",
            credentials: "same-origin",
            headers,
            body,
        });
        return await this.handleResponse(result);
    }

    protected async PATCH(path: string, queryParams: any, requestBody?: RequestBody): Promise<any> {
        const headers: any = {};
        const body = this.createRequestBody(requestBody);
        if (requestBody) {
            headers["Content-Type"] = requestBody.contentType;
        }
        const result = await fetch(this.basePath + path + this.query(queryParams), {
            method: "PATCH",
            credentials: "same-origin",
            headers,
            body,
        });
        return await this.handleResponse(result);
    }

    protected async DELETE(
        path: string,
        queryParams: any,
        requestBody?: RequestBody
    ): Promise<void> {
        const headers: any = {};
        const body = this.createRequestBody(requestBody);
        if (requestBody) {
            headers["Content-Type"] = requestBody.contentType;
        }
        const result = await fetch(this.basePath + path + this.query(queryParams), {
            method: "DELETE",
            credentials: "same-origin",
            headers,
            body,
        });
        return await this.handleResponse(result);
    }

    protected createRequestBody(requestBody?: RequestBody): string | undefined {
        if (requestBody) {
            if (requestBody.contentType === "application/x-www-form-urlencoded") {
                const form: any = new FormData();
                for (const name in requestBody.body) {
                    form.append(name, requestBody.body[name]);
                }
                return new URLSearchParams(form).toString();
            } else {
                return JSON.stringify(requestBody.body);
            }
        }
    }

    protected async handleResponse(response: Response): Promise<any> {
        const contentType = response.headers.get("Content-type");
        if (response.redirected) {
            window.location.href = response.url;
            throw new RedirectedError(response);
        }
        if (response.ok) {
            if (contentType && contentType.startsWith("application/json")) {
                return response.json();
            }
            return response;
        }
        const body: any =
            contentType && contentType.startsWith("application/json") && (await response.json());
        if (response.status == 401) {
            throw new LoggedOutError(response, body);
        } else if (response.status == 404) {
            throw new NotFoundError(response, body);
        } else if (response.status >= 500) {
            throw new ServerError(response, body);
        } else {
            throw new RequestError(response, body);
        }
    }

    protected path(pathTemplate: string, params: any): string {
        return pathTemplate.replace(/{(\w+)}/g, (match, g) => params[g]);
    }

    protected query(queryParams: any): string {
        if (!queryParams || !Object.keys(queryParams).length) {
            return "";
        }
        const query = Object.keys(queryParams)
            .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(queryParams[k]))
            .join("&");
        return "?" + query;
    }
}

export interface RequestBody {
    body: any;
    contentType: string;
}

export class HttpError extends Error {
    readonly response: Response;
    readonly body: any;
    constructor(response: Response, body?: any) {
        super(response.statusText);
        this.response = response;
        this.body = body;
        Object.setPrototypeOf(this, HttpError.prototype);
    }
}

export class ServerError extends HttpError {
    constructor(response: Response, body: any) {
        super(response, body);
        Object.setPrototypeOf(this, ServerError.prototype);
    }
}

export class RequestError extends HttpError {
    constructor(response: Response, body: any) {
        super(response, body);
        Object.setPrototypeOf(this, RequestError.prototype);
    }
}

export class LoggedOutError extends RequestError {
    constructor(response: Response, body: any) {
        super(response, body);
        Object.setPrototypeOf(this, LoggedOutError.prototype);
    }
}

export class NotFoundError extends RequestError {
    constructor(response: Response, body: any) {
        super(response, body);
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
}

export class RedirectedError extends HttpError {
    constructor(response: Response) {
        super(response);
        Object.setPrototypeOf(this, RedirectedError.prototype);
    }
}

