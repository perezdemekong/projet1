export interface SimpleCurrencyResponse<T> {
    message: string;
    data: {
        currencies: T[];
    };
}

export interface SimpleCurrencyOnlyResponse<T> {
    message: string;
    data: {
        currencies: T;
    };
}

export interface Currency {
    id: number;
    name: string;
    code: string;
    symbol: string;
    format: string;
    is_active: boolean;
    exchange_rate: string | number;
}