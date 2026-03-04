import { Play, Plus } from "lucide-react";
import { Button, Card } from "@geenius-ui/react-css";

const suites = [
  { id: "1", name: "Customer Support Responses", cases: 450, lastScore: "92%", passing: true },
  { id: "2", name: "SQL Query Generation", cases: 120, lastScore: "85%", passing: false },
  { id: "3", name: "Information Extraction", cases: 50, lastScore: "98%", passing: true }
];

export default function TestSuitesPage() {
  return (<div style={{ padding: "var(--space-8)", maxWidth: 1000 }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
      <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700 }}>Test Suites</h1>
      <Button variant="primary" icon={<Plus size={16} />}>New Suite</Button>
    </div>
    <div style={{ display: "grid", gap: "var(--space-4)" }}>
      {suites.map(s => (<Card key={s.id} padding="lg">
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: "var(--font-size-base)", fontWeight: 600, marginBottom: 4 }}>{s.name}</h3>
            <span style={{ fontSize: "var(--font-size-xs)", color: "var(--color-text-secondary)" }}><strong>{s.cases}</strong> test cases</span>
          </div>
          <div style={{ textAlign: "center", marginRight: "var(--space-4)" }}>
            <div style={{ fontSize: "11px", color: "var(--color-text-tertiary)", fontWeight: 600, textTransform: "uppercase" }}>Last Score</div>
            <div style={{ fontSize: "var(--font-size-lg)", fontWeight: 700, color: s.passing ? "var(--color-success)" : "var(--color-error)" }}>{s.lastScore}</div>
          </div>
          <Button variant="outline" icon={<Play size={14} />}>Run Suite</Button>
        </div>
      </Card>))}
    </div>
  </div>);
}
