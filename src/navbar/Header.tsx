import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/login' className={({isActive}) => (isActive ? s.activeLink : "")}>LOGIN</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/newpassword' className={({isActive}) => (isActive ? s.activeLink : "")}>NEW PASSWORD</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/passwordrecovery' className={({isActive}) => (isActive ? s.activeLink : "")}>PASSWORD RECOVERY</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/' className={({isActive}) => (isActive ? s.activeLink : "" )}>PROFILE</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/registration' className={({isActive}) => (isActive ? s.activeLink : "")}>REGISTRATION</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/test' className={({isActive}) => (isActive ? s.activeLink : "")}>TEST</NavLink>
            </div>
        </nav>
    )
}
export default Navbar
