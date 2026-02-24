import { Settings } from "lucide-react";
export default function SettingsPage() {
  return (<div style={{padding:"var(--space-8)",maxWidth:600}}>
    <h1 style={{fontSize:"var(--font-size-2xl)",fontWeight:700,marginBottom:"var(--space-6)"}}>Settings</h1>
    <div className="card" style={{padding:"var(--space-6)"}}>
      <h3 style={{fontSize:"var(--font-size-base)",fontWeight:600,marginBottom:"var(--space-4)"}}>LLM-as-a-Judge Configuration</h3>
      <div style={{display:"flex",flexDirection:"column",gap:"var(--space-4)"}}>
        <div><label style={{fontSize:"12px",fontWeight:600,marginBottom:4,display:"block"}}>Evaluator Model</label><select className="textarea" style={{minHeight:40}}><option>gpt-4o (Recommended)</option><option>claude-3-opus</option></select></div>
        <div><label style={{fontSize:"12px",fontWeight:600,marginBottom:4,display:"block"}}>OpenAI API Key for Evaluator</label><input type="password" placeholder="sk-..." className="input" /></div>
        <button className="btn btn-primary" style={{alignSelf:"flex-start",marginTop:8}}>Save Settings</button>
      </div>
    </div>
  </div>);
}
