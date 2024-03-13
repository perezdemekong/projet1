export interface Establishment {
    id: number;
    name: string;
    type: string;
    city: string;
    admin_practician: string;
    address: string;
    postal_code: string;
    description: string;
    status: boolean;
}

export interface EstablishmentData {
    name: string;
    type: string;
    city: string;
    admin_practician?: string;
    address: string;
    postal_code: string | number;
    description: string;
    status: boolean;
}

export interface EstablishmentStatus {
    status: boolean;
}