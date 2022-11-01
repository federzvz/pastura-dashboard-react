import * as React from "react";
import { 
    TopToolbar,
    FilterButton,
    CreateButton,
    ExportButton,
    Button,
    TextInput,
    FilterForm,
    ListBase,
    Pagination,
    List, 
    Datagrid, 
    TextField, 
    ShowButton
} from 'react-admin';
import { Stack } from '@mui/material';
import IconEvent from '@mui/icons-material/Event';

const postFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
    <TextInput label="Title" source="UbicacionPelos" defaultValue="Hello, World!" />,
];

const ListActions = (props) => (
    <TopToolbar>
        {/* <FilterButton filters={postFilters}/> */}
        <CreateButton/>
        <ExportButton/>
        {/* Add your custom actions */}
        <Button
            onClick={() => { alert('Your custom action'); }}
            label="Show calendar"
        >
            <IconEvent/>
        </Button>
    </TopToolbar>
);

const ListToolbar = () => (
    <Stack direction="row" justifyContent="space-between">
        <FilterForm filters={postFilters} />
        <div>
            <FilterButton filters={postFilters} />
            <CreateButton />
        </div>
    </Stack>
)

const PasturasList = (props) => {
    return (
    <List {...props}>
        <ListToolbar />
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
            <TextField source="UbicacionPelos" />
            <TextField source="Observacion" />
            <TextField source="ObservacionesGenerales" />
            <TextField source="CicloVida" />
            <TextField source="CicloProductivo" />
            <TextField source="TipoProductivo" />
            <TextField source="TipoCampo" />
            <ShowButton/>
        </Datagrid>
    </List>
    )
};

export default PasturasList;


        