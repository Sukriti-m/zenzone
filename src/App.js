import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BaseLayout from "./layout/BaseLayout";
import HelpHeader from "./components/HelpHeader";
import Details from "./pages/Help/Details";

//Pages
const Home = lazy(() => import("./pages/Home/Home"));
const Explore = lazy(() => import("./pages/Explore/Explore"));
const Help = lazy(() => import("./pages/Help/Help"));
const Showcase = lazy(() => import("./pages/Showcase/Showcase"));
const Career = lazy(() => import("./pages/Career/Career"));
const HowWork = lazy(() => import("./pages/HowWork/HowWork"));
const Space = lazy(() => import("./pages/Space/Space"));
function App() {
  const url = window.location.href;

  return (
    <>
      {url.includes("/help") && <HelpHeader />}
      {url.includes("/zenzonespace")}
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="w-screen h-screen flex flex-col justify-center items-center gap-y-4">
              <p className="text-thDark text-5xl font-bold mt-10">Loading...</p>
              <div className="loadbar"></div>
            </div>
          }
        >
          <BaseLayout>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/explore" element={<Explore />} />
              <Route exact path="/help/introduction/*" element={<Details />} />
              <Route path="/help/*" element={<Help />} />
              <Route exact path="/showcase" element={<Showcase />} />
              <Route exact path="/careers" element={<Career />} />
              <Route exact path="/howzenzonework" element={<HowWork />} />
              <Route exact path="/zenzonespace" element={<Space />} />
            </Routes>
          </BaseLayout>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
