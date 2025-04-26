import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.sass";
import {BrowserRouter, Route, Routes} from "react-router";
import {Provider} from "@/components/ui/provider";
import HomePage from "@/pages/HomePage";
import {PostHogProvider} from "posthog-js/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PostHogProvider
      apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY}
      options={{
        api_host: "https://eu.i.posthog.com",
        debug: import.meta.env.MODE === "development",
      }}
    >
      <Provider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </PostHogProvider>
  </StrictMode>,
);
