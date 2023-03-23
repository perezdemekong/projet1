export interface SuccessAuthResponse {
    data: Data
    message: string;
}

export interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    phone_number: string;
    email_verified_at: Date | null;
    can_login: boolean;
    parent_id: number;
    antecedents_id: number;
    timezone: string;
    roles: string[];
    permissions: string[];
    created_at: Date | null;
    updated_at: Date | null;
}

export interface Data {
    token: string;
    token_type: string;
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