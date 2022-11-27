import React, { useEffect } from "react";
// import { DragAndDrop } from "./DragAndDrop";
// import { Edit, SimpleForm, TextInput, ReferenceInput } from "react-admin";
import {
  Edit,
  TabbedForm,
  TextInput,
  FormTab,
  SelectInput,
  required,
  ImageField
} from "react-admin";
import { Typography, Box } from '@mui/material';
import { DragAndDrop } from './DragAndDrop.tsx';
import { useState } from "react";
import { useFormContext } from "react-hook-form";

const PasturasEdit = (props) => {

  const [urlImageParent, setUrlImageParent] = useState("https://res.cloudinary.com/dtl1jqk2y/image/upload/v1668464407/qtprxwahdo1jraapkpad.jpg");
  // const urlImage 
  // const componentDidMount = () =>{
  //   document.getElementById("myImg").src = "https://res.cloudinary.com/dtl1jqk2y/image/upload/v1668464407/qtprxwahdo1jraapkpad.jpg";
  // }
  const WeeklyButton = () => {
    // e.preventDefault();
    const { setValue } = useFormContext();
    setValue("Imagen", urlImageParent);
    console.log(urlImageParent.toString());
    if(document.getElementById("myImg")){
      if(!urlImageParent){
        document.getElementById("myImg").src = "https://res.cloudinary.com/dtl1jqk2y/image/upload/v1668464407/qtprxwahdo1jraapkpad.jpg";
        console.log("AAAAAAAAAAAAAAAAAAAAAA");
      } else {
        console.log("BBBBBBBBBBBBBBBBBBB " + urlImageParent.toString());
        document.getElementById("myImg").src = urlImageParent.toString();
      }
    } else {
      setUrlImageParent("https://res.cloudinary.com/dtl1jqk2y/image/upload/v1668464407/qtprxwahdo1jraapkpad.jpg");
      console.log("CCCCCCCCCCCCCCCCCCCCCCC " + urlImageParent.toString());
    }
  };

  useEffect(() => {

  }
  , [urlImageParent]);

  return (
    <Edit title="Editar Pastura" {...props} redirect="list">
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
      {/* <TabbedForm sx={{ bgcolor: "background.paper", borderRadius: 1 }}>
        <FormTab label="Generalidades">
          <TextInput source="Familia" />
          <TextInput source="Especie" />
          <TextInput source="TipoVegetativo" />
          {console.log(props)}
          <SelectInput 
            source="RizomaEngrosado"
            choices={[
              { id: "true", name: "Si" },
              { id: "false", name: "No" },
            ]}
          />
        </FormTab>
        <FormTab label="Macollo">
          <TextInput source="Mocollo1" text="Macollo 1"/>
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
              { id: "true", name: "Si" },
              { id: "false", name: "No" },
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
      </TabbedForm> */}
      <TabbedForm id="p" sx={{ bgcolor: "background.paper", borderRadius: 1 }}>
        <FormTab label="Generalidades">

          {/* <Typography variant="h6" gutterBottom>
            Generalidades
          </Typography> */}
          <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
              <TextInput source="Especie" fullWidth multiline/>{/* multiline */}
              {/* <TextInput source="TipoVegetativo" fullWidth/> */}

              <SelectInput
                source="TipoVegetativo"
                choices={[
                  { id: "Cespitoso", name: "Cespitoso" },
                  { id: "Estolonifero", name: "Estolonifero" },
                  { id: "Rizomatozo", name: "Rizomatozo" },
                  { id: "Estolonifero-rizomatozo", name: "Estolonifero-rizomatozo" },
                  { id: "Estolonifero rizomatiforme", name: "Estolonifero rizomatiforme" },
                ]}
                fullWidth
              />
              <SelectInput
                source="RizomaEngrosado"
                choices={[
                  { id: "true", name: "Si" },
                  { id: "false", name: "No" },
                ]}
                fullWidth/>
            </Box>
            <Box flex={1} ml={{ xs: 0, sm: '0.5em' }}>
            {/* <TextInput source="Imagen" validate={[required()]} ></TextInput>  */}
              <Typography variant="h6" gutterBottom>
                Imagen
              </Typography>
              <div>
                <img source="Imagen" src="" id="myImg" alt="Sin imagen" style={{maxWidth: '500px'}}/>
              </div>
              <DragAndDrop setUrlImageParent={setUrlImageParent}>
              </DragAndDrop>
              {/* <DragAndDrop>
              </DragAndDrop> */}
            </Box>

          </Box>

          {/* <TextInput source="Familia" />
          <TextInput source="Especie" />
          <TextInput source="TipoVegetativo" />
          <SelectInput
          source="RizomaEngrosado"
          choices={[
            { id: "0", name: "Si" },
            { id: "1", name: "No" },
          ]}
          />
          <DragAndDrop setUrlImageParent={setUrlImageParent}>
          </DragAndDrop>
         <TextInput source="Imagen" validate={[required()]}></TextInput> */}
        </FormTab>
        <FormTab label="Macollo" >
          {/* <TextInput source="Mocollo1" /> */}
          <SelectInput
            source="Mocollo1"
            choices={[
              { id: "Semi rollizo", name: "Semi rollizo" },
              { id: "Comprimido", name: "Comprimido" },
              { id: "Semi Rolliza", name: "Semi Rolliza" },
              { id: "Rollizo", name: "Rollizo" },
              { id: "Semi Comprimido", name: "Semi Comprimido" },
              { id: "Semi Rollizo o rollizo", name: "Semi Rollizo o rollizo" },
              { id: "Muy Comprimido", name: "Muy Comprimido" },
              { id: "Semi comprimido-Rollizo", name: "Semi comprimido-Rollizo" },
            ]}
            fullWidth validate={[required()]}/>
          {/* <TextInput source="Mocollo2"/> */}
          <SelectInput
            source="Mocollo2"
            choices={[
              { id: "Intravaginal", name: "Intravaginal" },
              { id: "Extravaginal", name: "Extravaginal" },
              { id: "Extravaginal principalmente", name: "Extravaginal principalmente" },
              { id: "Intra o extra", name: "Intra o extra" },
              { id: "Intravaginal o Extravaginal", name: "Intravaginal o Extravaginal" },
              { id: "Extravaginal (Intra en gral)", name: "Extravaginal (Intra en gral)" },
            ]}
            fullWidth validate={[required()]}/>
        </FormTab>
        <FormTab label="Ligula">
          {/* <TextInput source="ConsistenciaLigula" /> */}
          <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
              <SelectInput
                source="ConsistenciaLigula"
                choices={[
                  { id: "Membranacea", name: "Membranacea" },
                  { id: "Extravaginal", name: "Extravaginal" },
                  { id: "Disuelta en pelos", name: "Disuelta en pelos" },
                  { id: "Mixta", name: "Mixta" },
                  { id: "No visible", name: "No visible" },
                ]}
                fullWidth/>
                {/* <TextInput source="Tamano" /> */}
              <SelectInput
                source="Tamano"
                choices={[
                  { id: "Chica", name: "Chica" },
                  { id: "Largos", name: "Largos" },
                  { id: "Muy chica", name: "Muy chica" },
                  { id: "Mas ancha que alta", name: "Mas ancha que alta" },
                  { id: "Muy aguda", name: "Muy aguda" },
                  { id: "No visible", name: "No visible" },
                  { id: "Alta", name: "Alta" },
                  { id: "Corta", name: "Corta" },
                  { id: "Grande", name: "Grande" },
                  { id: "Visible", name: "Visible" },
                ]}
                fullWidth/>
            </Box>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
              <SelectInput
                source="FormaLigula"
                choices={[
                  { id: "Truncada y dientada", name: "Truncada y dientada" },
                  { id: "Truncada", name: "Truncada" },
                  { id: "Aguda", name: "Aguda" },
                  { id: "Redondeada", name: "Redondeada" },
                ]}
                fullWidth/>
              {/* <TextInput source="ColorLigula" /> */}
              <SelectInput
                source="ColorLigula"
                choices={[
                  { id: "Blanca o castaño", name: "Blanca o castaño" },
                  { id: "Castaño", name: "Castaño" },
                  { id: "Castaña", name: "Castaña" },
                  { id: "Castaño en hojas maduras", name: "Castaño en hojas maduras" },
                ]}
                fullWidth/>
            </Box>
          </Box>
          <TextInput source="OtrasCaracteristicasLigula" fullWidth multiline/>
          {/* <TextInput source="FormaLigula" /> */}
        </FormTab>
        <FormTab label="Lamina">
          {/* <TextInput source="FormaLamina" /> */}
          <Box display={{ xs: 'block', sm: 'flex', width: '100%' }}>
            <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
              <SelectInput
                source="FormaLamina"
                choices={[
                  { id: "Linear", name: "Linear" },
                  { id: "Navicular", name: "Navicular" },
                  { id: "Linear-Lanceolada", name: "Linear-Lanceolada" },
                  { id: "Lanceolada", name: "Lanceolada" },
                ]}
                fullWidth/>
          {/* <TextInput source="Canaliculada" /> */}
              <SelectInput
                source="Canaliculada"
                choices={[
                  { id: "Canaliculada", name: "Canaliculada" },
                  { id: "Acanalada", name: "Acanalada" },
                  { id: "Ligeramente canaliculada", name: "Ligeramente canaliculada" },
                ]}
                fullWidth/>
          {/* <TextInput source="TipoLamina" /> */}
              <SelectInput
                source="TipoLamina"
                choices={[
                  { id: "Plana", name: "Plana" },
                  { id: "Navicular", name: "Navicular" },
                  { id: "Navicular-Plegada", name: "Navicular-Plegada" },
                  { id: "Navicular a plana", name: "Navicular a plana" },
                  { id: "Plegada", name: "Plegada" },
                  { id: "Plegada o aveces plana", name: "Plegada o aveces plana" },
                ]}
                fullWidth/>
                </Box>
                <Box flex={1} mr={{ xs: 0, sm: '0.5em' }}>
          {/* <TextInput source="Apice" /> */}
          <SelectInput
            source="Apice"
            choices={[
              { id: "Agudo", name: "Agudo" },
              { id: "Obtuso", name: "Obtuso" },
            ]}
            fullWidth/>
          <SelectInput
            source="NervaduraCentralMarcada"
            choices={[
              { id: "true", name: "Si" },
              { id: "false", name: "No" },
            ]}
            fullWidth/>
          <TextInput source="Observaciones" fullWidth multiline/>
          </Box>
          </Box>
        </FormTab>
        <FormTab label="Pelos">
          {/* <TextInput source="Pelos" /> */}
          <SelectInput
            source="Pelos"
            choices={[
              { id: "Glabra", name: "Glabra" },
              { id: "Glabra o Pubecente", name: "Glabra o Pubecente" },
              { id: "Pubecente", name: "Pubecente" },
              { id: "Pubescente", name: "Pubescente" },
              { id: "Poco a nada", name: "Poco a nada" },
            ]}
            fullWidth/>
          <TextInput source="UbicacionPelos" fullWidth multiline/>
          <TextInput source="Observacion" fullWidth multiline/>
        </FormTab>
        <FormTab label="Observaciones">
          <TextInput source="ObservacionesGenerales" fullWidth multiline/>
          {/* <TextInput source="CicloVida" /> */}
          <SelectInput
            source="CicloVida"
            choices={[
              { id: "Anual", name: "Anual" },
              { id: "Perenne", name: "Perenne" },
            ]}
            fullWidth/>
          {/* <TextInput source="CicloProductivo" /> */}
          <SelectInput
            source="CicloProductivo"
            choices={[
              { id: "Invernal", name: "Invernal" },
              { id: "Estival", name: "Estival" },
            ]}
            fullWidth/>
          {/* <TextInput source="TipoProductivo" /> */}
          <SelectInput
            source="TipoProductivo"
            choices={[
              { id: "Tierno", name: "Tierno" },
              { id: "Duro", name: "Duro" },
              { id: "Ordinario", name: "Ordinario" },
              { id: "Tierno-Ordinario", name: "Tierno-Ordinario" },
              { id: "Ordinaria", name: "Ordinaria" },
              { id: "Fino", name: "Fino" },
              { id: "Tierno antes de emitir fruto", name: "Tierno antes de emitir fruto" },
              { id: "Ordinario-Tierno", name: "Ordinario-Tierno" },
              { id: "Tierno-Fino", name: "Tierno-Fino" },
              { id: "Muy enano", name: "Muy enano" },
              { id: "Ordinario a tierno", name: "Ordinario a tierno" },
              { id: "Ordinario-Duro", name: "Ordinario-Duro" },
              { id: "Anual", name: "Anual" },
              { id: "Perenne", name: "Perenne" },
            ]}
            fullWidth/>
          <TextInput source="TipoCampo" fullWidth multiline/>
        </FormTab>
        <WeeklyButton/>
      </TabbedForm>

    </Edit>
  );
};

export default PasturasEdit;
