import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';

function HeaderSection({ title, to, isContextMenu, className }) {
  return (
    <>
      <nav className={className}>
        <RouterNavLink
          to={to}
          className={`sections__nav ${title === 'Акции' ? 'sections__nav-action' : ''} ${
            isContextMenu ? 'sections__nav-context-menu' : ''
          }`}>
          {title}
        </RouterNavLink>
      </nav>
    </>
  );
}
export default HeaderSection;
