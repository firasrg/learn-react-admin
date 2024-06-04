import { Admin, Resource } from "react-admin";
import { UserList } from "./pages/users";
import UserIcon from "@mui/icons-material/Group";
import { Dashboard } from "./pages/dashboard";
import { dataProvider } from "./providers/dataProvider";
import { authProvider } from "./providers/authProvider";
import { UserShow } from "./pages/userShow";

export const App = () => (
    <Admin dataProvider={dataProvider} authProvider={authProvider} dashboard={Dashboard}>
        <Resource
            name="users"
            options={{ label: "Users" }}
            list={UserList}
            recordRepresentation="name"
            show={UserShow}
            icon={UserIcon}
        />
    </Admin>
);
