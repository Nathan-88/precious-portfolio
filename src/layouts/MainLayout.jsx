import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function MainLayout() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (location.state && location.state.target) {
      const section = document.getElementById(location.state.target);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  
  return (
      <div className="h-auto min-h-svh  flex flex-col relative">
        <Header />
        <main className="flex-1 bg-black z-[2]">
            <Outlet /> {/* This is where the child routes will be rendered */}
        </main>
        <Footer/>
      </div>
  );
}

export default MainLayout;