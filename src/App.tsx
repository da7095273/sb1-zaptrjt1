import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import DetailPage from './pages/DetailPage';
import LoginPage from './pages/LoginPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import HelpPage from './pages/HelpPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          {/* 登录页面不显示 Header 和 Footer */}
          <Route path="/login" element={<LoginPage />} />
          
          {/* 其他页面显示完整布局 */}
          <Route path="/*" element={
            <>
              <Header />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/categories" element={<CategoryPage />} />
                  <Route path="/category/:categoryId" element={<CategoryPage />} />
                  <Route path="/photo/:id" element={<DetailPage />} />
                  <Route path="/latest" element={<CategoryPage />} />
                  <Route path="/popular" element={<CategoryPage />} />
                  <Route path="/search" element={<CategoryPage />} />
                  <Route path="/favorites" element={<CategoryPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  <Route path="/help" element={<HelpPage />} />
                </Routes>
              </main>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;