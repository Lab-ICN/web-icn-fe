import Footer from "@/components/partials/Footer";
import Navbar from "@/components/partials/Navbar";
import { ReactNode } from "react";
const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default MainLayout;