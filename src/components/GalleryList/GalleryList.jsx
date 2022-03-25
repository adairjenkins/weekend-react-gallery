import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList ({ galleryList }) {
    return (
        <>
            {galleryList.map ( galleryItem =>

                < GalleryItem
                    key = {galleryItem.id}
                    galleryItem = {galleryItem}
                />
            )}
        </>
    )
}

export default GalleryList;