import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const useFetchImageWithAuth = (url: string, errorImageUrl: string = '') => {
    const [imageUrl, setImageUrl] = useState(errorImageUrl);
    useEffect(() => {
        getImage(url, setImageUrl, errorImageUrl);
        return () => {
            setImageUrl(errorImageUrl);
        };
    }, [url, errorImageUrl]);

    return imageUrl
}

const getImage = async (url: string, setImageUrl: Dispatch<SetStateAction<string>>, errorImageUrl: string) => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + (process.env.ACCESS_TOKEN_COOKIE && cookies.get(process.env.ACCESS_TOKEN_COOKIE)) },
        // credentials: 'omit'
    };
    const req = await fetch(url, requestOptions);

    if (!req.ok)
        return setImageUrl(errorImageUrl);

    const blob = await req.blob();
    setImageUrl(URL.createObjectURL(blob));
}


export default useFetchImageWithAuth