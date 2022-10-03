// in src/App.js
import * as React from "react";
import { Admin } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://pastura-node-react.federzvz.repl.co/pasturas/pasturas');

const App = () => <Admin dataProvider={dataProvider} />;

export default App;