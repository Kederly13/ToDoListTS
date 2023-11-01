import { Header } from './components/Header';
import { Footer } from './components/Footer';

type LayoutProps = {
    children: React.ReactNode;
};

export const Layout: React.FC <LayoutProps> = ({ children }) => (
    <>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </>
);