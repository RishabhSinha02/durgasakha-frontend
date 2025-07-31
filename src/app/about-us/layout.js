import { Header } from '../components/header/Header';

const Layout = ({ children }) => {
    return (
        <div>
            <Header 
                background="/carousel/carousel-2.jpeg" 
                title="About Us"/>
            <main>
                {children}
            </main>
        </div>
    );
};

export default Layout;