export interface Role {
    id: number;
    name: string;
    guard_name: string;
    display_name: string;
    can_be_removed: boolean;
    description: string;
    status?: boolean;
    created_at: Date;
    updated_at: Date | null;
}

export interface UpdateRoleData {
    status: boolean | number;
    description?: string;
}