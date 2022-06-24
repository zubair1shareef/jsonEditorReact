import logo from './logo.svg';
import './App.css';

import {useEffect} from 'react'
import JsonEditor from './components/Editor'
import Login from './components/login'
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';


function App() {

  return (

    <main>
    <Routes >
    <Route path="/" element={<Login/>} />
    <Route path="/editor" element={<JsonEditor/>} exact />
    
    </Routes>
</main>
  
  );
}

export default App;
