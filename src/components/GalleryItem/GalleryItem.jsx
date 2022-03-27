import { useState } from 'react';
import ImageCaption from '../ImageCaption/ImageCaption';

function GalleryItem ({ galleryItem, updateLikeCount, deleteItem }) {
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

    const handleDelete = () => {
        console.log('clicked delete:', galleryItem.title); 
        deleteItem(galleryItem.id);
    }

    return (
        <div className="item-and-likes">    
            <div className="item" onClick={handleImageClick}>
                {showImage ? <img className="image" src={galleryItem.path} width="300" height="200"/> : 
                            <div className="captionBox">
                                < ImageCaption
                                  galleryItem = {galleryItem}/>
                            </div>}
            </div>
            <div className="likes-container"><span className="material-icons" onClick={handleLike}>favorite_border</span>
                 <span className="likes">{ galleryItem.likes > 0 && galleryItem.likes }</span>
                 <span className="deleteBtn material-icons" onClick={handleDelete}>clear</span>
            </div>
        </div>
    )
}

export default GalleryItem;