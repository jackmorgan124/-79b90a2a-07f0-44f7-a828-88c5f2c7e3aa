import type { Metadata } from 'next';
import Navbar from '@/components/blocks/navbar';
import FooterColumns from '@/components/blocks/footer-columns';
import AboutSplit from '@/components/blocks/about-split';
import AboutValues from '@/components/blocks/about-values';
import StatsCounter from '@/components/blocks/stats-counter';

export const metadata: Metadata = {
  title: 'About | Harris Landscaping & Gardens',
  description:
    "South-West Sydney's trusted landscaping specialists with over 15 years of experience and 500+ projects completed.",
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
      <AboutSplit
        body="With over 15 years of hands-on experience, Harris Landscaping & Gardens has built a reputation for quality craftsmanship and exceptional results across Campbelltown, Camden, Narellan, Picton, and the wider South-West Sydney region. Our fully insured, detail-focused team works closely with homeowners and builders to deliver outdoor spaces that are both beautiful and built to last. Every project — no matter the size — is completed with the same commitment to precision, clear communication, and lasting quality."
        image="/images/about.jpg"
        stats={['15+ Years Experience', '500+ Projects Completed', '100% Fully Insured']}
        heading="South-West Sydney's Trusted Landscaping Specialists"
        imageAlt="Harris Landscaping & Gardens team working on a landscaping project in South-West Sydney"
      />
      <AboutValues
        items={[
          { title: 'Detail-Focused Craftsmanship', description: 'Every edge, joint, and finish is completed to the highest standard. We take pride in the details that make the difference between good and exceptional.' },
          { title: 'Transparent Communication', description: 'From your first quote to final walkthrough, we keep you informed at every stage with clear timelines and no hidden surprises.' },
          { title: 'Local Expertise', description: "We know South-West Sydney's soil conditions, council requirements, and climate — giving your project the best possible foundation for long-term success." },
        ]}
        heading="Why Homeowners Choose Harris Landscaping"
        subheading="We combine local knowledge, premium materials, and a passion for outdoor design to deliver results that exceed expectations every time."
      />
      <StatsCounter
        items={[
          { label: 'Years in the Industry', value: '15', suffix: '+' },
          { label: 'Projects Completed', value: '500', suffix: '+' },
          { label: 'Fully Insured', value: '100', suffix: '%' },
          { label: 'Star Google Rating', value: '5', suffix: '★' },
        ]}
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
