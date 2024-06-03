import { List, Datagrid, TextField, ReferenceField, EditButton } from "react-admin";
import { PostFilters } from "./post/postFilters";

export const PostList = () => (
    <List filters={PostFilters}>
        <Datagrid>
            <ReferenceField source="userId" reference="users" link="show" />
            <TextField source="id" />
            <TextField source="title" />
            <EditButton />
        </Datagrid>
    </List>
);
