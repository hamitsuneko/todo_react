import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import s from './navbar.module.css'

const style = `${s.aaa} navbar-brand`


export default function Navbar() {



    return (
        <nav className="navbar navbar-dark bg-dark justify-content-between">
            <a className={style}>To-Do List</a>
            <a href='https://github.com/yrsolanaratonmi/todov2.git'>
                <img className={s.img} src = 'https://cdn-icons-png.flaticon.com/512/1051/1051377.png' alt = 'mmm' ></img>
            </a>


        </nav>
    );
}