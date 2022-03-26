function ImageCaption({galleryItem}) {
    return (
        <>
            <h5>{galleryItem.artist}</h5>
            <h4>{galleryItem.title}</h4>
            <h6>{galleryItem.date}</h6>
        </>
    )
}

export default ImageCaption;