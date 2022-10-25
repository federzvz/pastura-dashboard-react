import React from "react";
import {
  Create,
  TabbedForm,
  TextInput,
  FormTab,
  SelectInput,
} from "react-admin";
import { DragAndDrop } from './DragAndDrop.tsx';

const PasturasCreate = (props) => {
  return (
    <Create title="Crear Pastura" {...props}>
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
          <DragAndDrop></DragAndDrop>
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
          
        </FormTab>
      </TabbedForm>
    </Create>
  );
};

export default PasturasCreate;
