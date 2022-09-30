import olivosApi from '../api/olivosApi'

const forms = '/api/v1/forms'

export default {
    
    async postFormAfiliacion( data ){
        const response = await olivosApi.post( forms + '/postFormAfiliacion', data)
        console.log(response)
        return response.data
    },
    postFormAuxilios( data ){
        olivosApi.post( forms + '/auxilios-funerarios', data)
            .then( response => response.json() )
    }, 
    async postFormHomenajes( data ){
        const response = await olivosApi.post( forms + '/homenajes', data)
        return response.data
    },
    async postFormContac( data ){
        const response = await olivosApi.post( forms + '/formulario-contacto', data)
        return response
    },
    async EnviarCorreoFacturaElectronica( data ){
        const response = await olivosApi.post( forms + '/EnviarCorreo', data)
        return response.data
    },
    async ConsultaRegistroDefuncion( data ){
        const raw = {datos: data};
        const response = await olivosApi.post( forms + '/RegistroDefuncion', raw)
        return response.data
    },
    async CreateEvent( data ){
        const response = await olivosApi.post( forms + '/CreateNew', data)
        return response.data
    },
    async ConsultarEvent( data ){
        const response = await olivosApi.post( forms + '/ConsultarEvent', data)
        return response.data
    },
    async editEvento( data ){
        const response = await olivosApi.post( forms + '/UpdateEvent', data)
        return response.data
    },

}