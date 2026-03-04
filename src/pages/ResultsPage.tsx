import { XCircle } from "lucide-react";
import { Card } from "@geenius-ui/react-css";

export default function ResultsPage() {
  return (<div style={{ padding: "var(--space-8)", maxWidth: 1000 }}>
    <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700, marginBottom: "var(--space-6)" }}>Eval Run #1240</h1>
    <Card padding="lg" className="results-summary">
      <h3 style={{ fontSize: "var(--font-size-sm)", textTransform: "uppercase", fontWeight: 700, color: "var(--color-text-secondary)", marginBottom: "var(--space-2)" }}>Suite: SQL Query Generation</h3>
      <div style={{ display: "flex", gap: "var(--space-6)" }}>
        <div><span style={{ fontSize: "32px", fontWeight: 700, color: "var(--color-warning)" }}>85%</span><span style={{ display: "block", fontSize: "12px", color: "var(--color-text-secondary)" }}>Overall Pass Rate</span></div>
        <div><span style={{ fontSize: "32px", fontWeight: 700, color: "var(--color-success)" }}>102</span><span style={{ display: "block", fontSize: "12px", color: "var(--color-text-secondary)" }}>Tests Passed</span></div>
        <div><span style={{ fontSize: "32px", fontWeight: 700, color: "var(--color-error)" }}>18</span><span style={{ display: "block", fontSize: "12px", color: "var(--color-text-secondary)" }}>Tests Failed</span></div>
      </div>
    </Card>
    <h3 style={{ fontSize: "var(--font-size-base)", fontWeight: 600, marginBottom: "var(--space-4)", marginTop: "var(--space-6)" }}>Failed Examples</h3>
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
      <Card padding="md" className="failed-example">
        <div style={{ borderLeft: "4px solid var(--color-error)", paddingLeft: "var(--space-4)" }}>
          <div style={{ display: "flex", gap: "var(--space-2)", marginBottom: "var(--space-2)" }}><XCircle size={16} style={{ color: "var(--color-error)" }} /> <strong style={{ fontSize: "14px" }}>Complex Join Request</strong></div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)" }}>
            <div><div style={{ fontSize: "11px", color: "var(--color-text-tertiary)", fontWeight: 600, marginBottom: 4 }}>EXPECTED (GROUND TRUTH)</div><pre className="mono" style={{ fontSize: "12px", background: "var(--color-bg-secondary)", padding: "var(--space-2)", borderRadius: "var(--radius-sm)" }}>SELECT u.id {"\n"}FROM users u {"\n"}JOIN orders o ON u.id = o.user_id</pre></div>
            <div><div style={{ fontSize: "11px", color: "var(--color-text-tertiary)", fontWeight: 600, marginBottom: 4 }}>ACTUAL MODEL OUTPUT</div><pre className="mono" style={{ fontSize: "12px", background: "#FEF2F2", color: "#991B1B", padding: "var(--space-2)", borderRadius: "var(--radius-sm)" }}>SELECT users.id {"\n"}FROM users {"\n"}-- missed join!</pre></div>
          </div>
        </div>
      </Card>
    </div>
  </div>);
}
