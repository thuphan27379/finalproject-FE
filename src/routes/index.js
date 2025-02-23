import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import AdminPage from '../pages/AdminPage'; // Make sure this points to the updated AdminPage
import Projects from '../pages/Projects';
import Aboutus from '../pages/AboutUs';
import Domains from '../pages/Domains';
import Startup from '../pages/Startup';

import AuthRequire from './AuthRequire';
import HomeLayout from '../layouts/HomeLayout';
import BlankLayout from '../layouts/BlankLayout';
import AdminLayout from '../layouts/AdminLayout';

import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import NotFoundPage from '../pages/NotFoundPage';
import BlogPage from '../pages/BlogPage';
import AccountPage from '../pages/AccountPage';
import UserProfilePage from '../pages/UserProfilePage';
import Group from '../features/group/Group'; // /group/:groupId
import Contact from '../pages/Contact';
import AdminDashboard from '../pages/AdminDashboard';

// INDEX OF ALL ROUTES = connect all layouts & pages together
function Router() {
  return (
    <>
      <Routes>
        {/* public */}
        {/* company */}
        <Route element={<HomeLayout />}>
          <Route index path="/" element={<HomePage />} />
          {/* about */}
          <Route path="/about" element={<Aboutus />} />
          {/* project */}
          <Route path="/project" element={<Projects />} />
          {/* startup */}
          <Route path="/startup" element={<Startup />} />
          {/* domain */}
          <Route path="/domain" element={<Domains />} />
          {/* contact */}
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* login required */}
        {/* blog */}
        <Route path="/" element={<HomeLayout />}>
          <Route
            path="/blog"
            element={
              <AuthRequire>
                <BlogPage />
              </AuthRequire>
            }
          />

          <Route
            path="/user/:userId"
            element={
              <AuthRequire>
                <UserProfilePage />
              </AuthRequire>
            }
          />

          <Route
            path="/account" // login
            element={
              <AuthRequire>
                <AccountPage />
              </AuthRequire>
            }
          />

          <Route
            path="/group/:groupId" // Group.js
            element={
              <AuthRequire>
                <Group />
              </AuthRequire>
            }
          />
        </Route>

        {/* admin management */}
        <Route path="/" element={<AdminLayout />}>
          <Route
            path="/admin/*"
            element={
              <AuthRequire>
                <AdminPage />
              </AuthRequire>
            }
          />

          {/* <Route
            path="/admin/dashboard"
            element={
              <AuthRequire requiredRole="admin">
                <AdminDashboard />
              </AuthRequire>
            }
          /> */}
        </Route>

        {/* login/signup */}
        <Route path="/" element={<BlankLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default Router;
