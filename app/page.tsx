import Main from "./common/Main";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  return (
    <>
      <Main />
      <SpeedInsights />
    </>
  );
}
