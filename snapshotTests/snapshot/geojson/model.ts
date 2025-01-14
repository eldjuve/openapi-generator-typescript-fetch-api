/**
 * GeoJSON
 * GeoJSON
 *
 * The version of the OpenAPI document: 0.1.9
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * GeoJSon geometry collection
 */
export interface GeometryCollectionDto {
    type: "GeometryCollection";
    geometries: Array<GeometryDto>;
}

export type GeometryDto =
    { type: "Point" } & PointDto |
    { type: "Polygon" } & PolygonDto |
    { type: "LineString" } & LineStringDto;

export const GeometryDtoDescriminators = [
    "Point",
    "Polygon",
    "LineString",
] as const;

export type GeometryDtoDescriminator = typeof GeometryDtoDescriminators[number];

export interface LineStringDto {
    type: "LineString";
    coordinates: Array<Array<number>>;
}

export interface PointDto {
    type: "Point";
    /**
     * Point in 3D space
     */
    coordinates: [number, number, number?];
}

export interface PolygonDto {
    type: "Polygon";
    coordinates: Array<Array<Array<number>>>;
}
