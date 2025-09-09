import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Portfolio from "@/pages/portfolio";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Portfolio} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="dark">
          <Toaster />
          <Router />

          {/* 🔹 Lovable Chatbot Embed */}
          <div
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              zIndex: 1000,
            }}
          >
            <iframe
              src="https://ruba-knows-all.lovable.app/"
              width="350"
              height="500"
              style={{ border: "none", borderRadius: "12px" }}
              title="chatbot"
            />
          </div>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

        