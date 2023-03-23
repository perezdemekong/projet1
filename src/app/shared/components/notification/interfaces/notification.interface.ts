export type Notification = {
    type?: 'success' | 'warning' | 'error' | 'info';
    title?: string
    message?: string;
    isOpen: boolean;
}