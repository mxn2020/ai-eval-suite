import { Settings } from "lucide-react";
import { Button, Card, Input, Label, Select, SelectItem } from "@geenius-ui/react-css";

export default function SettingsPage() {
  return (<div style={{ padding: "var(--space-8)", maxWidth: 600 }}>
    <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700, marginBottom: "var(--space-6)" }}>Settings</h1>
    <Card padding="lg">
      <h3 style={{ fontSize: "var(--font-size-base)", fontWeight: 600, marginBottom: "var(--space-4)" }}>LLM-as-a-Judge Configuration</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        <div><Label style={{ marginBottom: 4 }}>Evaluator Model</Label>
          <Select defaultValue="gpt-4o">
            <SelectItem value="gpt-4o">gpt-4o (Recommended)</SelectItem>
            <SelectItem value="claude-3-opus">claude-3-opus</SelectItem>
          </Select>
        </div>
        <div><Label style={{ marginBottom: 4 }}>OpenAI API Key for Evaluator</Label><Input type="password" placeholder="sk-..." /></div>
        <Button variant="primary" style={{ alignSelf: "flex-start", marginTop: 8 }}>Save Settings</Button>
      </div>
    </Card>
  </div>);
}
