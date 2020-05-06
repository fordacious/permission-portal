import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/core/Login';
import NavBar from './components/core/NavBar';
import Footer from './components/core/Footer';

//admin components
import AdminDashboard from './components/user/AdminDashboard';
import EventLogs from './components/user/EventLogs';
import Settings from './components/user/Settings';

//private/admin routes
import AdminRoute from './components/AdminRoute';
import AccountBranding from './components/user/AccountBranding';

const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Login} />
        <AdminRoute path='/admin' exact component={AdminDashboard} />
        <AdminRoute path='/admin/branding' exact component={AccountBranding} />
        <AdminRoute path='/admin/eventlogs' exact component={EventLogs} />
        <AdminRoute path='/admin/settings' exact component={Settings} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
