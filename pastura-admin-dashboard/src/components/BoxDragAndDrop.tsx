import React from 'react';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import Grid from "@mui/material/Grid";

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
            <button className='label-dnd' 
            style={
                {
                    // border: '1px solid', 
                    // color: 'black',
                    // margin: '10px',
                    fontFamily: '"Roboto","Helvetica","Arial","sans-serif"',
                    letterSpacing: '0.02857em',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    width: '130px',
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
            } 
            >
                {/* <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" data-testid="ImageIcon" viewBox="0 0 28 28"> <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"></path>
                </svg>  */}
                <Grid container>
                    <Grid item xs={1} style={{ marginLeft: ".8rem"}}>
                        <ImageSearchIcon viewBox="0 0 28 28" />
                    </Grid>   
                    <Grid item xs={1} style={{ marginLeft: "1.2rem", marginTop: '4px'}}>
                        IMAGEN... 
                    </Grid> 
                </Grid>
                </button>
        </div>
    )
}