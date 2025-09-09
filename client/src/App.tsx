import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import Portfolio from "@/pages/portfolio";
import NotFound from "@/pages/not-found";
import { useState } from "react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Portfolio} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="dark">
          <Toaster />
          <Router />

          {/* 🔹 Chatbot Floating Button + Popup */}
          <div
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              zIndex: 1000,
            }}
          >
            {/* Floating Chat Icon Button with Tooltip */}
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    border: "none",
                    backgroundColor: "#2563eb", // blue
                    cursor: "pointer",
                    boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* Chat Bubble SVG Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    width="28px"
                    height="28px"
                  >
                    <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" />
                  </svg>
                </button>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>Chat with me</p>
              </TooltipContent>
            </Tooltip>

            {/* Chat Window */}
            {isOpen && (
              <div
                style={{
                  position: "fixed",
                  bottom: "90px",
                  right: "20px",
                  width: "350px",
                  height: "500px",
                  background: "white",
                  borderRadius: "12px",
                  boxShadow: "0px 4px 12px rgba(0,0,0,0.3)",
                  overflow: "hidden",
                }}
              >
                <iframe
                  src="https://ruba-knows-all.lovable.app/"
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
                  title="chatbot"
                />
              </div>
            )}
          </div>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;


        