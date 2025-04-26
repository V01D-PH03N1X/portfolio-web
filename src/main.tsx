import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.sass";
import {BrowserRouter, Route, Routes} from "react-router";
import {Provider} from "@/components/ui/provider";
import {Analytics} from '@vercel/analytics/next';
import {SpeedInsights} from '@vercel/speed-insights/next';
import HomePage from "@/pages/HomePage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Analytics/>
    <SpeedInsights/>
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
