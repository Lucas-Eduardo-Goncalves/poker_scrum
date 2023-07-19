import { style } from "@vanilla-extract/css";

export const viewContainer = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",

  padding: "var(--space-012)",
  gap: "var(--space-012)",
});
