import { TrendingUp, ArrowDown } from "lucide-react";
export default function RegressionsPage() {
  return (<div style={{padding:"var(--space-8)",maxWidth:1000}}>
    <h1 style={{fontSize:"var(--font-size-2xl)",fontWeight:700,marginBottom:"var(--space-6)"}}>Regression Tracking</h1>
    <div className="card" style={{padding:"var(--space-5)"}}>
      <h3 style={{fontSize:"var(--font-size-base)",fontWeight:600,marginBottom:"var(--space-4)"}}>Performance over Time (Prompt v4 vs v5)</h3>
      <div style={{height:200,display:"flex",alignItems:"flex-end",gap:8,paddingBottom:24,borderBottom:"1px solid var(--color-border)",position:"relative"}}>
        {[92, 93, 91, 94, 95, 85].map((h,i)=>(<div key={i} style={{flex:1,height:`${h}%`,background:i===5?"var(--color-error)":"var(--color-accent-primary)",borderRadius:"4px 4px 0 0",opacity:0.9,display:"flex",justifyContent:"center",color:"white",fontSize:"10px",paddingTop:4}}>{h}%</div>))}
        <div style={{position:"absolute",left:0,bottom:0,width:"100%",display:"flex",justifyContent:"space-around",fontSize:"11px",color:"var(--color-text-secondary)",paddingTop:8}}>
          <span>v4.0</span><span>v4.1</span><span>v4.2</span><span>v4.3</span><span>v4.4</span><span style={{color:"var(--color-error)",fontWeight:700}}>v5.0 (New)</span>
        </div>
      </div>
      <div style={{marginTop:"var(--space-4)",display:"flex",alignItems:"flex-start",gap:"var(--space-3)",padding:"var(--space-3)",background:"rgba(220,38,38,0.05)",border:"1px solid rgba(220,38,38,0.2)",borderRadius:"var(--radius-sm)"}}>
        <ArrowDown size={20} style={{color:"var(--color-error)"}}/>
        <div>
          <strong style={{fontSize:"14px",color:"var(--color-error)"}}>Regression Detected in v5.0</strong>
          <p style={{fontSize:"13px",color:"var(--color-text-secondary)",marginTop:4}}>Overall score dropped by 10%. Specifically, the "Tone & Professionalism" rubric failed on 14 additional test cases compared to v4.4.</p>
        </div>
      </div>
    </div>
  </div>);
}
