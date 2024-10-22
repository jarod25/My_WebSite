// src/Admin/AdminDashboard.tsx
import React from 'react';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

const dataProvider = simpleRestProvider('http://localhost:5000/api');

export const AdminDashboard = () => (
    <Admin dataProvider={dataProvider}>

    </Admin>
);
