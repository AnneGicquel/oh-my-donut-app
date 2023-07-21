
import { Outlet } from 'react-router-dom';
import Header from '../partials/header/Header';
import './Home.css';
import Footer from '../partials/footer/Footer';

const Home = () => {
  return (
    <>
      <Header />
        <Outlet />
      <Footer />
    </>
  );
}

export default Home;
