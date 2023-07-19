import { DashboardClient } from "~/module";

export const meta = DashboardClient.meta;

export default function () {
  return <DashboardClient.View />;
}
