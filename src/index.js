import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import App from './App';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <App />
        </RecoilRoot>
    </React.StrictMode>,
    document.getElementById('root')
);