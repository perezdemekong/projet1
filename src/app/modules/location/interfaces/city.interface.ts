export interface City {
    id: number;
    name: string;
    postal_code: string;
    wilaya: boolean;
}

export interface cityForm {
    name: string;
    country: string;
    is_active: boolean;
}

export interface CityStatus {
    is_active: boolean;
}