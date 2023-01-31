/**
 * Infection Tracker
 * Infection Tracker - A case management system for tracking the spread of diseases
 *
 * The version of the OpenAPI document: 1.0.0-draft
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export interface CaseWorkerDto {
    readonly id?: string;
    fullName: string;
    email: string;
    role: UserRoleDto;
}

export interface ExposureDto {
    readonly id?: string;
    exposedPersonName?: string;
    exposedPersonPhoneNumber?: string;
    exposedDate?: Date;
    /**
     * Address or other identifying description of the location
     */
    exposureLocation?: string;
    /**
     * Information that may be relevant to identify the person fully or determine if they are infected
     */
    notes?: string;
    /**
     * The id of the case worker assigned to follow up this person
     */
    caseWorker?: string;
    status: ExposureDtoStatusEnum;
    delayAfterInfection?: ExposureDtoDelayAfterInfectionEnum;
}

export const ExposureDtoStatusEnumValues = [
    "unidentified",
    "identified",
    "contacted",
    "tested",
    "infected",
];

export type ExposureDtoStatusEnum = typeof ExposureDtoStatusEnumValues[number];

export const ExposureDtoDelayAfterInfectionEnumValues = [
    -2,
    -1,
    0,
    1,
    2,
    3,
    4,
];

export type ExposureDtoDelayAfterInfectionEnum = typeof ExposureDtoDelayAfterInfectionEnumValues[number];

export interface InfectionDto {
    readonly id?: string;
    information: InfectionInformationDto;
    registeredExposures: Array<ExposureDto>;
}

export interface InfectionInformationDto {
    patientName?: string;
    patientPhoneNumber?: string;
    likelyInfectionDate?: Date;
    /**
     * Free form text to describe anything about the patient
     */
    notes?: string;
}
export const UserRoleDtoValues = [
    "administrator",
    "interviewer",
    "followup",
];

export type UserRoleDto = typeof UserRoleDtoValues[number];
