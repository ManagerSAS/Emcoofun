import olivosApi from '../api/olivosApi'
const login = '/api/v1'
export default {
    async login( dataUSer ){
        const response = await olivosApi.post( login + '/login', dataUSer)
        return response
    }
    
}