// in src/App.js
import * as React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import simpleRestProvider from "ra-data-simple-rest";
import lb4Provider from "react-admin-lb4";
import PasturasList from "./components/PasturasList";
import PasturasCreate from "./components/PasturasCreate";
import PasturasEdit from "./components/PasturasEdit";
// import { DragAndDrop } from "./components/DragAndDrop.tsx";
const dataProvider = jsonServerProvider("http://localhost:1234/pasturas");

const App = () => (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="pasturas"
        list={PasturasList}
        create={PasturasCreate}
        edit={PasturasEdit}
      />
    </Admin>
);

export default App;
