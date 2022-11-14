import * as React from "react";
import { List, Datagrid, TextField, EditButton, DeleteButton, ImageField, ShowButton } from 'react-admin';
import { PostFilterSidebar } from './PostFilterSidebar';

const PasturasList = (props) => {
    return (
    <List aside={<PostFilterSidebar />} {...props}>
        <Datagrid>
            {/* <TextField source="id" />
            <TextField source="Familia" />
            <TextField source="Especie" />
            <TextField source="TipoVegetativo" />
            <TextField source="RizomaEngrosado" />
            <TextField source="Mocollo1" />
            <TextField source="Mocollo2" />
            <TextField source="ConsistenciaLigula" />
            <TextField source="FormaLigula" />
            <TextField source="Tamano" />
            <TextField source="OtrasCaracteristicasLigula" />
            <TextField source="ColorLigula" />
            <TextField source="FormaLamina" />
            <TextField source="Canaliculada" />
            <TextField source="TipoLamina" />
            <TextField source="Apice" />
            <TextField source="NervaduraCentralMarcada" />
            <TextField source="Observaciones" />
            <TextField source="Pelos" /> */}
            <ImageField source="Imagen" title="Imagen" 
                sx={{ '& img': { maxWidth: 100, maxHeight: 100, objectFit: 'contain', borderRadius: '50%' } }}
            />
            <TextField source="UbicacionPelos" />
            <TextField source="Observacion" />
            <TextField source="ObservacionesGenerales" />
            <TextField source="CicloVida" />
            <TextField source="CicloProductivo" />
            <TextField source="TipoProductivo" />
            <TextField source="TipoCampo" />
            <EditButton />
            <DeleteButton />
            <ShowButton/>
        </Datagrid>
    </List>
    )
};

export default PasturasList;


        