import { defineSchema, defineTable } from "convex/server"; import { v } from "convex/values";
export default defineSchema({
  testSuites: defineTable({ name: v.string(), testCasesCount: v.number(), lastPassPct: v.number() }),
  rubrics: defineTable({ title: v.string(), type: v.string(), promptOrCode: v.string() }),
  evalRuns: defineTable({ suiteId: v.id("testSuites"), scorePct: v.number(), passedCount: v.number(), failedCount: v.number(), timestamp: v.string() }),
});
