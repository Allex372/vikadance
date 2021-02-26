import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import './mainPage.css'


class Navigation extends Component {
    render() {
        return (

            <header>
                <div className={'leftSide'}>
                    <a className={'leftSide_logo'}>
                        LeftSideLogo
                    </a>
                </div>
                <div className={'centerSide'}>
                    <NavLink to={'/books'}>
                        Books
                    </NavLink>
                </div>
                {/*<div className={'centerSide'}>*/}
                {/*    <NavLink to='/books'>*/}
                {/*        Figure*/}
                {/*    </NavLink>*/}
                {/*</div>*/}
                {/*<div className={'centerSide'}>*/}
                {/*    <NavLink to='/books'>*/}
                {/*        History*/}
                {/*    </NavLink>*/}
                {/*</div>*/}
                {/*<div className={'centerSide'}>*/}
                {/*    <NavLink to='/books'>*/}
                {/*        History in the Frame*/}
                {/*    </NavLink>*/}
                {/*</div>*/}
                {/*<div className={'centerSide'}>*/}
                {/*    <NavLink to='/books'>*/}
                {/*        Our team*/}
                {/*    </NavLink>*/}
                {/*</div>*/}
                <div className={'rightSide'}>
                    <p>
                        Language
                    </p>
                    <p>
                        UserLogo
                    </p>
                </div>
            </header>



        );
    }
}

export default Navigation;
