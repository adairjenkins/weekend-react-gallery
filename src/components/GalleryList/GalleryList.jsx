import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList ({ galleryList, updateLikeCount }) {
    return (
        <div className="gallery">
            {galleryList.map ( galleryItem =>

                < GalleryItem
                    key = {galleryItem.id}
                    galleryItem = {galleryItem}
                    updateLikeCount = {updateLikeCount}
                />
            )}
        </div>
    )
}

export default GalleryList;