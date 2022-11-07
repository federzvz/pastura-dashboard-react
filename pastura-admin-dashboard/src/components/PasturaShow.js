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
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PostShow = () => (
  <Show>
    <SimpleShowLayout>
      <hr />
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
        Generalidades
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridAutoFlow: "column",
          gap: "35%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <Box>
            <Typography variant="h6" gutterBottom>
              ObservacionesGenerales
            </Typography>
            <TextField source="ObservacionesGenerales" />
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom>
              Especie
            </Typography>
            <TextField source="Especie" fullWidth />
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom>
              TipoVegetativo
            </Typography>
            <TextField source="TipoVegetativo" fullWidth />
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom>
              RizomaEngrosado
            </Typography>
            <TextField source="RizomaEngrosado" fullWidth />
          </Box>
        </div>
        <div>
          <Box>
            <Typography variant="h6" gutterBottom>
              CicloVida
            </Typography>
            <TextField source="CicloVida" fullWidth />
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom>
              CicloProductivo
            </Typography>
            <TextField source="CicloProductivo" fullWidth />
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom>
              TipoProductivo
            </Typography>
            <TextField source="TipoProductivo" fullWidth />
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom>
              TipoCampo
            </Typography>
            <TextField source="TipoCampo" fullWidth />
          </Box>
        </div>
      </Box>

      <hr />
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
        Mocollo
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridAutoFlow: "column",
          gap: "45%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <Box>
            <Typography variant="h6" gutterBottom>
              Mocollo1
            </Typography>
            <TextField source="Mocollo1" fullWidth />
          </Box>
        </div>
        <div>
          <Box>
            <Typography variant="h6" gutterBottom>
              Mocollo2
            </Typography>
            <TextField source="Mocollo2" fullWidth />
          </Box>
        </div>
      </Box>

      <hr />
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
        Ligula
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridAutoFlow: "column",
          gap: "32%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <Box>
            <Typography variant="h6" gutterBottom>
              ConsistenciaLigula
            </Typography>
            <TextField source="ConsistenciaLigula" fullWidth />
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom>
              FormaLigula
            </Typography>
            <TextField source="FormaLigula" fullWidth />
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom>
              Tamano
            </Typography>
            <TextField source="Tamano" fullWidth />
          </Box>
        </div>
        <div>
          <Box>
            <Typography variant="h6" gutterBottom>
              OtrasCaracteristicasLigula
            </Typography>
            <TextField source="OtrasCaracteristicasLigula" fullWidth />
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom>
              ColorLigula
            </Typography>
            <TextField source="ColorLigula" fullWidth />
          </Box>
        </div>
      </Box>

      <hr />
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
        Lamina
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridAutoFlow: "column",
          gap: "32%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <Box>
            <Typography variant="h6" gutterBottom>
              FormaLamina
            </Typography>
            <TextField source="FormaLamina" fullWidth />
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom>
              Canaliculada
            </Typography>
            <TextField source="Canaliculada" fullWidth />
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom>
              TipoLamina
            </Typography>
            <TextField source="TipoLamina" fullWidth />
          </Box>
        </div>
        <div>
          <Box>
            <Typography variant="h6" gutterBottom>
              Apice
            </Typography>
            <TextField source="Apice" fullWidth />
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom>
              NervaduraCentralMarcada
            </Typography>
            <TextField source="NervaduraCentralMarcada" fullWidth />
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom>
              Observaciones
            </Typography>
            <TextField source="Observaciones" fullWidth />
          </Box>
        </div>
      </Box>

      <hr />
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
        Pelos
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridAutoFlow: "column",
          gap: "20%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <Box>
            <Typography variant="h6" gutterBottom>
              Pelos
            </Typography>
            <TextField source="Pelos" fullWidth />
          </Box>
        </div>
        <div>
          <Box>
            <Typography variant="h6" gutterBottom>
              UbicacionPelos
            </Typography>
            <TextField source="UbicacionPelos" fullWidth />
          </Box>
        </div>
        <div>
          <Box>
            <Typography variant="h6" gutterBottom>
              Observacion
            </Typography>
            <TextField source="Observacion" fullWidth />
          </Box>
        </div>
      </Box>

      <hr />
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
        Previsualización
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridAutoFlow: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Imagen
        </Typography>
        <ImageField source="Imagen" />
      </Box>
    </SimpleShowLayout>
  </Show>
);

export default PostShow;
