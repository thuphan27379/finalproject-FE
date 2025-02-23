import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';

import AlertMsg from '../components/AlertMsg';
import HomeHeader from './HomeHeader';
import HomeFooter from './HomeFooter';

//
function AdminLayout() {
  return (
    <>
      <Container
        sx={{
          minWidth: 'unset!important',
          maxWidth: 'unset!important',
          marginX: 'auto',
          marginY: 'auto',
        }}
      >
        <HomeHeader />

        <AlertMsg />

        <Outlet />

        <Box sx={{ flexGrow: 1 }} />

        <HomeFooter sx={{ position: 'fixed', maxHeight: '50px' }} />
      </Container>
    </>
  );
}

export default AdminLayout;
