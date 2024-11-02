import { Header } from '../components/header/Header';

const Layout = ({ children }) => {
    return (
        <div>
            <Header 
                background="/header.png" 
                title="About Us"/>
            <main>
                {children}
            </main>
        </div>
    );
};

export default Layout;