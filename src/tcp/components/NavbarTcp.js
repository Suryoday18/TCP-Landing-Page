import React from 'react'
import { PrimaryNav, MenuLink, Menu, Hamburger } from './NavElements';
const Navbar = () => {
  return (
    <>
      <PrimaryNav>
        <Hamburger />
        <Menu>
          <MenuLink to="/planning_reg" activeStyle={true}>
            Planning Regulations
          </MenuLink>
          <MenuLink to="/colonies" activeStyle={true}>
            Colonies/Apartments
          </MenuLink>
          <MenuLink to="/blog" activeStyle={true}>
            Notifications/Orders
          </MenuLink>
          <MenuLink to="/blog" activeStyle={true}>
            Media
          </MenuLink>
          <MenuLink to="/blog" activeStyle={true}>
            Act/Rules
          </MenuLink>
          <MenuLink to="/blog" activeStyle={true}>
            Developement Plan
          </MenuLink>
          <MenuLink to="/about" activeStyle={true}>
            About
          </MenuLink>
        </Menu>
      </PrimaryNav>
    </>
  )
}
export default Navbar