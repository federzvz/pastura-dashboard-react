import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  TextField,
  DateField,
  RichTextField,
  ImageField,
} from "react-admin";
import { Box, Typography } from "@mui/material";

const PostShow = () => (
  <Show>
    <SimpleShowLayout>
      <Typography variant="h4" gutterBottom>
        Generalidades
      </Typography>
      <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
        <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
          <Typography variant="h6" gutterBottom>
            ObservacionesGenerales
          </Typography>
          <TextField source="ObservacionesGenerales" fullWidth />
        </Box>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <Typography variant="h6" gutterBottom>
            Especie
          </Typography>
          <TextField source="Especie" fullWidth />
        </Box>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <Typography variant="h6" gutterBottom>
            TipoVegetativo
          </Typography>
          <TextField source="TipoVegetativo" fullWidth />
        </Box>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <Typography variant="h6" gutterBottom>
            RizomaEngrosado
          </Typography>
          <TextField source="RizomaEngrosado" fullWidth />
        </Box>
      </Box>
      <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <Typography variant="h6" gutterBottom>
            CicloVida
          </Typography>
          <TextField source="CicloVida" fullWidth />
        </Box>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <Typography variant="h6" gutterBottom>
            CicloProductivo
          </Typography>
          <TextField source="CicloProductivo" fullWidth />
        </Box>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <Typography variant="h6" gutterBottom>
            TipoProductivo
          </Typography>
          <TextField source="TipoProductivo" fullWidth />
        </Box>
        <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
          <Typography variant="h6" gutterBottom>
            TipoCampo
          </Typography>
          <TextField source="TipoCampo" fullWidth />
        </Box>
      </Box>

      <Typography variant="h4" gutterBottom>
        Mocollo
      </Typography>
      <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
        <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
          <Typography variant="h6" gutterBottom>
            Mocollo1
          </Typography>
          <TextField source="Mocollo1" fullWidth />
        </Box>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <Typography variant="h6" gutterBottom>
            Mocollo2
          </Typography>
          <TextField source="Mocollo2" fullWidth />
        </Box>
      </Box>

      <Typography variant="h4" gutterBottom>
        Ligula
      </Typography>
      <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <Typography variant="h6" gutterBottom>
            ConsistenciaLigula
          </Typography>
          <TextField source="ConsistenciaLigula" fullWidth />
        </Box>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <Typography variant="h6" gutterBottom>
            FormaLigula
          </Typography>
          <TextField source="FormaLigula" fullWidth />
        </Box>
        <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
          <Typography variant="h6" gutterBottom>
            Tamano
          </Typography>
          <TextField source="Tamano" fullWidth />
        </Box>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <Typography variant="h6" gutterBottom>
            OtrasCaracteristicasLigula
          </Typography>
          <TextField source="OtrasCaracteristicasLigula" fullWidth />
        </Box>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <Typography variant="h6" gutterBottom>
            ColorLigula
          </Typography>
          <TextField source="ColorLigula" fullWidth />
        </Box>
      </Box>

      <Typography variant="h4" gutterBottom>
        Lamina
      </Typography>
      <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <Typography variant="h6" gutterBottom>
            FormaLamina
          </Typography>
          <TextField source="FormaLamina" fullWidth />
        </Box>
        <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
          <Typography variant="h6" gutterBottom>
            Canaliculada
          </Typography>
          <TextField source="Canaliculada" fullWidth />
        </Box>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <Typography variant="h6" gutterBottom>
            TipoLamina
          </Typography>
          <TextField source="TipoLamina" fullWidth />
        </Box>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <Typography variant="h6" gutterBottom>
            Apice
          </Typography>
          <TextField source="Apice" fullWidth />
        </Box>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <Typography variant="h6" gutterBottom>
            NervaduraCentralMarcada
          </Typography>
          <TextField source="NervaduraCentralMarcada" fullWidth />
        </Box>
        <Box flex={1} mr={{ xs: 0, sm: "0.5em" }}>
          <Typography variant="h6" gutterBottom>
            Observaciones
          </Typography>
          <TextField source="Observaciones" fullWidth />
        </Box>
      </Box>

      <Typography variant="h4" gutterBottom>
        Pelos
      </Typography>
      <Box display={{ xs: "block", sm: "flex", width: "100%" }}>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <Typography variant="h6" gutterBottom>
            Pelos
          </Typography>
          <TextField source="Pelos" fullWidth />
        </Box>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <Typography variant="h6" gutterBottom>
            UbicacionPelos
          </Typography>
          <TextField source="UbicacionPelos" fullWidth />
        </Box>
        <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
          <Typography variant="h6" gutterBottom>
            Observacion
          </Typography>
          <TextField source="Observacion" fullWidth />
        </Box>
      </Box>

      <Typography variant="h4" gutterBottom>
      Previsualización
      </Typography>
      <Box flex={1} ml={{ xs: 0, sm: "0.5em" }}>
        <Typography variant="h6" gutterBottom>
          Imagen
        </Typography>
        <ImageField source="Imagen" />
      </Box>
    </SimpleShowLayout>
  </Show>
);

export default PostShow;
