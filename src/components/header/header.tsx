"use client"

import { FORGET_PASSWORD_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from "@/app/_lib/constants"
import { usePathname } from "next/navigation"
import styles from './header.module.scss'
import ChefHatIcon from '@/assets/icons/chef-hat.svg'
import { ROOT_ROUTE } from "@/app/_lib/constants"
import menuIcon from '@/assets/icons/menu.svg'
import Link from "next/link"
import { useState } from "react"
import SideBar from "../sidebar/sidebar"

type HeaderProps = {
    props?: {}
}
const headerRoutes = [
    {
        key: 'Login',
        route: LOGIN_ROUTE,
    },
    {
        key: 'Register',
        route: REGISTER_ROUTE,
    }
]

const routesWithoutHeader: string[] = [FORGET_PASSWORD_ROUTE,  LOGIN_ROUTE, REGISTER_ROUTE]

export default function Header(props: HeaderProps) {
    
    const pathname = usePathname()
    const [sideBarOpen, setSideBarOpen] = useState<boolean>(false)

    const shouldHeaderExists =  pathname && !routesWithoutHeader.includes(pathname)

    const openSideBar = () => setSideBarOpen(true)
    const closeSideBar = () => setSideBarOpen(false)

    const headerLogo = () => {
        return (
            <Link className={styles['logo-container']} href={ROOT_ROUTE}>
                <img className={styles['icon']} src={ChefHatIcon.src} alt="chef-logo"/>
                <span className={styles['logo-text']}>uChef</span>
            </Link>
        )
    }
    if(!shouldHeaderExists) {
        return <></>
    }

    return (
        <>
            <header className={styles['header']}>
                <button className={styles['menu']} onClick={openSideBar}>
                    <img className={styles['menu-icon']} src={menuIcon.src} alt="menu"/>
                </button>
                {headerLogo()}

            </header>
            <SideBar isOpen={sideBarOpen} closeSideBar={closeSideBar} routes={headerRoutes}/>
        </>
    )
}