'use client'

const UploadImagesComponent = () => {

    
    function handleImageUpload(e){
        const files = []
        if(e && e.target && e.target.files){
            for(const file of e.target.files){
                // Instancio el lector de archivos
                var reader = new FileReader();
                // Dejo el lector leyendo el archivo seleccionado
                reader.readAsDataURL(file)
                reader.addEventListener("load", ()=>{
                    files.push({
                        base64:reader.result,
                        name:file.name
                    })
                    debugger
                })
            }
        }
    }


    
    return ( <> <div>
        <span>Input de ejemplo para subida de imagenes</span>
        <input type="file" onChange={e => handleImageUpload(e)}></input>
    </div> </> );
}
 
export default UploadImagesComponent;