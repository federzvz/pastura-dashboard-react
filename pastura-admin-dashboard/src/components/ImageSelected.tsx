import React from 'react';

interface Props {
    loading: boolean;
    img: string;
    onUpload: () => Promise<void>;
    onImageRemove: (index: number) => void;
    onImageUpdate: (index: number) => void
}
const style1 = {
            letterSpacing: '0.02857em',
            cursor: 'pointer',
            fontSize: '0.875rem',
            fontWeight: '500',
            width: '110px',
            height: '35px',
            padding: '5px',
            background: '#0055ff',
            color: '#fff',
            outline: 'none',
            borderRadius: '4px',
            border: '1px solid transparent',
            backgroundColor: '#1976d2',
            transition: '0.5s',
            boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)'
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
                            <button disabled={loading} onClick={onUpload} style={style1} >Subir 📤</button>
                            <button disabled={loading} onClick={() => onImageUpdate(0)} style={style1}>Actualizar ✏️</button>
                            <button disabled={loading} onClick={() => onImageRemove(0)} style={style1}>Cancelar ❌</button>
                        </>
                }
            </div>
        </div>
    )
}