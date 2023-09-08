import { useEffect, useState } from "react";
import image1 from "./image/image1.png"
import image2 from "./image/image2.png"
import image3 from "./image/image3.jpg"
import image4 from "./image/image4.svg"

function ImageSlider() {

    const [selectedImage, setSelectedImage] = useState(0)
    const [allImages, setAllImages] = useState([image1, image2, image3, image4])
    const [id, setId] = useState(null)

    useEffect(() => {
        start()
    }, [])

    const start = () => {
        console.log('start')
        const _start = setInterval(() => {
            setSelectedImage(selectedImage => selectedImage < 3 ? selectedImage + 1 : 0)
        }, 4000)
        setId(_start)
    }

    const stop = () => {
        console.log('stop')
        clearInterval(id)
    }
    
    return (
        <div>
            <img
                onMouseOut={() => start()}
                onMouseOver={() => stop()}
                width={810} height={400} src={allImages[selectedImage]} /> <br />
            <button
                onClick={() => {
                    if (selectedImage > 0)
                        setSelectedImage(selectedImage - 1)
                }}
            >PREV</button>

            <button
                onClick={() => {
                    if (selectedImage < allImages.length - 1)
                        setSelectedImage(selectedImage + 1)
                }}
            >NEXT</button>

        </div>
    );
}

export default ImageSlider;
