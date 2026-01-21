import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { SearchProvider } from './contexts/SearchContext';
import { Navbar } from './shared/layout/Navbar';
import { Footer } from './shared/layout/Footer';
import { PageContainer } from './shared/layout/PageContainer';
import { Home } from './pages/Home';
import { Category } from './pages/Category';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';

function AppRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageContainer>
              <Home />
            </PageContainer>
          }
        />
        <Route
          path="/category/:slug"
          element={
            <PageContainer>
              <Category />
            </PageContainer>
          }
        />
        <Route
          path="/about"
          element={
            <PageContainer>
              <About />
            </PageContainer>
          }
        />
        <Route
          path="*"
          element={
            <PageContainer>
              <NotFound />
            </PageContainer>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <SearchProvider>
        <div className="flex min-h-screen flex-col bg-white dark:bg-black transition-colors duration-300">
          <Navbar />
          <main className="flex-1">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </SearchProvider>
    </BrowserRouter>
  );
}

export default App;
