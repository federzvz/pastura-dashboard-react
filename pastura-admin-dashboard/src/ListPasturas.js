import * as React from "react";
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const ListPasturas = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="_id" />
            <TextField source="Familia" />
        </Datagrid>
    </List>
);