import { Header, RoonsHistory } from "./components";
import { viewContainer } from "./styles";

export function View() {
  return (
    <main className={viewContainer}>
      <Header />
      <RoonsHistory />
    </main>
  );
}
