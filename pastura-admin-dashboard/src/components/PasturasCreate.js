import React from "react";
import { Create, SimpleForm, TextInput, Form, SelectInput } from "react-admin";

const PasturasCreate = (props) => {
  return (
    <Create title="Crear Pastura" {...props}>
      <SimpleForm>
        <TextInput source="Familia" />
        <TextInput source="Especie" />
        <TextInput source="TipoVegetativo" />
        <SelectInput
          source="RizomaEngrosado"
          choices={[
            { id: "0", name: "Tiene" },
            { id: "1", name: "No Tiene" },
          ]}
        />
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
        <SelectInput
          source="NervaduraCentralMarcada"
          choices={[
            { id: "0", name: "Tiene" },
            { id: "1", name: "No Tiene" },
          ]}
        />
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
    </Create>
  );
};

export default PasturasCreate;
