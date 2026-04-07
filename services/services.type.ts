
export interface ApiResponse<T=any>{
    status:"success" | "failed",
    message:string,
    data?:T
}

export interface Pagination{
    total: number,
    limit: number,
    page: number,
    total_pages: number,
    next_page: number | null,
    prev_page: number | null
}