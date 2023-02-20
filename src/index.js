import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Root, { loader as rootLoader, action as rootAction } from './routes/Root';
import ErrorPage from './error-page';
import Contact, { loader as contactLoader, action as contactAction} from './routes/Contact';
import EditContact, { action as editAction} from './routes/EditContact';
import { action as destroyAction } from './routes/Destroy'
import Index from './routes/Index';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<Root />}
      errorElement={<ErrorPage />}
      loader={rootLoader}
      action={rootAction}
    >
      <Route
        errorElement={<ErrorPage />}
      >
        <Route index element={<Index />}></Route>
        <Route
          path='contacts/:contactId'
          element={<Contact />}
          loader={contactLoader}
          action={contactAction}
        ></Route>
        <Route
          path='contacts/:contactId/edit'
          element={<EditContact />}
          loader={contactLoader}
          action={editAction}
        ></Route>
        <Route
          path='contacts/:contactId/destroy'
          action={destroyAction}
        ></Route>
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
