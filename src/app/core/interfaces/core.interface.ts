export interface Pagination {
  total: number;
  per_page: number;
  current_page: number;
  next_page: string | null;
  prev_page: string | null;
  first_page: string | null;
  last_page: string | null;
  from: number;
  to: number;
  total_pages: number;
}

export interface ComplexResponse<T> {
  message: string;
  data: {
    [key: string]: PaginationResponse<T>;
  }
}

export interface SimpleResponse<T> {
  message: string;
  data: T[];
}

export interface SimpleJsonResponse<T> {
  message: string;
  data: {
    [key: string]: T;
  };
}

export type IFilterParams = {
  [key: string]: string | number | boolean;
};

export interface PaginationResponse<T> {
  data: T[];
  pagination: Pagination;
  filters: IFilterParams;
}