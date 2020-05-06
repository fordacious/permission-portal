import React, { useState } from 'react';

const Settings = () => {
  const [values, setValues] = React.useState({
    profile: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    location: '',
    role: '',
    password: '',
    permissions: [],
  });

  const {
    profile,
    firstName,
    lastName,
    email,
    phoneNumber,
    location,
    role,
    password,
    permissions,
  } = values;

  const settingForm = () => (
    <div>
      <label>
        Profile:
        <input placeholder='profile' type='text' />
      </label>
      <label>
        First Name:
        <input placeholder='firstName' type='text' />
      </label>
      <label>
        Last Name:
        <input placeholder='lastName' type='text' />
      </label>
      <label>
        Email Address:
        <input placeholder='email' type='text' />
      </label>
      <label>
        Phone Number:
        <input placeholder='phoneNumber' type='text' />
      </label>
      <label>
        Location:
        <input placeholder='location' type='text' />
      </label>
      <label>
        Role:
        <input placeholder='role' type='text' />
      </label>
      {/* drop down menu below */}
      <label>
        Account Permissions:
        <input placeholder='permissions' type='text' />
      </label>
      <label>
        Password:
        <input placeholder='permissions' type='text' />
      </label>
    </div>
  );

  return <React.Fragment>{settingForm()}</React.Fragment>;
};
export default Settings;
