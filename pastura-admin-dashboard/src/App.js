// in src/App.js
import * as React from "react";
import { Admin, Resource, Layout } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import simpleRestProvider from "ra-data-simple-rest";
import lb4Provider from "react-admin-lb4";
import PasturasList from "./components/PasturasList";
import PasturasCreate from "./components/PasturasCreate";
import PasturasEdit from "./components/PasturasEdit";
import authProvider from './components/authProvider.js';
// import UserIcon from '@material-ui/icons/Group';
import MyLoginPage from "./components/MyLoginPage"; 
import { MyMenu } from './MyMenu';
import { MyAppBar } from './MyAppBar';
import PasturasShow from "./components/PasturaShow";

const dataProvider = jsonServerProvider("http://localhost:1234/pasturas");

const MyLayout = (props) => <Layout {...props} appBar={MyAppBar} menu={MyMenu}/>;

const App = () => (
  <Admin basename="/admin"/*loginPage={MyLoginPage}*/ authProvider={authProvider} dataProvider={dataProvider} layout={MyLayout} requireAuth>
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
