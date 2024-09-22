"use client";

import Header from "./header";
import Hero from "./hero";
import About from "./about";
import Features from "./features";
import OrderProcess from "./orderProcess";
import Testimonials from "./testimonials";
import SpecialOffers from "./specialOffers";
import Contact from "./Contact";
import Footer from "./footer";

export default function RestaurantLanding() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero section */}
        <Hero />

        {/* About section */}
        <About />

        {/* Featured dishes section */}
        <Features />

        {/* Ordering process section */}
        <OrderProcess />

        {/* Testimonials section */}
        <Testimonials />

        {/* Special offers section */}
        <SpecialOffers />

        {/* Location and contact section */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
