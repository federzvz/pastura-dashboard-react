// in src/StoreAdmin.js
import { Admin, Resource, Layout } from 'react-admin';
import PasturasList2 from "./components/PasturasList2";
import jsonServerProvider from "ra-data-json-server";
import PasturasShow from "./components/PasturaShow";

import { MyMenu } from './MyMenu';
import { MyAppBar } from './MyAppBar';
const MyLayout = (props) => <Layout {...props} appBar={MyAppBar} menu={MyMenu}/>;

const dataProvider = jsonServerProvider("http://localhost:1234/pasturas");

export const User = () => (
    <Admin dataProvider={dataProvider} layout={MyLayout}>
        <Resource 
        name="pasturas" 
        list={PasturasList2}
        show={PasturasShow}
        />
    </Admin>
);