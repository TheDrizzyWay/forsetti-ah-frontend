import React from 'react';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'froala-editor/js/froala_editor.pkgd.min';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'font-awesome/css/font-awesome.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';
import Store from './store/configure-store';
import './styles/custom-theme.css';
import { BaseLayout as Routes } from './components/common/BaseLayout';

const store = Store();

ReactDOM.render(
  <Provider store={store}>
    <Routes />
    <ToastContainer
      position='top-center'
      hideProgressBar
    />
  </Provider>,
  document.getElementById('root')
);
