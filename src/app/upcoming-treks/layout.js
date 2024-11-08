'use client';
import { useParams } from 'next/navigation';
import { Header } from '../components/header/Header';

const Layout = ({ children }) => {
    const { id } = useParams();
    return (
        <div>
            <Header 
                background="/header.png" 
                title={id?id:"Upcoming Treks"}/>
            <main>
                {children}
            </main>
        </div>
    );
};

export default Layout;