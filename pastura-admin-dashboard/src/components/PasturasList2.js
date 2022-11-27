import * as React from "react";
import { 
    // TopToolbar,
    // FilterButton,
    // CreateButton,
    // ExportButton,
    // Button,
    // TextInput,
    // FilterForm,
    // ListBase,
    // Pagination,
    ImageField, 
    List, 
    Datagrid, 
    TextField, 
    ShowButton
} from 'react-admin';
import { Box, Typography } from "@mui/material";
// import { Stack } from '@mui/material';
// import IconEvent from '@mui/icons-material/Event';
import { PostFilterSidebar } from './PostFilterSidebar';

// const postFilters = [
//     <TextInput label="Search" source="q" alwaysOn />,
//     <TextInput label="Title" source="UbicacionPelos" defaultValue="Hello, World!" />,
// ];

// const ListActions = (props) => (
//     <TopToolbar>
//         {/* <FilterButton filters={postFilters}/> */}
//         <CreateButton/>
//         <ExportButton/>
//         {/* Add your custom actions */}
//         <Button
//             onClick={() => { alert('Your custom action'); }}
//             label="Show calendar"
//         >
//             <IconEvent/>
//         </Button>
//     </TopToolbar>
// );

// const ListToolbar = () => (
//     <Stack direction="row" justifyContent="space-between">
//         <FilterForm filters={postFilters} />
//         <div>
//             <FilterButton filters={postFilters} />
//             <CreateButton />
//         </div>
//     </Stack>
// )

const Empty = (props) => (
    <Box 
        sx={{
            flex: "1",
            textAlign : "center",
            marginTop: "5rem"
        }}
    >
        {/* <ImageSearchIcon viewBox="0 0 24 24" /> */}
        {/* <img 
        

        </img> */}
        <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium RaEmpty-icon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="InboxIcon"
            style={{
                height: "9em",
                width: "9em"
            }}
        ><path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z" ></path> </svg>
        <Typography variant="h6" gutterBottom>
            No hay Pasturas ingresadas
        </Typography>
    </Box>
  );


const PasturasList = (props) => {
    return (
    <List aside={<PostFilterSidebar />} {...props} empty={<Empty />} >
        {/* <ListToolbar /> */}
        <Datagrid>
            <ImageField source="Imagen" title="Imagen" 
                sx={{ '& img': { maxWidth: 100, maxHeight: 100, objectFit: 'contain', borderRadius: '50%' } }}
            />
            <TextField source="Especie" />
            <TextField source="Mocollo1" />
            <TextField source="Mocollo2" />
            <TextField source="CicloVida" />
            <TextField source="TipoCampo" />
            {/* <TextField source="id" />
            <TextField source="Familia" />
            <TextField source="TipoVegetativo" />
            <TextField source="RizomaEngrosado" />
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
            <TextField source="Pelos" />
            <TextField source="UbicacionPelos" />
            <TextField source="Observacion" />
            <TextField source="ObservacionesGenerales" />
            <TextField source="CicloProductivo" />
            <TextField source="TipoProductivo" /> */}
            <ShowButton/>
        </Datagrid>
    </List>
    )
};

export default PasturasList;


        