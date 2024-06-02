import {Edit, ReferenceInput, SimpleForm, TextInput} from "react-admin";
import {PostTitle} from "./PostTitle";

export const PostEdit = () => (
    <Edit title={<PostTitle />}>
        <SimpleForm>
            <TextInput source="id" InputProps={{disabled: true}} />
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="title" />
            <TextInput source="body" multiline rows={5} />
        </SimpleForm>
    </Edit>
);
