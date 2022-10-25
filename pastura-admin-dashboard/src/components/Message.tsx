import React from 'react';

interface Props {
    urlImage: string | null
}

export const Message = ({ urlImage }: Props) => {
    return (
        <>
            {
                urlImage && <span className='url-cloudinary-sumbit'>
                    Imagen subida con exito! ✅ 
                        {urlImage}
                        {/* <a target='_blank' href={urlImage}> Ver imagen</a> */}
                </span>
            }
        </>
    )
}