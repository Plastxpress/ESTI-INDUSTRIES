import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileBar from './components/MobileBar';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import IndustriesPage from './pages/IndustriesPage';
import PackagingGuidePage from './pages/PackagingGuidePage';
import CompanyInfoPage from './pages/CompanyInfoPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import { findRoute } from './routes';
import useReveal from './components/useReveal';

function PageBody({ route }) {
  switch (route.page) {
    case 'home':
      return <HomePage />;
    case 'product':
      return <ProductPage product={route.product} />;
    case 'companyInfo':
      return <CompanyInfoPage />;
    case 'guide':
      return <PackagingGuidePage />;
    case 'industries':
      return <IndustriesPage />;
    case 'about':
      return <AboutPage />;
    case 'contact':
      return <ContactPage />;
    default:
      return <NotFoundPage />;
  }
}

export default function App({ path }) {
  const route = findRoute(path);
  useReveal(route.path);

  // Keeps the tab title right in dev (production HTML already has it).
  useEffect(() => {
    document.title = route.title;
  }, [route.title]);

  return (
    // pb-14 on phones/tablets leaves room for the sticky bottom bar.
    <div id="top" className="min-h-screen bg-white text-ink flex flex-col font-sans selection:bg-kraft-400 selection:text-ink pb-14 lg:pb-0">
      <Navbar path={route.path} />
      <main className="flex-grow">
        <PageBody route={route} />
      </main>
      <Footer roomy />
      <MobileBar path={route.path} />
    </div>
  );
}
