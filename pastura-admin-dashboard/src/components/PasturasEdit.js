import React from "react";
// import { DragAndDrop } from "./DragAndDrop";
// import { Edit, SimpleForm, TextInput, ReferenceInput } from "react-admin";
import {
  Edit,
  TabbedForm,
  TextInput,
  FormTab,
  SelectInput,
} from "react-admin";
import { Typography, Box } from '@mui/material';

const PasturasEdit = (props) => {
  return (
    <Edit title="Editar Pastura" {...props}>
      {/* <SimpleForm>
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
          </Box>
          <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
            <TextInput source="Mocollo2" fullWidth/>
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
      </SimpleForm> */}
      <TabbedForm sx={{ bgcolor: "background.paper", borderRadius: 1 }}>
        <FormTab label="Generalidades">
          <TextInput source="Familia" />
          <TextInput source="Especie" />
          <TextInput source="TipoVegetativo" />
          <SelectInput
            source="RizomaEngrosado"
            choices={[
              { id: "0", name: "Si" },
              { id: "1", name: "No" },
            ]}
          />
        </FormTab>
        <FormTab label="Macollo">
          <TextInput source="Mocollo1" />
          <TextInput source="Mocollo2" />
        </FormTab>
        <FormTab label="Ligula">
          <TextInput source="ConsistenciaLigula" />
          <TextInput source="FormaLigula" />
          <TextInput source="Tamano" />
          <TextInput source="OtrasCaracteristicasLigula" />
          <TextInput source="ColorLigula" />
        </FormTab>
        <FormTab label="Ligula">
          <TextInput source="FormaLamina" />
          <TextInput source="Canaliculada" />
          <TextInput source="TipoLamina" />
          <TextInput source="Apice" />
          <SelectInput
            source="NervaduraCentralMarcada"
            choices={[
              { id: "0", name: "Si" },
              { id: "1", name: "No" },
            ]}
          />
          <TextInput source="Observaciones" />
        </FormTab>
        <FormTab label="Pelos">
          <TextInput source="Pelos" />
          <TextInput source="UbicacionPelos" />
          <TextInput source="Observacion" />
        </FormTab>
        <FormTab label="Observaciones">
          <TextInput source="ObservacionesGenerales" />
          <TextInput source="CicloVida" />
          <TextInput source="CicloProductivo" />
          <TextInput source="TipoProductivo" />
          <TextInput source="TipoCampo" />
          {/* <DragAndDrop/> */}
        </FormTab>
      </TabbedForm>
    </Edit>
  );
};

export default PasturasEdit;
