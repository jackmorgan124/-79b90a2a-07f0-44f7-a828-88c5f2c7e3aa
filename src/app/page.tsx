import type { Metadata } from "next";
import Navbar from "@/components/blocks/navbar";
import HeroSplit from "@/components/blocks/hero-split";
import ServicesGrid from "@/components/blocks/services-grid";
import GalleryBeforeAfter from "@/components/blocks/gallery-before-after";
import ReviewsCarousel from "@/components/blocks/reviews-carousel";
import FooterColumns from "@/components/blocks/footer-columns";

export const metadata: Metadata = {
  title: "Harris Landscaping & Gardens | Transform Your Outdoor Space in South-West Sydney",
  description:
    "Harris Landscaping & Gardens delivers premium outdoor transformations for South-West Sydney homeowners — from paving and turf to retaining walls and complete garden makeovers.",
};

export default function HomePage() {
  return (
    <>
      <Navbar
        cta="Get a Free Quote"
        logo="Harris Landscaping & Gardens"
        links={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
          { href: "/services", label: "Services" },
          { href: "/project-gallery", label: "Project Gallery" },
          { href: "/service-areas", label: "Service Areas" },
          { href: "/contact", label: "Contact" },
        ]}
        ctaHref="/contact"
        logoHref="/"
      />
      <HeroSplit
        cta="Get a Free Quote"
        image="/images/hero.jpg"
        ctaHref="/contact"
        headline="Transform Your Outdoor Space Into Something Extraordinary"
        imageAlt="Professionally landscaped backyard in South-West Sydney by Harris Landscaping & Gardens"
        trustBadge="Trusted by 500+ South-West Sydney homeowners"
        subheadline="Harris Landscaping & Gardens delivers premium outdoor transformations for South-West Sydney homeowners — from paving and turf to retaining walls and complete garden makeovers."
      />
      <ServicesGrid
        items={[
          "Paving — Durable, stylish paving solutions for driveways, pathways, and entertaining areas",
          "Turf Installation — Lush, professionally laid turf that transforms any yard instantly",
          "Retaining Walls — Structurally sound and visually striking retaining walls built to last",
          "Decking — Custom timber and composite decking designed for outdoor living",
          "Garden Makeovers — Complete garden redesigns tailored to your lifestyle and block",
          "Landscaping Design — Thoughtful design plans that bring your outdoor vision to life",
        ]}
        heading="Expert Landscaping Services Across South-West Sydney"
        subheading="From concept to completion, we handle every aspect of your outdoor transformation with precision, care, and quality materials."
      />
      <GalleryBeforeAfter
        pairs={[
          {
            after: "/images/after-1.jpg",
            label: "Backyard Garden Makeover — Campbelltown",
            before: "/images/before-1.jpg",
          },
          {
            after: "/images/after-2.jpg",
            label: "Driveway Paving Installation — Narellan",
            before: "/images/before-2.jpg",
          },
          {
            after: "/images/after-3.jpg",
            label: "Retaining Wall & Turf — Camden",
            before: "/images/before-3.jpg",
          },
        ]}
        heading="Our Work Speaks for Itself"
        subheading="Browse our portfolio of completed landscaping projects across South-West Sydney — including before-and-after transformations, paving installations, turf laying, retaining walls, decking, and full garden makeovers."
      />
      <ReviewsCarousel
        items={[
          {
            author: "Sarah M., Campbelltown",
            rating: "5",
            review:
              "Harris Landscaping completely transformed our backyard. The attention to detail was outstanding and the team was professional from start to finish.",
          },
          {
            author: "James T., Narellan",
            rating: "5",
            review:
              "We had a full garden makeover and new paving installed. The results exceeded our expectations — highly recommend to anyone in South-West Sydney.",
          },
          {
            author: "Lisa K., Camden",
            rating: "5",
            review:
              "Fantastic team to deal with. Clear communication throughout the entire project and the finished product looks incredible.",
          },
          {
            author: "Mark R., Picton",
            rating: "5",
            review:
              "Our retaining wall and turf installation was done on time and on budget. Great quality workmanship.",
          },
        ]}
        heading="What South-West Sydney Homeowners Are Saying"
      />
      <FooterColumns
        logo="Harris Landscaping & Gardens"
        blurb="Harris Landscaping & Gardens delivers expert paving, turf, retaining walls, decking, and garden makeovers across South-West Sydney. Quality craftsmanship, transparent service, and lasting results."
        email="info@harrislandscaping.com.au"
        phone="0400 000 000"
        columns={[
          {
            links: [
              { href: "/services#paving", label: "Paving" },
              { href: "/services#turf-installation", label: "Turf Installation" },
              { href: "/services#retaining-walls", label: "Retaining Walls" },
              { href: "/services#decking", label: "Decking" },
              { href: "/services#garden-makeovers", label: "Garden Makeovers" },
              { href: "/services#landscaping-design", label: "Landscaping Design" },
            ],
            heading: "Services",
          },
          {
            links: [
              { href: "/about", label: "About Us" },
              { href: "/project-gallery", label: "Project Gallery" },
              { href: "/service-areas", label: "Service Areas" },
              { href: "/contact", label: "Contact" },
            ],
            heading: "Company",
          },
          {
            links: [
              { href: "/service-areas/campbelltown", label: "Campbelltown" },
              { href: "/service-areas/camden", label: "Camden" },
              { href: "/service-areas/narellan", label: "Narellan" },
              { href: "/service-areas/picton", label: "Picton" },
              { href: "/service-areas/ingleburn", label: "Ingleburn" },
              { href: "/service-areas/macarthur", label: "Macarthur Region" },
            ],
            heading: "Service Areas",
          },
        ]}
        copyright="© 2026 Harris Landscaping & Gardens. All rights reserved."
      />
    </>
  );
}
