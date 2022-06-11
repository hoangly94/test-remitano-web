import Cookies from "universal-cookie";

const cookies = new Cookies();
export const prepareHeaders = (headers, { getState }) => {
    // const token = (getState() as AppState).index.auth.token;
    const token = process.env.INTERNAL_ACCESS_TOKEN_COOKIE && cookies.get(process.env.INTERNAL_ACCESS_TOKEN_COOKIE);
    if (token) {
        headers.set('Authorization', `Bearer ${token}`);
        headers.set('Content-Type', 'application/json');
    }

    return headers
}

export const parseExpiredTime = (str?: string) => {
    if(!str) return 0;
    if(str.slice(-1) === 's')
        return +str.slice(0,-1)*1000
    return 0
}
