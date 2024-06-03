import { Admin, Resource } from "react-admin";
import { UserList } from "./pages/users";
import { PostList } from "./pages/posts";
import { PostEdit } from "./pages/post/postEdit";
import { PostCreate } from "./pages/post/postCreate";
import UserIcon from "@mui/icons-material/Group";
import PostIcon from "@mui/icons-material/Book";
import { Dashboard } from "./pages/dashboard";
import { dataProvider } from "./providers/dataProvider";
import { authProvider } from "./providers/authProvider";
import { UserShow } from "./pages/userShow";

export const App = () => (
    <Admin dataProvider={dataProvider} authProvider={authProvider} dashboard={Dashboard}>
        <Resource name="users" list={UserList} recordRepresentation="name" show={UserShow} icon={UserIcon} />
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    </Admin>
);
