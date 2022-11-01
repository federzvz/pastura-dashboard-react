// in src/StoreAdmin.js
import { Admin, Resource } from 'react-admin';
import PasturasList2 from "./components/PasturasList2";
import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider("http://localhost:1234/pasturas");

export const StoreAdmin = () => (
    <Admin dataProvider={dataProvider}>
        <Resource 
        name="pasturas" 
        list={PasturasList2}
        
        />
    </Admin>
);