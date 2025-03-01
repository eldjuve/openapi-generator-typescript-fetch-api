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

export type AnyPartyDto =
    { type: "organization" } & OrganizationDto |
    { type: "person" } & PersonDto;

export const AnyPartyDtoDescriminators = [
    "organization",
    "person",
] as const;

export type AnyPartyDtoDescriminator = typeof AnyPartyDtoDescriminators[number];

export type CreationErrorDto =
    { code: "IllegalEmailAddressError" } & IllegalEmailAddressErrorDto |
    { code: "DuplicateIdentifierError" } & DuplicateIdentifierErrorDto |
    { code: "GeneralError" } & GeneralErrorDto;

export const CreationErrorDtoDescriminators = [
    "IllegalEmailAddressError",
    "DuplicateIdentifierError",
    "GeneralError",
] as const;

export type CreationErrorDtoDescriminator = typeof CreationErrorDtoDescriminators[number];

export interface DuplicateIdentifierErrorDto {
    code: string;
    identifierValue?: string;
    entityType: string;
}

export interface GeneralErrorDto {
    code: string;
    description: string;
}

export interface IllegalEmailAddressErrorDto {
    code: string;
    inputEmailAddress: string;
    validDomains: Array<string>;
}

export interface LogMessageDto {
    message: string;
    error?: unknown;
}

export interface NotFoundErrorDto {
    code: string;
    identifierValue?: string;
    entityType: string;
}

export interface OrganizationDto {
    readonly id?: string;
    type: string;
    name: string;
    organizationId?: string;
    url?: string;
    email?: string;
    readonly emailDomains?: Array<string>;
    phone?: string;
}

export interface PersonDto {
    readonly id?: string;
    type: string;
    givenName: string;
    familyName: string;
    email?: string;
    phone?: string;
    birthDate?: Date;
}

export type UpdateErrorDto =
    { code: "IllegalEmailAddressError" } & IllegalEmailAddressErrorDto |
    { code: "DuplicateIdentifierError" } & DuplicateIdentifierErrorDto |
    { code: "GeneralError" } & GeneralErrorDto |
    { code: "NotFoundError" } & NotFoundErrorDto;

export const UpdateErrorDtoDescriminators = [
    "IllegalEmailAddressError",
    "DuplicateIdentifierError",
    "GeneralError",
    "NotFoundError",
] as const;

export type UpdateErrorDtoDescriminator = typeof UpdateErrorDtoDescriminators[number];
