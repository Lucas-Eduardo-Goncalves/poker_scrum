import { style } from "@vanilla-extract/css";

export const roonsHistoryContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "var(--space-002)",
});

export const usersContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  height: "40px",
  width: "40px",
});

export const userCircle = style({
  display: "flex",
  alignItems: "center",
  position: "absolute",
  justifyContent: "center",

  color: "var(--terceary-50)",

  width: "40px",
  height: "40px",

  borderRadius: "var(--radii-full)",
  transition: "all 0.2s ease-in-out",
  boxShadow: "2px 1px 8px rgba(0, 0, 0, 0.5)",

  ":hover": {
    marginBottom: "15px",
  },
});
