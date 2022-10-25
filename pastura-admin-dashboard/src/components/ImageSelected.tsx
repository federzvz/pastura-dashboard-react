import React from 'react';

interface Props {
    loading: boolean;
    img: string;
    onUpload: () => Promise<void>;
    onImageRemove: (index: number) => void;
    onImageUpdate: (index: number) => void
}

export const ImageSelected = ({
    img,
    loading,
    onUpload,
    onImageRemove,
    onImageUpdate
}: Props) => {

    return (
        <div>
            <img className='image-selected' src={img} alt='image-selected' width={300} />
            <div className='container-buttons'>
                {
                    loading
                        ? <p className='loading-label'>Subiendo imagen ⏳...</p>
                        : <>
                            <button disabled={loading} onClick={onUpload}>Subir 📤</button>
                            <button disabled={loading} onClick={() => onImageUpdate(0)}>Actualizar ✏️</button>
                            <button disabled={loading} onClick={() => onImageRemove(0)}>Cancelar ❌</button>
                        </>
                }
            </div>
        </div>
    )
}