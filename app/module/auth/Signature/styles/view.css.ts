import { keyframes, style } from "@vanilla-extract/css";

const showAnimation = keyframes({
  "0%": { transform: "translate(-40px)", opacity: 0 },
  "100%": { transform: "translate(0)", opacity: 1 },
});

export const viewStyle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  height: "100vh",
  width: "100vw",

  overflow: "hidden",
  animationName: showAnimation,
  animationDuration: "1s",

  padding: "var(--space-008)",
  gap: "var(--space-040)",

  flexWrap: "wrap",
  "@media": { "(max-width: 1033px)": { gap: "var(--space-016)" } },
});
