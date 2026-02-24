import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TestSuitesPage from "./pages/TestSuitesPage";
import RubricsPage from "./pages/RubricsPage";
import ResultsPage from "./pages/ResultsPage";
import RegressionsPage from "./pages/RegressionsPage";
import SettingsPage from "./pages/SettingsPage";
export default function App() {
  return (<BrowserRouter>
    <div style={{display:"flex"}}>
      <Sidebar />
      <main style={{marginLeft:"var(--sidebar-width)",flex:1,minHeight:"100vh"}}><Routes>
        <Route path="/" element={<TestSuitesPage />} /> <Route path="/rubrics" element={<RubricsPage />} />
        <Route path="/results" element={<ResultsPage />} /> <Route path="/regressions" element={<RegressionsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes></main>
    </div>
  </BrowserRouter>);
}
