import olivosApi from '../api/olivosApi'
const forms = '/api/v1/forms'

export default {
    async postObituario( data ){
        const response = await olivosApi.post( forms + '/crearObituario', data)
        return response
    },
    async getObituarios( obituariosCity ){
        const raw = {ciudad: obituariosCity};
        const response = await olivosApi.post( forms + '/obituarios', raw)
        return response.data
    },
    async ConsultObituarios(data){
        const raw = {datos: data};
        const response = await olivosApi.post( forms + '/ConsultaObituario', raw)
        return response.data
    },
    async editObituarios(data){
        const response = await olivosApi.post( forms + '/UpdateObituario', data)
        return response.data
    },
    async ConsultHomenaje(data){
        const raw = {datos: data};
        const response = await olivosApi.post( forms + '/ConsultHomenaje', raw)
        return response.data
    },
    async editHomenaje(data){
        const response = await olivosApi.post( forms + '/EditHomenaje', data)
        return response.data
    },
    async GenerarReporte(data){
        const response = await olivosApi.post( forms + '/GenerarReporte', data)
        return response.data
    },
    async GenerarReporteObituario(data){
        const response = await olivosApi.post( forms + '/GenerarReporteObituario', data)
        return response.data
    },

    
}