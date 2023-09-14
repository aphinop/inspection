"use client";
import React, { ReactNode, useContext } from "react";


interface CameraLayoutProps {
    children: ReactNode;
}

const CameraLayout: React.FC<CameraLayoutProps> = ({ children }) => {

    return (
        <div>
            {children}
        </div>
    );
};

export default CameraLayout;
