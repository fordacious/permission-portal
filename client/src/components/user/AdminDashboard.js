import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div>
      <h1>Manage Teams</h1>
      <button>Add Member</button>
      <button>Add Team</button>
      <Link to='/admin/settings'>
        <button>Settings</button>
      </Link>
      <Link to='/admin/branding'>
        <button>Account Branding</button>
      </Link>
      <Link to='/admin/eventlogs'>
        <button>Event Logs</button>
      </Link>
    </div>
  );
};
export default AdminDashboard;
