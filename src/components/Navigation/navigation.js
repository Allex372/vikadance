import React from 'react';
import {NavLink} from "react-router-dom";
import './nivigation.css'
import logo from "../../img/Logo_DanceEducation.png";

export const Navigation = () =>{
        return (

            <header>
                <div className={'leftSide'}>
                    <NavLink to={'/main'} className={'leftSide_logo'}>
                        <img src={logo}/>
                    </NavLink>
                </div>
                <div className={'centerSide'}>
                    <NavLink to={'/books'}>
                        <div className={'centerTextSmall'}>Books</div>
                    </NavLink>

                    <NavLink to='/Video_lessons'>
                        <div className={'centerTextSmall'}>Video Lessons</div>
                    </NavLink>

                    <NavLink to='/books'>
                        <div className={'centerTextSmall'}>History</div>
                    </NavLink>

                    <NavLink to='/History_in_the_frame'>
                        <div className={'centerTextSmall'}>History in the Frame</div>
                    </NavLink>

                    <NavLink to='/books'>
                        <div className={'centerTextSmall'}>Our team</div>
                    </NavLink>
                </div>
                <div className={'rightSide'}>
                    <p className={'centerTextSmall'}>
                        Language
                    </p>
                    <p>
                        UserLogo
                    </p>
                </div>
            </header>

        );
}

