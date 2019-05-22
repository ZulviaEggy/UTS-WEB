import React from 'react';
import ReactDOM from 'react-dom';
import './custom.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const items = [
    {
        name : 'Apel',
        color :'Merah',
        img : 'Merah.jpg'
    },
    {
        name : 'Jeruk',
        color : 'Kuning',
        img : 'Kuning.jpg'
    },
    {
        name : 'Apel Hijau',
        color : 'Hijau',
        img : 'Hijau.jpg'
    } ,
    {
        name : 'Anggur',
        color : 'Biru',
        img : 'Biru.jpg'
    },
    {
        name : 'Calculator',
        color : 'grey',
        img : ''
    },
    {
        name : 'Profile',
        color : 'Ungu',
        img : ''
    },
    {
        name : 'Main',
        color : 'Pink',
        img : ''
    }
    ];

ReactDOM.render(<App items={items}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
