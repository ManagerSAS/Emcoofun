import cloudinaryApi from "../api/cloudinaryApi"

const uploadImage = async( file ) => {
    if( !file ) return

    try {

        const formData = new FormData()
        formData.append('upload_preset','noveltys')
        formData.append('file', file )

        // const url = 'https://api.cloudinary.com/v1_1/dbepipmro/image/upload'
        const { data } =  await cloudinaryApi.post('', formData)
        // console.log(data)
        return data.secure_url
        
    } catch (error) {
        // console.error('Error al cargar la imagen revisar logs')
        // console.log(error)
        return null
    }
}


export default uploadImage