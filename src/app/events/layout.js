import { Header } from '../components/header/Header';

const Layout = ({ children }) => {
    return (
        <div>
            <Header 
                background="/header.png" 
                title="Events"/>
            <main>
                {children}
            </main>
        </div>
    );
};

export default Layout;