function ImageCaption({galleryItem}) {
    return (
        <div className="caption">
            <p className="artist">{galleryItem.artist}</p>
            <p className="title">{galleryItem.title}</p>
            <p className="date">{galleryItem.date}</p>
        </div>
    )
}

export default ImageCaption;