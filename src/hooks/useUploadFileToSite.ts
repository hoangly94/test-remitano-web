import axios from 'axios';
import { useState } from 'react';
import { UPLOADED_FILE } from 'src/constrants';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const useUploadFileToSite = (folder: string) => {
    const [data, setData] = useState();
    const uploadFile = getUrl(folder, setData);
    return {
        data,
        uploadFile,
    }
}

const graphUrl = 'https://graph.microsoft.com/v1.0/';

const getUrl = (folder: string, setData) => async (file: any) => {
    const Authorization = 'Bearer ' + (process.env.ACCESS_TOKEN_COOKIE && cookies.get(process.env.ACCESS_TOKEN_COOKIE));

    const createUploadSessionUrl = `${graphUrl}/sites/${process.env.SHAREPOINT_SITE_ID}/drive/root:/${folder}/${file?.name?.trim()}:/createUploadSession`;

    let resp = await axios.post(
        createUploadSessionUrl,
        {
            "@microsoft.graph.conflictBehavior": "fail (default) | replace | rename",
            "fileSize": file?.size,
            "name": file?.name,
        },
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization
            }
        }
    );

    const newUrl = resp.data?.uploadUrl;
    while ([200, 201, 202].includes(resp.status)) {
        if (!resp.data?.nextExpectedRanges?.length) {
            setData(resp);
            return resp;
        }

        const [chunkFile, contentRange] = await (() => {
            if (file.size > UPLOADED_FILE.upstreamLength) {
                const nextExpectedRanges = resp.data?.nextExpectedRanges?.[0]?.split('-');
                nextExpectedRanges[1] += 1;
                const newExpectedRanges = nextExpectedRanges?.[0] === '0' ? `0-${UPLOADED_FILE.upstreamLength}` : resp.data?.nextExpectedRanges;
                const contentLength = nextExpectedRanges?.[0] === '0' ? UPLOADED_FILE.upstreamLength + 1 : +nextExpectedRanges?.[1] - +nextExpectedRanges?.[0] + 1;
                const contentRange = `${newExpectedRanges}/${file?.size}`;

                return [file.slice(+nextExpectedRanges?.[0], +contentLength), contentRange]
            }
            return [file, `0-${file?.size - 1}/${file?.size}`]
        })();

        resp = await axios.put(
            newUrl,
            chunkFile,
            {
                headers: {
                    Authorization,
                    "Content-Range": `bytes ${contentRange}`,
                }
            }
        );
    }

    return null;
}

export default useUploadFileToSite