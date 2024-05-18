import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg"

function Logo({onFocus, isFooter}) {
    const logoClassName = isFooter ? 'logo-footer' : 'logo-header';

    return (
        <div>
            <Link to="/" onFocus={onFocus}>
                <img className={logoClassName} src={logo} alt="Логотип сайта" />
            </Link>
        </div>
    )
}

export default Logo;