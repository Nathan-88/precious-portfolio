import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function MainLayout() {
   useEffect(() => {
  window.scrollTo(0, 0)
}, [])
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