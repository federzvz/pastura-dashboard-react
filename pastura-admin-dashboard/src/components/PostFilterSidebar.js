import { SavedQueriesList, FilterLiveSearch, FilterList, FilterListItem } from 'react-admin';
import { Card, CardContent } from '@mui/material';
import MailIcon from '@mui/icons-material/MailOutline';
import SearchIcon from '@mui/icons-material/Search';
import CategoryIcon from '@mui/icons-material/LocalOffer';

export const PostFilterSidebar = () => (
    <Card sx={{ order: -1, mr: 2, mt: 9, width: 450 }}>
        <CardContent>
            {/* <SavedQueriesList />
            <FilterLiveSearch /> */}
            {/* <FilterList label="Rizoma Engrosado" icon={<MailIcon />}>
                <FilterListItem label="Si" value={{ RizomaEngrosado: true }} />
                <FilterListItem label="No" value={{ RizomaEngrosado: false }} />
            </FilterList> */}
            <FilterList label="Nervadura central marcada" icon={<SearchIcon />}>
                <FilterListItem label="Si" value={{ NervaduraCentralMarcada: true }} />
                <FilterListItem label="No" value={{ NervaduraCentralMarcada: false }} />
            </FilterList>
            <FilterList label="Tipo vegetativo" icon={<SearchIcon />}>
                <FilterListItem label="Cespitoso" value={{ TipoVegetativo: 'Cespitoso' }} />
                <FilterListItem label="Estolonifero" value={{ TipoVegetativo: 'Estolonifero' }} />
                <FilterListItem label="Rizomatozo" value={{ TipoVegetativo: 'Rizomatozo' }} />
                <FilterListItem label="Estolonifero-rizomatozo" value={{ TipoVegetativo: 'Estolonifero-rizomatozo' }} />
            </FilterList>
            <FilterList label="Macollo 1" icon={<SearchIcon />}>
                <FilterListItem label="Semi rollizo" value={{ Mocollo1: 'Semi rollizo' }} />
                <FilterListItem label="Semi Comprimido" value={{ Mocollo1: 'Semi Comprimido' }} />
                <FilterListItem label="Comprimido" value={{ Mocollo1: 'Comprimido' }} />
                <FilterListItem label="Semi Rolliza" value={{ Mocollo1: 'Semi Rolliza' }} />
                <FilterListItem label="Rollizo" value={{ Mocollo1: 'Rollizo' }} />
            </FilterList>
            <FilterList label="Macollo 2" icon={<SearchIcon />}>
                <FilterListItem label="Intravaginal" value={{ Mocollo2: 'Intravaginal' }} />
                <FilterListItem label="Extravaginal" value={{ Mocollo2: 'Extravaginal' }} />
                <FilterListItem label="Extravaginal principalmente" value={{ Mocollo2: 'Extravaginal principalmente' }} />
                <FilterListItem label="Intra o extra" value={{ Mocollo2: 'Intra o extra' }} />
                <FilterListItem label="Intravaginal o Extravaginal" value={{ Mocollo2: 'Intravaginal o Extravaginal' }} />
                <FilterListItem label="Intravaginal o Extravaginal principalmente" value={{ Mocollo2: 'Intravaginal o Extravaginal principalmente' }} />
            </FilterList>
            <FilterList label="Consistencia de la Ligula" icon={<SearchIcon />}>
                <FilterListItem label="Membranacea" value={{ ConsistenciaLigula: 'Membranacea' }} />
                <FilterListItem label="Disuelta en pelos" value={{ ConsistenciaLigula: 'Disuelta en pelos' }} />
                <FilterListItem label="Mixta" value={{ ConsistenciaLigula: 'Mixta' }} />
            </FilterList>
            <FilterList label="Forma de la ligula" icon={<SearchIcon />}>
                <FilterListItem label="Truncada y dientada" value={{ FormaLigula: 'Truncada y dientada' }} />
                <FilterListItem label="Truncada" value={{ FormaLigula: 'Truncada' }} />
                <FilterListItem label="Aguda" value={{ FormaLigula: 'Aguda' }} />
                <FilterListItem label="Redondeada" value={{ FormaLigula: 'Redondeada' }} />
            </FilterList>
            <FilterList label="Forma de la lamina" icon={<SearchIcon />}>
                <FilterListItem label="Linear" value={{ FormaLamina: 'Linear' }} />
                <FilterListItem label="Navicular" value={{ FormaLamina: 'Navicular' }} />
                <FilterListItem label="Linear-Lanceolada" value={{ FormaLamina: 'Linear-Lanceolada' }} />
                <FilterListItem label="Lanceolada" value={{ FormaLamina: 'Lanceolada' }} />
            </FilterList>
            <FilterList label="Tipo de lamina" icon={<SearchIcon />}>
                <FilterListItem label="Plana" value={{ TipoLamina: 'Plana' }} />
                <FilterListItem label="Navicular-Plegada" value={{ TipoLamina: 'Navicular-Plegada' }} />
                <FilterListItem label="Navicular" value={{ TipoLamina: 'Navicular' }} />
                <FilterListItem label="Plegada" value={{ TipoLamina: 'Plegada' }} />
                <FilterListItem label="Navicular a plana" value={{ TipoLamina: 'Navicular a plana' }} />
            </FilterList>
            <FilterList label="Ápice" icon={<SearchIcon />}>
                <FilterListItem label="Agudo" value={{ Apice: 'Agudo' }} />
                <FilterListItem label="Obtuso" value={{ Apice: 'Obtuso' }} />
            </FilterList>
            <FilterList label="Pelos" icon={<SearchIcon />}>
                <FilterListItem label="Glabra" value={{ Pelos: 'Glabra' }} />
                <FilterListItem label="Pubecente" value={{ Pelos: 'Pubecente' }} />
                <FilterListItem label="Glabra o Pubecente" value={{ Pelos: 'Glabra o Pubecente' }} />
                <FilterListItem label="Poco a nada" value={{ Pelos: 'Poco a nada' }} />
            </FilterList>
            <FilterList label="Ciclo de vida" icon={<SearchIcon />}>
                <FilterListItem label="Anual" value={{ CicloVida: 'Anual' }} />
                <FilterListItem label="Perenne" value={{ CicloVida: 'Perenne' }} />
            </FilterList>
            <FilterList label="Ciclo Productivo" icon={<SearchIcon />}>
                <FilterListItem label="Invernal" value={{ CicloProductivo: 'Invernal' }} />
                <FilterListItem label="Estival" value={{ CicloProductivo: 'Estival' }} />
            </FilterList>
            
            
            {/* <FilterList label="Category" icon={<CategoryIcon />}>
                <FilterListItem label="Tests" value={{ category: 'tests' }} />
                <FilterListItem label="News" value={{ category: 'news' }} />
                <FilterListItem label="Deals" value={{ category: 'deals' }} />
                <FilterListItem label="Tutorials" value={{ category: 'tutorials' }} />
            </FilterList> */}
        </CardContent>
    </Card>
);