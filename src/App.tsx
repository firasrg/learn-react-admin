import {
  Admin,
  Resource,
  EditGuesser,
  ShowGuesser,
  ListGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import {UserList} from "./components/users";
import {PostList} from "./components/posts";

export const App = () => (<Admin dataProvider={dataProvider}>
  <Resource name="users" list={UserList} recordRepresentation="name" show={ShowGuesser}/>
  <Resource name="posts" list={PostList} />
</Admin>);
