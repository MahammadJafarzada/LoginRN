import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Register from './screens/Register';

export default function App() {
    return (
        <>
            <StatusBar style="dark" />
            <Register />
        </>
    );
}
