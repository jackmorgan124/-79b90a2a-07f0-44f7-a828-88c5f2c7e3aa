import type { Metadata } from 'next';
import Navbar from '@/components/blocks/navbar';
import FooterColumns from '@/components/blocks/footer-columns';
import ServicesAlternating from '@/components/blocks/services-alternating';
import TrustBadges from '@/components/blocks/trust-badges';
import CtaBanner from '@/components/blocks/cta-banner';

export const metadata: Metadata = {
  title: 'Services | Harris Landscaping & Gardens',
  description:
    'Expert landscaping services across South-West Sydney — paving, turf installation, retaining walls, decking, garden makeovers, and landscaping design.',
};

export default function Page() {
  return (
    <>
      <Navbar
        cta="Get a Free Quote"
        logo="Harris Landscaping & Gardens"
        links={[
          { href: '/', label: 'Home' },
          { href: '/about', label: 'About' },
          { href: '/services', label: 'Services' },
          { href: '/project-gallery', label: 'Project Gallery' },
          { href: '/service-areas', label: 'Service Areas' },
          { href: '/contact', label: 'Contact' },
        ]}
        ctaHref="/contact"
        logoHref="/"
      />
      <ServicesAlternating
        items={[
          { image: '/images/services/paving.jpg', title: 'Paving', imageAlt: 'Paving installation by Harris Landscaping in South-West Sydney', description: 'From driveways to entertaining areas, we install durable and stylish pavers using quality materials suited to South-West Sydney conditions.' },
          { image: '/images/services/turf.jpg', title: 'Turf Installation', imageAlt: 'Turf installation by Harris Landscaping in South-West Sydney', description: 'We supply and lay premium turf varieties to give your lawn a lush, even finish — with preparation and grading included for long-term results.' },
          { image: '/images/services/retaining-walls.jpg', title: 'Retaining Walls', imageAlt: 'Retaining wall built by Harris Landscaping in South-West Sydney', description: 'Our retaining walls are engineered for stability and designed for visual appeal, using timber, concrete sleepers, or natural stone to suit your property.' },
          { image: '/images/services/decking.jpg', title: 'Decking', imageAlt: 'Custom decking by Harris Landscaping in South-West Sydney', description: 'Custom-built timber and composite decking that extends your living space outdoors — designed to complement your home and handle the Australian climate.' },
          { image: '/images/services/garden-makeovers.jpg', title: 'Garden Makeovers', imageAlt: 'Garden makeover by Harris Landscaping in South-West Sydney', description: 'Complete garden transformations including planting, mulching, edging, and feature installations — tailored to your lifestyle and aesthetic.' },
          { image: '/images/services/landscaping-design.jpg', title: 'Landscaping Design', imageAlt: 'Landscaping design consultation by Harris Landscaping in South-West Sydney', description: 'Professional design consultation and planning to map out your ideal outdoor space before a single shovel hits the ground.' },
        ]}
        heading="Our Landscaping Services"
      />
      <TrustBadges
        items={[
          { icon: '/images/badges/experience.svg', label: '15+ Years Experience' },
          { icon: '/images/badges/projects.svg', label: '500+ Projects Completed' },
          { icon: '/images/badges/insured.svg', label: 'Fully Insured' },
          { icon: '/images/badges/google.svg', label: '5-Star Google Rating' },
          { icon: '/images/badges/local.svg', label: 'Local South-West Sydney Experts' },
        ]}
      />
      <CtaBanner
        cta="Request a Free Quote"
        ctaHref="/contact"
        heading="Ready to Transform Your Outdoor Space?"
        subheading="Contact Harris Landscaping & Gardens today for a free, no-obligation quote. We service Campbelltown, Camden, Narellan, Picton, and the wider South-West Sydney region."
      />
      <FooterColumns
        logo="Harris Landscaping & Gardens"
        blurb="Harris Landscaping & Gardens delivers expert paving, turf, retaining walls, decking, and garden makeovers across South-West Sydney. Quality craftsmanship, transparent service, and lasting results."
        email="info@harrislandscaping.com.au"
        phone="0400 000 000"
        columns={[
          {
            links: [
              { href: '/services#paving', label: 'Paving' },
              { href: '/services#turf-installation', label: 'Turf Installation' },
              { href: '/services#retaining-walls', label: 'Retaining Walls' },
              { href: '/services#decking', label: 'Decking' },
              { href: '/services#garden-makeovers', label: 'Garden Makeovers' },
              { href: '/services#landscaping-design', label: 'Landscaping Design' },
            ],
            heading: 'Services',
          },
          {
            links: [
              { href: '/about', label: 'About Us' },
              { href: '/project-gallery', label: 'Project Gallery' },
              { href: '/service-areas', label: 'Service Areas' },
              { href: '/contact', label: 'Contact' },
            ],
            heading: 'Company',
          },
          {
            links: [
              { href: '/service-areas/campbelltown', label: 'Campbelltown' },
              { href: '/service-areas/camden', label: 'Camden' },
              { href: '/service-areas/narellan', label: 'Narellan' },
              { href: '/service-areas/picton', label: 'Picton' },
              { href: '/service-areas/ingleburn', label: 'Ingleburn' },
              { href: '/service-areas/macarthur', label: 'Macarthur Region' },
            ],
            heading: 'Service Areas',
          },
        ]}
        copyright="© 2026 Harris Landscaping & Gardens. All rights reserved."
      />
    </>
  );
}
