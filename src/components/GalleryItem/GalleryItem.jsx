import { useState } from 'react';

function GalleryItem ({ galleryItem }) {
    const [showImage, setShowImage] = useState(true);

    const handleImageClick = () => {
        console.log('clicked image:', galleryItem.id)
        setShowImage(!showImage);
    }

    return (
        <div onClick={handleImageClick}>
            {showImage && <img src={galleryItem.path} width="300"/>}
        </div>
    )
}

export default GalleryItem;