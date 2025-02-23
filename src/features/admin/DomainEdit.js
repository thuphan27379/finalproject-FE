import * as React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  TextField,
  DateInput,
  Title,
  SimpleForm,
  TextInput,
  SelectInput,
  EditBase,
  Edit,
  NumberInput,
  BooleanInput,
  useGetOne,
  useUpdate,
  EditContextProvider,
  useEditController,
  useNotify,
  useRedirect,
} from 'react-admin';
import { Button } from '@mui/material';

//
export const DomainEdit = (props) => {
  const notify = useNotify();
  const redirect = useRedirect();

  const onSuccess = () => {
    notify(`Domain updated successfully`); // default message is 'ra.notification.updated'
    redirect('list');
  };

  const { id } = useParams();
  // const { isPending, data } = useGetOne('domain', { id });
  // const [update, { isPending: isSubmitting }] = useUpdate();
  // const navigate = useNavigate();

  // const onSubmit = (data) => {
  //   update(
  //     'domain',
  //     { id, data }, // check with backend
  //     {
  //       onSuccess: () => {
  //         navigate('/domain');
  //       },
  //     }
  //   );
  // };

  // if (isPending) return null;
  const editContext = useEditController();
  if (editContext.isPending) return null;

  return (
    // <EditContextProvider
    //   value={{
    //     record: data,
    //     isPending,
    //     save: onSubmit,
    //     saving: isSubmitting,
    //   }}
    // >

    // <EditContextProvider value={editContext}>
    <Edit
      {...props}
      resource="domain"
      redirect="list"
      actions={<DomainEdit />}
      // mutationMode="optimistic" // The mutation is applied locally and the side effects are executed immediately. Then the mutation is passed to the dataProvider. If the dataProvider returns successfully, nothing happens (as the mutation was already applied locally). If the dataProvider returns in error, the page is refreshed and an error notification is shown.
      mutationMode="pessimistic" // The mutation is passed to the dataProvider first. When the dataProvider returns successfully, the mutation is applied locally, and the side effects are executed.
      queryOptions={{ refetchOnReconnect: true }}
    >
      <Title title="Domain Update" />
      <SimpleForm>
        <TextField
          // disabled
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

        {/* disabled={isSubmitting} */}
        <Button type="submit">Save</Button>
      </SimpleForm>
      {/* </EditContextProvider> */}
    </Edit>
  );
};

export default DomainEdit;
