export interface PageableModel<T> {
    content?: T[],
    totalPages?: number,
    totalElements?: number
}