import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SideBtnWrap,
    SidebarLink,
    SidebarRoute
}
    from './SidebarElements'

const Sidebar = () => {
  return (
    <SidebarContainer >
            <Icon onClick={()=>console.log("toggle")}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink href='about' onClick={()=>console.log("toggle")}>About</SidebarLink>
                    <SidebarLink href='discover' onClick={()=>console.log("toggle")}>Discover</SidebarLink>
                    <SidebarLink href='services' onClick={()=>console.log("toggle")}>Services</SidebarLink>
                    <SidebarLink href='singup' onClick={()=>console.log("toggle")}>Sign Up</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute href='/sign-in'>Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
  )
}

export default Sidebar
