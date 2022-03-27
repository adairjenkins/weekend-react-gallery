import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList ({ galleryList, updateLikeCount, deleteItem }) {
    return (
        <div className="gallery">
            {galleryList.map ( galleryItem =>

                < GalleryItem
                    key = {galleryItem.id}
                    galleryItem = {galleryItem}
                    updateLikeCount = {updateLikeCount}
                    deleteItem = {deleteItem}
                />
            )}
        </div>
    )
}

export default GalleryList;