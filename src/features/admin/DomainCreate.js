import React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  TextField,
  BooleanInput,
  DateInput,
} from 'react-admin';

const DomainCreate = (props) => (
  <Create {...props} title="Create domain">
    <SimpleForm>
      <TextField source="name" />
      <TextField source="topLevel" />
      <TextField source="description" />
      <TextField source="ideas" />
      <TextField source="price" />
      <TextField source="links" />
      <BooleanInput source="renew" />
      <BooleanInput source="isProject" label="For Project" />
      <BooleanInput source="isStartup" label="For Startup" />
      <BooleanInput source="isSale" label="For Sale" />
    </SimpleForm>
  </Create>
);

export default DomainCreate;
