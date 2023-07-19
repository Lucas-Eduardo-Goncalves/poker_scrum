import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = (data) => {
  const metas = [];

  metas.push({ title: "PokerScrum | Dashboard" });

  return metas;
};
