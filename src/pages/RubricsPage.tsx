import { FileSignature, Plus } from "lucide-react";
const rubrics = [
  { title:"Tone & Professionalism", type:"LLM-as-a-Judge", weight:"30%" },
  { title:"JSON Schema Validation", type:"Deterministic", weight:"50%" },
  { title:"Factual Consistency (RAG)", type:"LLM-as-a-Judge", weight:"40%" }
];
export default function RubricsPage() {
  return (<div style={{padding:"var(--space-8)",maxWidth:1000}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"var(--space-6)"}}>
      <h1 style={{fontSize:"var(--font-size-2xl)",fontWeight:700}}>Scoring Rubrics</h1>
      <button className="btn btn-primary"><Plus size={16}/> Create Rubric</button>
    </div>
    <div style={{display:"flex",flexDirection:"column",gap:"var(--space-4)"}}>
      {rubrics.map(r=>(<div key={r.title} className="card" style={{padding:"var(--space-4)"}}>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:"var(--space-3)",alignItems:"center"}}>
          <h3 style={{fontSize:"var(--font-size-base)",fontWeight:600}}>{r.title}</h3>
          <span className="badge badge-blue">{r.type}</span>
        </div>
        {r.type==="LLM-as-a-Judge" && <p style={{fontSize:"13px",color:"var(--color-text-secondary)",padding:"var(--space-3)",background:"var(--color-bg-secondary)",borderRadius:"var(--radius-sm)",borderLeft:"3px solid var(--color-accent-primary)"}}>Prompt: You are an expert evaluator. Grade the output on a scale of 1-5 for professionalism, empathy, and clarity. Return only the JSON score.</p>}
        {r.type==="Deterministic" && <p className="mono" style={{fontSize:"13px",color:"var(--color-text-secondary)",padding:"var(--space-3)",background:"var(--color-bg-secondary)",borderRadius:"var(--radius-sm)",borderLeft:"3px solid var(--color-accent-primary)"}}>import jsonschema from 'jsonschema'; // ... schema validation ...</p>}
      </div>))}
    </div>
  </div>);
}
