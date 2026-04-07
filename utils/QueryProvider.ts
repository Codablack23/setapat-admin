export class QueryProvider {
    // utils/queryBuilder.ts
    static buildQueryString(params?: Record<string, any>): string {
        if(!params) return ""
        const query = Object.entries(params)
            .filter(([_, value]) => value !== undefined && value !== null && value !== "")
            .map(([key, value]) => {
                if (Array.isArray(value)) {
                    return value
                        .map((v) => `${encodeURIComponent(key)}=${encodeURIComponent(String(v))}`)
                        .join("&");
                }
                return `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`;
            })
            .join("&");

        return query ? `?${query}` : "";
    }
    static buildUrlWithQuery(params?: Record<string, any>,path=""): string {
        if(!params) return path
        const query = Object.entries(params)
            .filter(([_, value]) => value !== undefined && value !== null && value !== "")
            .map(([key, value]) => {
                if (Array.isArray(value)) {
                    return value
                        .map((v) => `${encodeURIComponent(key)}=${encodeURIComponent(String(v))}`)
                        .join("&");
                }
                return `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`;
            })
            .join("&");

        return query ? `${path}?${query}` : path;
    }

}