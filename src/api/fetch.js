import axios from "axios";

const CancelToken = axios.CancelToken;
let source = CancelToken.source();

export function searchResults(text, from) {
    source && source.cancel();
    source = axios.CancelToken.source();

    return axios.get(`/npm/-/v1/search?text=${text}&size=10&from=${from}`, { cancelToken: source.token })
}

export function currentPackage(name) {
    return axios.get(`/npm/${name}`)
}
