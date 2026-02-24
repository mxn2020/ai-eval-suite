import { Link, useLocation } from "react-router-dom";
import { CheckSquare, FileSignature, BarChart, Settings, TrendingUp } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
export default function Sidebar() {
  const loc = useLocation();
  const links = [
    { to: "/", icon: CheckSquare, label: "Test Suites" },
    { to: "/rubrics", icon: FileSignature, label: "Scoring Rubrics" },
    { to: "/results", icon: BarChart, label: "Run Results" },
    { to: "/regressions", icon: TrendingUp, label: "Regression Tracking" },
    { to: "/settings", icon: Settings, label: "Settings" }
  ];
  return (<aside style={{width:"var(--sidebar-width)",background:"var(--color-bg-primary)",borderRight:"1px solid var(--color-border)",height:"100vh",position:"fixed",display:"flex",flexDirection:"column"}}>
    <div style={{padding:"var(--space-6)",display:"flex",alignItems:"center",gap:"var(--space-3)"}}>
      <div style={{background:"var(--color-accent-primary)",borderRadius:"4px",padding:4}}><CheckSquare size={20} style={{color:"var(--color-text-inverse)"}}/></div>
      <strong style={{fontSize:"1.1rem",fontWeight:700}}>AI Eval Suite</strong>
    </div>
    <nav style={{padding:"0 var(--space-4)",flex:1,display:"flex",flexDirection:"column",gap:"var(--space-1)"}}>
      {links.map(l=><Link key={l.to} to={l.to} style={{display:"flex",alignItems:"center",gap:"var(--space-3)",padding:"var(--space-3)",borderRadius:"var(--radius-sm)",color:loc.pathname===l.to?"var(--color-accent-primary)":"var(--color-text-secondary)",background:loc.pathname===l.to?"var(--color-bg-card)":"transparent",fontWeight:600,fontSize:"var(--font-size-sm)",transition:"all var(--transition-fast)",boxShadow:loc.pathname===l.to?"var(--card-shadow)":"none",border:loc.pathname===l.to?"1px solid var(--color-border)":"1px solid transparent"}}><l.icon size={18}/>{l.label}</Link>)}
    </nav>
    <div style={{padding:"var(--space-4)",display:"flex",justifyContent:"flex-end"}}><ThemeToggle /></div>
  </aside>);
}
