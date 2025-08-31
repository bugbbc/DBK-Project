import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import TeamDetailPage from './pages/TeamDetailPage';
import IntelligentWritingPage from './pages/IntelligentWritingPage';
import MultimodalCreationPage from './pages/MultimodalCreationPage';
import PolicyInterpretationPage from './pages/FunctionPage/PolicyInterpretationPage';
import ProjectIntroPage from './pages/ProjectIntroPage';
import AgentTechPage from './pages/AgentTechPage';
import TechDemoPage from './pages/TechDemoPage';
import InteractionPage from './pages/InteractionPage';
import FunctionDemoPage from './pages/FunctionDemoPage';
import IntegratedPage from './pages/IntegratedPage';

import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="bg-light-primary dark:bg-dark-primary pt-[60px]">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/team-detail" element={<TeamDetailPage />} />
            <Route path="/intelligent-writing" element={<IntelligentWritingPage />} />
            <Route path="/multimodal-creation" element={<MultimodalCreationPage />} />
            <Route path="/policy-interpretation" element={<PolicyInterpretationPage />} />
            <Route path="/project-intro" element={<ProjectIntroPage />} />
            <Route path="/agent-tech" element={<AgentTechPage />} />
            <Route path="/tech-demo" element={<TechDemoPage />} />
            <Route path="/interaction" element={<InteractionPage />} />
            <Route path="/function-demo" element={<FunctionDemoPage />} />
            <Route path="/integrated" element={<IntegratedPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
