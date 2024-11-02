import { Header } from '../components/header/Header';

const Layout = ({ children }) => {
    return (
        <div>
            <Header 
                background="/header.png" 
                title="Past Treks"/>
            <main>
                {children}
            </main>
        </div>
    );
};

export default Layout;