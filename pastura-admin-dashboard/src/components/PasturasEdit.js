import React from "react";
import { Edit, SimpleForm, TextInput, ReferenceInput } from "react-admin";
import { Typography, Box } from '@mui/material';

const PasturasEdit = (props) => {
  return (
    <Edit title="Editar Pastura" {...props}>
      <SimpleForm>
        {/* <ReferenceInput source="_id" reference="pasturas" /> */}
        <TextInput disabled source="id" />
        <TextInput source="Familia" />
        <TextInput source="Especie" />
        <TextInput source="TipoVegetativo" />
        <TextInput source="RizomaEngrosado" />

        <Typography variant="h6" gutterBottom>
          Macollo
        </Typography>
        <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
          <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
            <TextInput source="Mocollo1" fullWidth/>
            {/* <TextInput source="first_name" isRequired fullWidth /> */}
          </Box>
          <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
            <TextInput source="Mocollo2" fullWidth/>
            {/* <TextInput source="last_name" isRequired fullWidth /> */}
          </Box>
        </Box>

        <TextInput source="ConsistenciaLigula" />
        <TextInput source="FormaLigula" />
        <TextInput source="Tamano" />
        <TextInput source="OtrasCaracteristicasLigula" />
        <TextInput source="ColorLigula" />
        <TextInput source="FormaLamina" />
        <TextInput source="Canaliculada" />
        <TextInput source="TipoLamina" />
        <TextInput source="Apice" />
        <TextInput source="NervaduraCentralMarcada" />
        <TextInput source="Observaciones" />
        <TextInput source="Pelos" />
        <TextInput source="UbicacionPelos" />
        <TextInput source="Observacion" />
        <TextInput source="ObservacionesGenerales" />
        <TextInput source="CicloVida" />
        <TextInput source="CicloProductivo" />
        <TextInput source="TipoProductivo" />
        <TextInput source="TipoCampo" />
      </SimpleForm>
    </Edit>
  );
};

export default PasturasEdit;
