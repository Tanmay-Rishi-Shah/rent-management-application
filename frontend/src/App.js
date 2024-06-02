import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import Welcome from './components/Welcome';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={
            <PublicRoute>
              <AdminLogin />
            </PublicRoute>
          } />
          <Route path="/admin_dashboard" element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } />
          <Route path="/" element={<Welcome />} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all route for undefined paths */}
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;