import React from 'react'
import { useRef, useState, useEffect } from "react"

export const ImageUpload = (props) => {

    const fileInput = useRef("");
    const [fileName, setFileName] = useState(null)
    
    props.imageRef.current = setFileName

    const selectFile = () => {
        fileInput.current.click();
    }

    const encodeFile = e => {
        if (e.target.files[0].type.match("image.*"))
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = () => {resolve(reader.result)};
            reader.onerror = error => reject(error);
        }).then(e => {
            var smallerThanOneMB = e.length < 1000000
            if (smallerThanOneMB){
                props.setImage(e)
            } else alert("The image is too big.")
        })
        else alert("The selected file is not an image.")
    }

    useEffect(() => {
        setFileName(fileInput.current.value.substr(fileInput.current.value.lastIndexOf('\\') + 1).split('.')[0])
    }, [fileInput.current.value])

  return (
    <>
        <input type="file" name="sendImage" accept="image/png, image/gif, image/jpeg" style={{display: "none"}} ref={fileInput} onChange={e => encodeFile(e)} />
        <img onClick={selectFile} src={ require("../../icons/upload-image.png")} alt={ fileName } style={{ cursor: "pointer", width: "30px", height: "30px" }} />
        <p style={{ color: "white" }}> { fileName } </p>
    </>
  )
}

export default ImageUpload;