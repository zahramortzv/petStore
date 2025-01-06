import Header from "./Header";
import Footer from "./Footer";
import Navbar from "../components/Navbar";
import MenuBar from "../components/MenuBar";

function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow sm:pl-32 sm:pr-32 pl-4 pr-4">
                <Navbar />
                <MenuBar />
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout