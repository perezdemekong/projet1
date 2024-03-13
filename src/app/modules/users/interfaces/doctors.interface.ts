export interface Doctor {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    birthdate: string | Date;
    timezone: string | null;
    language: string;
    address: string;
    speciality: string;
    is_active: boolean;
    is_valid: boolean;
    roles: string[];
    permissions: string[];
    created_at: Date | null;
    updated_at: Date | null;
    profile_image: string;
}