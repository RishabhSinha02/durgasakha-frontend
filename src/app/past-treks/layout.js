"use client";
import { useParams } from 'next/navigation';
import { Header } from '../components/header/Header';

const Layout = ({ children }) => {
    const { id } = useParams();
    return (
        <div>
            <Header 
                background="/header.png" 
                title="Past Treks"/>
            <main className='p-10 pb-6 pt-6 md:p-16 md:pb-12 md:pt-12 sm:p-10 sm:pb-6 sm:pt-6 space-y-10'>
                {children}
            </main>
        </div>
    );
};

export default Layout;