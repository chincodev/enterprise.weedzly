import { fetchWrapper } from '../helpers/fetch-wrapper';
const getApi = process.env.NEXT_PUBLIC_API_URL;
const baseUrl = getApi+"dispensaries";


export const dispensaryService = {
    createRequest,
};

function createRequest(payload) {
    return fetchWrapper.post(`${baseUrl}`, payload)
}