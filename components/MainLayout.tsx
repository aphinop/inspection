"use client";
import React, { ReactNode, useContext } from "react";
import MainHeader from "./MainHeader";
import { MenuContext } from "@/context/MenuContext";

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const { open } = useContext(MenuContext);

    return (
        <div className="w-screen min-h-screen">
            <MainHeader>
                <div className="flex justify-start items-start">
                    <main className="flex-1">

                        <div className="p-10">
                            <div>
                                <h1>Applications</h1>
                                <div className="divider"></div> 
                            </div>
                            {children}
                        </div>
                    </main>
                </div>
            </MainHeader>
        </div>
    );
};

export default MainLayout;
