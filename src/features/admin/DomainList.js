import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  TextInput,
  NumberField,
  BooleanField,
  EditButton,
  SimpleList,
} from 'react-admin';
import {
  Edit,
  SimpleForm,
  NumberInput,
  BooleanInput,
  Button,
  DateInput,
} from 'react-admin';
import {
  useRecordContext,
  useUpdate,
  useNotify,
  useRefresh,
  useRedirect,
} from 'react-admin';
import { useParams, useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';

// admin management system for domain
const DomainFilter = [<TextInput label="Search" source="q" alwaysOn />];

// edit={DomainEdit} from AdminPage for rowClick="edit"
export const DomainList = (props) => {
  // const { id } = useParams();
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  //
  return (
    <List filters={DomainFilter} {...props} resource="domain">
      {isSmall ? (
        <SimpleList
        // primaryText={(record) => record.name}
        // secondaryText={(record) => record.username}
        // tertiaryText={(record) => record.email}
        />
      ) : (
        <Datagrid rowClick="edit" resource="domain">
          {/* <TextField
            disabled
            source="id"
            label="Domain ID"
            InputProps={{ disabled: true }}
          /> */}
          <TextField source="name" label="Domain Name" />
          <TextField source="topLevel" label="Top-Level" />
          <NumberField source="price" label="Price" />
          <TextField source="renew" label="Renewable" />
          {/* <TextField source="description" label="Description" /> */}
          {/* <TextField source="ideas" label="Ideas" /> */}
          <BooleanField source="isProject" label="For Project" />
          <BooleanField source="isStartup" label="For Startup" />
          <BooleanField source="isSale" label="For Sale" />

          {/* ????????????????????basePath={`/domain/${id}`}????????????????? */}
          <EditButton basePath="/domain" resource="domain" />
          <Button />
        </Datagrid>
      )}
    </List>
  );
};

// handle update button
const ResetViewsButton = () => {
  const record = useRecordContext();
  const [update, { isPending }] = useUpdate();
  const notify = useNotify();

  const handleClick = () => {
    update(
      'domain',
      { id: record.id, data: { views: 0 }, previousData: record },
      {
        onSuccess: () => {
          notify('Views reset');
        },
        onFailure: (error) => notify(`Error: ${error.message}`, 'warning'),
      }
    );
  };

  return (
    <Button onClick={handleClick} disabled={isPending}>
      Reset views
    </Button>
  );
};

// DomainEdit
export const DomainEdit = (props) => {
  // const { id } = useParams();

  const transform = (data) => ({
    ...data,
    // fullName: `${data.firstName} ${data.lastName}`,
  });

  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();

  const onSuccess = () => {
    notify(`Changes saved`);
    redirect('/posts');
    refresh();
  };

  //
  return (
    <Edit
      {...props}
      title="Edit Domain"
      resource="domain"
      transform={transform} //
      mutationOptions={{ onSuccess }}
      redirect="list"
      actions={<DomainEdit />}
      // mutationMode="optimistic" // The mutation is applied locally and the side effects are executed immediately. Then the mutation is passed to the dataProvider. If the dataProvider returns successfully, nothing happens (as the mutation was already applied locally). If the dataProvider returns in error, the page is refreshed and an error notification is shown.
      mutationMode="pessimistic" // The mutation is passed to the dataProvider first. When the dataProvider returns successfully, the mutation is applied locally, and the side effects are executed.
      queryOptions={{ refetchOnReconnect: true }}
    >
      <SimpleForm>
        <TextField
          disabled
          source="id"
          label="Domain ID"
          InputProps={{ disabled: true }}
        />
        <TextInput source="name" label="Domain Name" />
        <TextInput source="topLevel" label="Top-Level" />
        <NumberInput source="price" label="Price" />
        <DateInput source="renew" label="Renewable" />
        <BooleanInput source="isProject" label="For Project" />
        <BooleanInput source="isStartup" label="For Startup" />
        <BooleanInput source="isSale" label="For Sale" />

        <Button type="submit">Save</Button>
      </SimpleForm>
    </Edit>
  );
};

// export default DomainList;
