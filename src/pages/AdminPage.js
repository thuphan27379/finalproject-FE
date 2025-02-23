import React from 'react';
import { Route } from 'react-router-dom';
import { Admin, Resource, CustomRoutes } from 'react-admin';
import restProvider from 'ra-data-simple-rest';

import UserList from '../features/admin/UserList';
import { DomainList } from '../features/admin/DomainList';
import DomainCreate from '../features/admin/DomainCreate';
// import DomainEdit from '../features/admin/DomainEdit';
import { DomainEdit } from '../features/admin/DomainList';
import authProvider from '../authProvider';
import dataProvider from '../dataProvider';

// Admin Components
const theme = {
  palette: {
    mode: 'dark',
    background: {
      default: '#000',
    },
  },
};

const AdminPage = () => {
  //
  return (
    <>
      <Admin
        dataProvider={dataProvider}
        authProvider={authProvider}
        theme={theme}
      >
        <Resource
          name="domain"
          list={DomainList}
          edit={DomainEdit}
          create={DomainCreate}
        >
          {/* <Route path="edit/:id" element={<DomainEdit />} /> */}
        </Resource>

        {/* <CustomRoutes>
          <Route path="/edit/:id" element={<DomainEdit />} />
        </CustomRoutes> */}
        <Resource name="users" list={UserList} />
      </Admin>
    </>
  );
};

export default AdminPage;
