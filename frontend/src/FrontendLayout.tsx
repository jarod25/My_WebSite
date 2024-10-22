// src/FrontendLayout.tsx
import React from 'react';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { BackToTop } from './BackToTop/BackToTop';

export const FrontendLayout = ({ children }: { children: React.ReactNode }) => {
    const company: string = "Jarod KOHLER";
    const ownerName: string = "Jarod Kohler";

    return (
        <div>
            <BackToTop />
            <Header company={company} />
            {children}
            <Footer owner={ownerName} />
        </div>
    );
};
