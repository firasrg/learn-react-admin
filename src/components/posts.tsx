import {List, Datagrid, TextField, ReferenceField, EditButton} from "react-admin";

export const PostList = () => (
    <List>
        <Datagrid>
            <ReferenceField source="userId" reference="users" link="show" />
            <TextField source="id" />
            <TextField source="title" />
            <EditButton />
        </Datagrid>
    </List>
);