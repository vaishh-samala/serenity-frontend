import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Therapies from "./pages/Therapies";
import Sessions from "./pages/Sessions";
import SessionDetails from "./pages/SessionDetails";
import Suggest from "./pages/Suggest";
import Blogs from "./pages/Blogs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BlogDetail from "./pages/BlogDetails";
import ScrollToTop from "./pages/ScrollToTop";
import Dashboard from "./pages/Dashboard";

const queryClient = new QueryClient();

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <div className="flex-1">{children}</div>
    <Footer />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Auth Routes (no layout) */}
          <Route
            path="/login"
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />
          <Route
            path="/register"
            element={
              <Layout>
                <Register />
              </Layout>
            }
          />

          {/* Main Routes (with layout) */}
          <Route
            path="/"
            element={
              <Layout>
                <Index />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="/therapies"
            element={
              <Layout>
                <Therapies />
              </Layout>
            }
          />
          <Route
            path="/sessions"
            element={
              <Layout>
                <Sessions />
              </Layout>
            }
          />
          <Route
            path="/session/:id"
            element={
              <Layout>
                <SessionDetails />
              </Layout>
            }
          />
          <Route
            path="/suggest"
            element={
              <Layout>
                <Suggest />
              </Layout>
            }
          />
          <Route
            path="/blogs"
            element={
              <Layout>
                <Blogs />
              </Layout>
            }
          />
          <Route
            path="/blogs/:id"
            element={
              <Layout>
                <BlogDetail />
              </Layout>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Layout>
                <Dashboard />
              </Layout>
            }
          />

          {/* 404 Route */}
          <Route
            path="*"
            element={
              <Layout>
                <NotFound />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
