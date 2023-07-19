import { style } from "@vanilla-extract/css";

export const viewStyle = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  height: "100vh",
  width: "100vw",

  padding: "var(--space-008)",
  gap: "var(--space-016)",
});
