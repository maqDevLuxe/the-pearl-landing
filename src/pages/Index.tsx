import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import MichelinAdopters from "@/components/sections/MichelinAdopters";
import HarvestingProcess from "@/components/sections/HarvestingProcess";
import GradingMetrics from "@/components/sections/GradingMetrics";
import TastingMenu from "@/components/sections/TastingMenu";
import ColdChain from "@/components/sections/ColdChain";
import ElitePairings from "@/components/sections/ElitePairings";
import FineDiningImage from "@/components/sections/FineDiningImage";
import ExportCounters from "@/components/sections/ExportCounters";
import Blog from "@/components/sections/Blog";
import Sustainability from "@/components/sections/Sustainability";
import Testimonials from "@/components/sections/Testimonials";
import OrderCTA from "@/components/sections/OrderCTA";

const Index = () => (
  <div className="min-h-screen bg-background overflow-x-hidden">
    <Navbar />
    <Hero />
    <MichelinAdopters />
    <div className="divider-line max-w-7xl mx-auto" />
    <HarvestingProcess />
    <div className="divider-line max-w-7xl mx-auto" />
    <GradingMetrics />
    <TastingMenu />
    <ColdChain />
    <ElitePairings />
    <FineDiningImage />
    <ExportCounters />
    <Blog />
    <div className="divider-line max-w-7xl mx-auto" />
    <Sustainability />
    <Testimonials />
    <OrderCTA />
  </div>
);

export default Index;
