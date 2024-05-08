import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function MainLayout() {
  return (
      <div className="h-auto min-h-svh flex flex-col relative">
        <Header />
        <main className="flex-1">
            <Outlet /> {/* This is where the child routes will be rendered */}
        </main>
        <Footer/>
      </div>
  );
}

export default MainLayout;