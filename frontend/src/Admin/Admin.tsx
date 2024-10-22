import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
// import { PostList, PostEdit, PostCreate } from './Post';

const dataProvider = simpleRestProvider('http://localhost:5000/api');

export const AdminPanel = () => (
    <Admin dataProvider={dataProvider}>
        toto
        {/*<Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />*/}
    </Admin>
);

