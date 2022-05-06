/**
 * Sample API
 * Optional multiline or single-line description in [CommonMark](http://commonmark.org/help/) or HTML.
 *
 * The version of the OpenAPI document: 0.1.9
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export interface AddressDto {
    addressLine1?: string;
    addressLine2?: string;
    city: string;
    country: string;
}

export interface CatAllOfDto {
    hunts?: boolean;
    readonly age?: number;
}

export interface CatDto extends PetBaseDto {
    hunts?: boolean;
    readonly age?: number;
}

export interface DogAllOfDto {
    bark?: boolean;
    breed?: DogAllOfDtoBreedEnum;
}

export type DogAllOfDtoBreedEnum =
    | "Dingo"
    | "Husky"
    | "Retriever"
    | "Shepherd";

export const DogAllOfDtoBreedEnumValues: DogAllOfDtoBreedEnum[] = [
    "Dingo",
    "Husky",
    "Retriever",
    "Shepherd",
];

export interface DogDto extends PetBaseDto {
    bark?: boolean;
    breed?: DogDtoBreedEnum;
}

export type DogDtoBreedEnum =
    | "Dingo"
    | "Husky"
    | "Retriever"
    | "Shepherd";

export const DogDtoBreedEnumValues: DogDtoBreedEnum[] = [
    "Dingo",
    "Husky",
    "Retriever",
    "Shepherd",
];

export interface PetBaseDto {
    readonly id?: string;
    pet_type: string;
    name?: string;
    birth_date?: string;
    ownerAddress?: AddressDto;
}

export type PetDto =
	{ pet_type: "Cat" } & CatDto |
	{ pet_type: "Dog" } & DogDto;

