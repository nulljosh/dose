import { HashRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Dashboard from './pages/Dashboard';
import Journal from './pages/Journal';
import Substances from './pages/Substances';
import SubstanceDetail from './pages/SubstanceDetail';
import Insights from './pages/Insights';

export default function App() {
  return (
    <HashRouter>
      <div style={{ minHeight: '100dvh', background: '#0c1220', color: '#e8e4da' }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/log" element={<Journal />} />
          <Route path="/substances" element={<Substances />} />
          <Route path="/substances/:id" element={<SubstanceDetail />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
        <Nav />
      </div>
    </HashRouter>
  );
}
