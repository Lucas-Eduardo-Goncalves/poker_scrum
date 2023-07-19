import { style } from "@vanilla-extract/css";

export const headerContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  padding: "var(--space-004)",
  backgroundColor: "var(--terceary-900)",
  borderRadius: "var(--radii-sm)",

  gridColumn: "1 / span 2",
});
