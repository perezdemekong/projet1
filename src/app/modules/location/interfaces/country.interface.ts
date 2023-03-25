import { PaginationResponse } from "@app/core/interfaces/core.interface";

export interface Country {
    id: number;
    name: string;
    name_official: string;
    is_active: boolean;
    is_enabled: boolean;
    cca3: string;
    cca2: string;
    flag: any;
    latitude: number;
    longitude: number;
    currencies: any;
    callingCodes: string[];
}

export interface ComplexResponse<T> {
    message: string;
    data: {
        countries: PaginationResponse<T>;
    }
}

export interface SimpleResponse<T> {
    message: string;
    data: T[];
}