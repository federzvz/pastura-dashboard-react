import { Menu } from 'react-admin';
import BookIcon from '@mui/icons-material/Book';
// import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PeopleIcon from '@mui/icons-material/People';
// import LabelIcon from '@mui/icons-material/Label';

export const MyMenu = () => (
    <Menu>
        {/* <Menu.DashboardItem /> */}
        <Menu.Item to="/pasturas" primaryText="Pasturas" leftIcon={<BookIcon />}/>
        <Menu.Item to="/admin/" primaryText="Administrador" leftIcon={<PeopleIcon />}/>
    </Menu>
);