
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LocationPage from "./pages/LocationPage";
import AddAnimalPage from "./pages/AddAnimalPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/cattleTest">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/location/:locationId" element={<LocationPage />} />
          <Route path="/add-animal" element={<AddAnimalPage />} />
          <Route path="/location/:locationId/add-animal" element={<AddAnimalPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
