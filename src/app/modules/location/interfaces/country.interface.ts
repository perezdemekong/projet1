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

export interface StatusData {
    is_active: boolean;
    is_enabled: boolean;
}