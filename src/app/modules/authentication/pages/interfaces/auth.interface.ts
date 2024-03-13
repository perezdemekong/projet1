export interface SuccessAuthResponse {
    data: Data
    message: string;
}

export interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string | null;
    phone_number: string | null;
    birthdate: Data | null | string;
    email_verified_at: Date | null;
    can_login: boolean;
    parent_id: number | null;
    timezone: string | null;
    language: string | null;
    status?: boolean;
    roles: string[];
    permissions: string[];
    created_at: Date | null;
    updated_at: Date | null;
    antecedents: any[];
    profile_image: string | null;
    address?: string | null;
}

export interface UserData {
    first_name: string;
    last_name: string;
    email: string;
    gender: string | null;
    phone_number: string | null;
    birthdate: Data | null;
    timezone: string | null;
    language: string | null;
    address?: string | null;
}

export interface UserDataImage {
    profile_image: File;
}

export interface Data {
    token?: string;
    token_type?: string;
    user: User;
}

export interface LoginData {
    email: string;
    password: string;
}

export interface ErrorAuthResponse {
    message: string;
    status_code: number;
    error: any
}

export interface UpdatePasswordData {
    password: string;
    new_password: string;
}