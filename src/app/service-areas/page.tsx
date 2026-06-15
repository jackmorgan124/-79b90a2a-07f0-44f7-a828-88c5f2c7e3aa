import type { Metadata } from 'next';
import Navbar from '@/components/blocks/navbar';
import FooterColumns from '@/components/blocks/footer-columns';
import ServiceAreaGrid from '@/components/blocks/service-area-grid';
import ImageTextSplit from '@/components/blocks/image-text-split';
import CtaSplit from '@/components/blocks/cta-split';

export const metadata: Metadata = {
  title: 'Service Areas | Harris Landscaping & Gardens',
  description:
    'Harris Landscaping & Gardens proudly services Campbelltown, Camden, Narellan, Picton, Ingleburn, and the wider Macarthur region of South-West Sydney.',
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
      <ServiceAreaGrid
        areas={[
          { href: '/service-areas/campbelltown', name: 'Campbelltown' },
          { href: '/service-areas/camden', name: 'Camden' },
          { href: '/service-areas/narellan', name: 'Narellan' },
          { href: '/service-areas/picton', name: 'Picton' },
          { href: '/service-areas/ingleburn', name: 'Ingleburn' },
          { href: '/service-areas/macarthur', name: 'Macarthur Region' },
        ]}
        heading="Landscaping Services Across South-West Sydney"
        subheading="Harris Landscaping & Gardens proudly services homeowners and builders throughout South-West Sydney. Select your suburb below to learn more about our work in your local area."
      />
      <ImageTextSplit
        cta="Get a Free Quote Today"
        body="We've been transforming outdoor spaces across South-West Sydney for over 15 years. Our team understands the local conditions, council regulations, and design preferences unique to this region — from the established suburbs of Campbelltown to the fast-growing estates of Narellan and Camden. Whether you're building new or renovating an existing garden, we bring the same level of quality and care to every job, no matter the suburb."
        image="/images/service-areas.jpg"
        ctaHref="/contact"
        heading="Your Local South-West Sydney Landscaping Experts"
        imageAlt="Harris Landscaping team working across South-West Sydney suburbs"
        imagePosition="right"
      />
      <CtaSplit
        cta="Get a Free Quote Today"
        image="/images/cta-service-areas.jpg"
        ctaHref="/contact"
        heading="Servicing Your Suburb — From Campbelltown to Camden and Beyond"
        imageAlt="Landscaped outdoor space in South-West Sydney"
        subheading="No matter where you are in South-West Sydney, Harris Landscaping & Gardens is ready to bring your outdoor vision to life. Get in touch today for a free, no-obligation quote."
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
