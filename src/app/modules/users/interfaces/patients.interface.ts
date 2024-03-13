export interface Patient {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    phone_number: string;
    birthdate?: string | Date;
    email_verified_at: Date | null;
    can_login: boolean;
    parent_id: number;
    timezone: string | any;
    language: string;
    status: boolean;
    address: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    antecedents: any[];
    profile_image: string;
}

export interface UpdatePatientData {
    status: boolean;
}