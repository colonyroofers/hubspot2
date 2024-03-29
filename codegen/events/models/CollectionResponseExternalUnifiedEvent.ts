/**
 * HubSpot Events API
 * API for accessing CRM object events.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ExternalUnifiedEvent } from './ExternalUnifiedEvent';
import { Paging } from './Paging';
import { HttpFile } from '../http/http';

export class CollectionResponseExternalUnifiedEvent {
    'results': Array<ExternalUnifiedEvent>;
    'paging'?: Paging;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<ExternalUnifiedEvent>",
            "format": ""
        },
        {
            "name": "paging",
            "baseName": "paging",
            "type": "Paging",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CollectionResponseExternalUnifiedEvent.attributeTypeMap;
    }

    public constructor() {
    }
}

