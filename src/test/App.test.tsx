import { describe, it, expect } from "vitest"; import { render, screen } from "@testing-library/react"; import { MemoryRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar"; import TestSuitesPage from "../pages/TestSuitesPage"; import RubricsPage from "../pages/RubricsPage";
import ResultsPage from "../pages/ResultsPage"; import RegressionsPage from "../pages/RegressionsPage"; import SettingsPage from "../pages/SettingsPage";
function wrap(ui: React.ReactElement) { return render(<MemoryRouter>{ui}</MemoryRouter>); }
describe("Sidebar", () => { it("renders nav items", () => { wrap(<Sidebar/>); expect(screen.getByText("AI Eval Suite")).toBeInTheDocument(); }); });
describe("Pages", () => {
  it("TestSuitesPage renders", () => { wrap(<TestSuitesPage/>); expect(screen.getByText("Test Suites")).toBeInTheDocument(); });
  it("RubricsPage renders", () => { wrap(<RubricsPage/>); expect(screen.getByText("Scoring Rubrics")).toBeInTheDocument(); });
  it("ResultsPage renders", () => { wrap(<ResultsPage/>); expect(screen.getByText("Failed Examples")).toBeInTheDocument(); });
  it("RegressionsPage renders", () => { wrap(<RegressionsPage/>); expect(screen.getByText("Regression Tracking")).toBeInTheDocument(); });
  it("SettingsPage renders", () => { wrap(<SettingsPage/>); expect(screen.getByText("LLM-as-a-Judge Configuration")).toBeInTheDocument(); });
});
