import axios from "axios"

const END_POINTH = 'https://apineiva.agenciamanager.net/'

const cloudinaryApi = axios.create({
    baseURL: END_POINTH,
    headers:{
        "Access-Control-Allow-Origin": "*"
    }
})

export default cloudinaryApi