import type { Metadata } from "next";
import Navbar from "@/components/blocks/navbar";
import GalleryBeforeAfter from "@/components/blocks/gallery-before-after";
import Gallery from "@/components/blocks/gallery";
import CtaBanner from "@/components/blocks/cta-banner";
import FooterColumns from "@/components/blocks/footer-columns";

export const metadata: Metadata = {
  title: "Project Gallery | Harris Landscaping & Gardens — Before & After Transformations",
  description:
    "See the difference Harris Landscaping & Gardens makes — real projects, real results across South-West Sydney. Browse our portfolio of completed landscaping projects.",
};

export default function ProjectGalleryPage() {
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
          {
            after: "/images/after-4.jpg",
            label: "Full Garden Redesign — Picton",
            before: "/images/before-4.jpg",
          },
          {
            after: "/images/after-5.jpg",
            label: "Timber Decking Installation — Ingleburn",
            before: "/images/before-5.jpg",
          },
        ]}
        heading="Before & After Transformations"
        subheading="See the difference Harris Landscaping & Gardens makes — real projects, real results across South-West Sydney."
      />
      <Gallery
        images={[
          { alt: "Paving project in Campbelltown", src: "/images/gallery/project-1.jpg" },
          { alt: "Turf installation in Narellan", src: "/images/gallery/project-2.jpg" },
          { alt: "Retaining wall in Camden", src: "/images/gallery/project-3.jpg" },
          { alt: "Decking installation in Picton", src: "/images/gallery/project-4.jpg" },
          { alt: "Garden makeover in Ingleburn", src: "/images/gallery/project-5.jpg" },
          { alt: "Landscaping design in Macarthur Region", src: "/images/gallery/project-6.jpg" },
          { alt: "Entertaining area paving in Campbelltown", src: "/images/gallery/project-7.jpg" },
          { alt: "Full backyard transformation in Camden", src: "/images/gallery/project-8.jpg" },
        ]}
        heading="Our Work Speaks for Itself"
        subheading="Browse our portfolio of completed landscaping projects across South-West Sydney — including paving installations, turf laying, retaining walls, decking, and full garden makeovers."
      />
      <CtaBanner
        cta="Start Your Own Transformation"
        ctaHref="/contact"
        heading="Ready to Start Your Own Transformation?"
        subheading="Contact Harris Landscaping & Gardens today and let's bring your outdoor vision to life across South-West Sydney."
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
