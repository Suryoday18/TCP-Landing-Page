import React from 'react';
import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
export const PrimaryNav = styled.nav`
  z-index: 14;
  height: 50px;
  display: flex;
  background: #8b3051;
  justify-content: space-between;
  
`
export const MenuLink = styled(NavLink)`
  color: #fff;
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  padding: 0 1.2rem;
  white-space:nowrap;
  font-size:18px;
  height: 100%;
  font:bold;
 
  &.active {
    color: #000000;
  }
`
export const Hamburger = styled(FaBars)`
  display: none;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.9rem;
    top: 0;
    right: 0;
    position: absolute;
    cursor: pointer;
    transform: translate(-100%, 75%);
  }
`
export const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-left: 100px;
  margin-right:40px
  @media screen and (max-width: 768px) {
    display: none;
  }
`