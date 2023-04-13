import React from 'react';
import ReactDOM from 'react-dom/client';
import { PageCadastro } from './Pages/Cadastro/Cadastro.jsx';
import { KanbanPage } from './Pages/Kanban/Kanban.jsx';
import { Landing } from './Pages/LandindPage/Landing.js';
import { PageLogin } from './Pages/Login/Login.jsx';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { PageReuniao } from './Pages/Reuniao/Reuniao.jsx';
import { PageMenu } from './Pages/Menu/Menu.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route element = {<Landing /> }  path="/" />
      <Route element = { <PageLogin />}  path="/login" />
      <Route element = { <PageCadastro /> }  path="/cadastro" />
      <Route element = { <KanbanPage />}  path='/kanban/:id' />
      <Route element={ <PageReuniao />} path="/reuniao/:id" />
      <Route element={ <PageMenu />} path='/menu/:id' />
    </Routes>
  </BrowserRouter>
);