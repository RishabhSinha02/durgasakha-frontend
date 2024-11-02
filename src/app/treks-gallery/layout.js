import { Header } from '../components/header/Header';

const Layout = ({ children }) => {
    return (
        <div>
            <Header 
                background="/header.png" 
                title="Gallery"/>
            <main>
                {children}
            </main>
        </div>
    );
};

export default Layout;