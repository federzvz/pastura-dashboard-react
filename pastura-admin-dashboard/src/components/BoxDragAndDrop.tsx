import React from 'react';

interface Props {
    onImageUpload: () => void;
    dragProps: any;
    isDragging: boolean
}

export const BoxDragAndDrop = ({ isDragging, onImageUpload, dragProps }: Props) => {
    return (
        <div
            onClick={onImageUpload}
            {...dragProps}
            className={`container-dnd center-flex ${isDragging ? 'isDragging' : ''}`}
        >
            <button className='label-dnd'>Seleccionar imagen o arrastrar 📤</button>
        </div>
    )
}