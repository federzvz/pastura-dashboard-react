import { Menu } from 'react-admin';
import BookIcon from '@mui/icons-material/Book';
// import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
// import LabelIcon from '@mui/icons-material/Label';

export const MyMenu = () => (
    <Menu>
        {/* <Menu.DashboardItem /> */}
        <Menu.Item to="/pasturas" primaryText="Invitado" leftIcon={<PersonIcon />}/>
        <Menu.Item to="/admin/" primaryText="Administrador" leftIcon={<PeopleIcon />}/>
    </Menu>
);