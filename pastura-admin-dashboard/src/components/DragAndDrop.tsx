import React from 'react';
import ImageUploading from "react-images-uploading";
import { useUploadImage } from '../hooks/useUploadImage.ts';

import { BoxDragAndDrop } from './BoxDragAndDrop.tsx';
import { ImageSelected } from './ImageSelected.tsx';
import { Message } from './Message.tsx';

export const DragAndDrop = () => {

    const { urlImage, handleChange, images, ...rest } = useUploadImage();

    return (
        <>
            <Message urlImage={urlImage} />
            <ImageUploading multiple={false} value={images} onChange={handleChange} maxNumber={1}>
                {({
                    imageList,
                    onImageUpload,
                    dragProps,
                    isDragging,
                    onImageRemove,
                    onImageUpdate,
                }) => (
                    <>
                        {
                            imageList[0]
                                ? <ImageSelected  {...{ onImageRemove, onImageUpdate, ...rest }} img={imageList[0].dataURL!} />
                                : <BoxDragAndDrop {...{ onImageUpload, dragProps, isDragging }} />
                        }
                    </>
                )}
            </ImageUploading>
        </>
    )
}