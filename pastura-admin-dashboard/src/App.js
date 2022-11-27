// in src/App.js
import * as React from "react";
import { Create, Admin, Resource, Layout } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import simpleRestProvider from "ra-data-simple-rest";
import lb4Provider from "react-admin-lb4";
import PasturasList from "./components/PasturasList";
import PasturasCreate from "./components/PasturasCreate";
import PasturasEdit from "./components/PasturasEdit";
import authProvider from './components/authProvider.js';
// import UserIcon from '@material-ui/icons/Group';
// import MyLoginPage from "./components/MyLoginPage"; 
import { MyMenu } from './MyMenu';
import { MyAppBar } from './MyAppBar';
import PasturasShow from "./components/PasturaShow";
import { ConstructionOutlined } from "@mui/icons-material";
import MyLoginPage from './MyLoginPage';

const dataProvider = jsonServerProvider("http://localhost:1234/pasturas");

const dataProviderWrapped = {
  ...dataProvider, // <- Your data provider
  createMany: async (resource, params) => {
    const items = params.data;
    for(const pastura of items){
      const item = {
        data : pastura
      };
      const result = await dataProvider.create("pasturas", item);
    }
    // Handle create many here
  },
  updateMany: async (resource, params) => {
    const items = params.data;
    const idsToUpdate = params.ids;
    // Handle update many here
  }
}

const MyLayout = (props) => <Layout {...props} appBar={MyAppBar} menu={MyMenu}/>;

const App = () => (
  <Admin loginPage={MyLoginPage} basename="/admin" /*loginPage={MyLoginPage}*/ authProvider={authProvider} dataProvider={dataProviderWrapped} layout={MyLayout} requireAuth>
    <Resource
      name="pasturas"
      list={PasturasList}
      create={PasturasCreate}
      edit={PasturasEdit}
      show={PasturasShow}
    />
    {/* <Resource name="pasturas" list={PasturasList} /> */}
  </Admin>
);

export default App;
