import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = (data) => {
  const metas = [];

  if (data.location.pathname === "/")
    metas.push({ title: "PokerScrum | Login" });

  if (data.location.pathname === "/signup")
    metas.push({ title: "PokerScrum | Cadastro" });

  return metas;
};
