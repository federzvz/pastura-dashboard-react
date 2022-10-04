import React from "react";
import { Edit, SimpleForm, TextInput, ReferenceInput } from "react-admin";

const PasturasEdit = (props) => {
  return (
    <Edit title="Editar Pastura" {...props}>
      <SimpleForm>
        <ReferenceInput source="_id" reference="pasturas" />
        <TextInput disabled source="id" />
        <TextInput source="Familia" />
        <TextInput source="Especie" />
        <TextInput source="TipoVegetativo" />
        <TextInput source="RizomaEngrosado" />
        <TextInput source="Mocollo1" />
        <TextInput source="Mocollo2" />
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
