export const api = process.env.NEXT_PUBLIC_API
export const axiosHeaderConfig =  {
    headers: {"Access-Control-Allow-Origin": "Set-Cookie"},
    withCredentials:true,
}