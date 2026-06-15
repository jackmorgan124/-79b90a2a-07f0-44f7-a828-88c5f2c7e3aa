import type { Metadata } from 'next';
import Navbar from '@/components/blocks/navbar';
import FooterColumns from '@/components/blocks/footer-columns';
import ContactForm from '@/components/blocks/contact-form';
import ContactMap from '@/components/blocks/contact-map';

export const metadata: Metadata = {
  title: 'Contact | Harris Landscaping & Gardens',
  description:
    'Get in touch with Harris Landscaping & Gardens for a free, obligation-free quote on your South-West Sydney outdoor transformation.',
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
      <ContactForm
        formCta="Send My Quote Request"
        heading="Get in Touch With Our Team"
        subheading="Ready to transform your outdoor space? Fill in the form below and a member of our team will be in touch to discuss your project and provide a detailed, obligation-free quote."
      />
      <ContactMap
        email="info@harrislandscaping.com.au"
        hours="Mon–Fri 6:30am–4:30pm | Saturday by appointment | Sunday closed"
        phone="0400 000 000"
        address="Campbelltown, NSW 2560"
        heading="Find Us"
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52982.0!2d150.8!3d-34.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12e3b5a1234567%3A0xabcdef!2sCampbelltown+NSW+2560!5e0!3m2!1sen!2sau!4v1686000000000"
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
