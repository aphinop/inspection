"use client";
import { MenuContext } from "@/context/MenuContext";
import React, { ReactNode, useContext } from "react";
import { FaBars } from "react-icons/fa"
import { AiOutlineHome, AiOutlineAreaChart } from "react-icons/ai";
import { FcInspection } from "react-icons/fc";
import { TbPackages } from "react-icons/tb";
import { IoMdColorPalette } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa";
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import Link from "next/link";

interface MainHeaderProps {
    children: ReactNode;
}


const MainHeader: React.FC<MainHeaderProps> = ({ children }) => {
    const { toggle } = useContext(MenuContext);
    useEffect(() => {
        themeChange(false)
        // 👆 false parameter is required for react project
    }, [])

    return (
        <div>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar bg-base-300">
                        <div className="flex-none">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        {/* Logo */}
                        <div className="flex-1 px-2 mx-2">
                            <div className="object-contain w-16 h-9">
                                <img src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png" alt="Brand" />
                            </div>
                        </div>
                        {/* Top Mobile Menu */}
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                                {/* <li>
                                <details>
                                    <summary><IoMdColorPalette/> Theme</summary>
                                    <ul className="p-2">
                                        <li data-set-theme=""><a>Default</a></li>
                                        <li data-set-theme="light"><a>Light</a></li>
                                        <li data-set-theme="dark"><a>Drak</a></li>
                                        <li data-set-theme="luxury"><a>Luxury</a></li>
                                        <li data-set-theme="valentine"><a>Valentine</a></li>
                                        <li data-set-theme="cmyk"><a>CMYK</a></li>
                                        <li data-set-theme="business"><a>Business</a></li>
                                    </ul>
                                </details>
                            </li> */}
                            </ul>
                        </div>
                        {/* Top Web Menu */}
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                                <li><a>Link</a></li>
                                <li>
                                    <details>
                                        <summary>
                                            Parent
                                        </summary>
                                        <ul className="p-2 bg-base-100 z-50">
                                            <li><Link href="/" data-set-theme="">Default</Link></li>
                                            <li><Link href="/" data-set-theme="light">Light</Link></li>
                                            <li><Link href="/" data-set-theme="dark">Drak</Link></li>
                                            <li><Link href="/" data-set-theme="luxury">Luxury</Link></li>
                                            <li><Link href="/" data-set-theme="valentine">Valentine</Link></li>
                                            <li><Link href="/" data-set-theme="cmyk">CMYK</Link></li>
                                            <li><Link href="/" data-set-theme="business">Business</Link></li>
                                        </ul>
                                    </details>
                                </li>
                                {/* <li>
                                        <div className="dropdown dropdown-end">
                                            <label tabIndex={0}>
                                                <details>
                                                    <summary><IoMdColorPalette /> Theme</summary>
                                                </details>
                                            </label>
                                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                                <li data-set-theme=""><a>Default</a></li>
                                                <li data-set-theme="light"><a>Light</a></li>
                                                <li data-set-theme="dark"><a>Drak</a></li>
                                                <li data-set-theme="luxury"><a>Luxury</a></li>
                                                <li data-set-theme="valentine"><a>Valentine</a></li>
                                                <li data-set-theme="cmyk"><a>CMYK</a></li>
                                                <li data-set-theme="business"><a>Business</a></li>
                                            </ul>
                                        </div>
                                </li> */}
                            </ul>
                        </div>


                        {/* Avatar */}
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="http://daisyui.com/tailwind-css-component-profile-1@40w.png" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* Page content here */}
                    {children}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>

                    <ul className="menu p-4 w-80 min-h-full bg-base-200">
                        <li>
                            <Link href="/">
                                <AiOutlineHome className="mr-2" />
                                Home
                            </Link>
                        </li>
                        <li className="menu-title">APPLICATIONS</li>


                        <li>
                            <Link href="/dashboard">
                                <AiOutlineAreaChart className="mr-2" />
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link href="/inspection">
                                <FcInspection className="mr-2" />
                                <h3 className="flex-1">Inspection</h3>
                                {/* <FaAngleRight /> */}
                            </Link>
                        </li>
                        <li>
                            <a>
                                <TbPackages className="mr-2" />
                                <h3 className="flex-1">Package</h3>
                                {/* <FaAngleRight /> */}
                            </a>
                        </li>
                    </ul>


                </div>
            </div>
        </div>

    );
};


export default MainHeader;