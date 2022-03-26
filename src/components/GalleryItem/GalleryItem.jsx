import { useState } from 'react';

function GalleryItem ({ galleryItem, updateLikeCount }) {
    const [showImage, setShowImage] = useState(true);

    const handleImageClick = () => {
        console.log('clicked image:', galleryItem.id)
        setShowImage(!showImage);
    }

    const handleLike = () => {
        console.log('clicked like');
        console.log('liked id:',galleryItem.id);
        updateLikeCount(galleryItem.id);
    }

    return (
        <div>    
            <div className="item" onClick={handleImageClick}>
                {showImage ? <img className="image" src={galleryItem.path} width="300" height="200"/> : 
                            <div className="description">
                                <p>{galleryItem.description}</p>
                            </div>}
            </div>
            <span className="material-icons" onClick={handleLike}>favorite_border</span>
        </div>
    )
}

export default GalleryItem;