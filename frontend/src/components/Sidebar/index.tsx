import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SideBtnWrap,
    SidebarLink,
    SidebarRoute,

}
    from './SidebarElements'

type MyProps = {
    isOpen?: any;
    toggle?: any;
}

export const Sidebar = (props: MyProps) => {
    console.log('????????', props.isOpen)
    let Container = SidebarContainer(props.isOpen)

    return (
        <>
            <Container>
                <Icon onClick={props.toggle} >
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink href='/library' onClick={props.toggle}>Library</SidebarLink>
                        <SidebarLink href='/counter' onClick={props.toggle}>Counter</SidebarLink>
                        <SidebarLink href='/createquiz' onClick={props.toggle}>Create Quiz</SidebarLink>
                        <SidebarLink href='/signup' onClick={props.toggle}>Sign Up</SidebarLink>
                    </SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRoute href='/sign-in'>Sign In</SidebarRoute>
                    </SideBtnWrap>
                </SidebarWrapper>
            </Container>
        </>
    )
}

export default Sidebar
