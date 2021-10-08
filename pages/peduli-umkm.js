// import Head from 'next/head'
// import Image from 'next/image'
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import P11 from '../components/nglarisi-umkm/P11';
import P12 from '../components/nglarisi-umkm/P12';
import P13 from '../components/nglarisi-umkm/P13';
import P14 from '../components/nglarisi-umkm/P14';
import Services from '../components/Services';
import FeaturesOne from '../components/FeaturesOne';
import FeaturesTwo from '../components/FeaturesTwo';
import Video from '../components/Video';
import Counter from '../components/Counter';
import Pricing from '../components/Pricing';
import Screenshots from '../components/Screenshots';
import Testimonial from "../components/Testimonial";
import Brands from "../components/Brands";
import Faq from "../components/Faq";
import BlogHome from "../components/BlogHome";
import Contact from "../components/Contact";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import {NextSeo} from 'next-seo';
export default function Home() {
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
 }
const hostname = typeof window !== 'undefined' && window.location.hostname ? window.location.hostname : '';
const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';

  return (
    <Layout 
      desc="wakaf air untuk kebaikan ummat" 
      icons = "/img/logo/jariyah-logo.png"
      creator = "Amal Jariyah Peduli"
      >
    <NextSeo
      title="jariyah Peduli UMKM"
      description="jariyah Peduli UMKM laris, bantu, usaha, umkm"
      openGraph={{
      url: origin ,
      title: 'Open Graph Title',
      description: 'Open Graph Description',
      images: [
          {
          url: 'https://www.example.ie/og-image-01.jpg',
          width: 800,
          height: 600,
          alt: 'Og Image Alt',
          type: 'image/jpeg',
          },
          { url: 'https://www.example.ie/og-image-03.jpg' },
          { url: 'https://www.example.ie/og-image-04.jpg' },
      ],
      site_name: hostname,
      }}
      twitter={{
      handle: '@handle',
      site: '@site',
      cardType: 'summary_large_image',
      }}
    />

    <Navbar
    logo = "/img/logo/jariyah-full-logo.png"
    />
    <P11/>
    <P12/>
    <P13/>
    <P14/>
    <Services />
    <FeaturesOne />
    <FeaturesTwo />
    <Video />
    <Counter />
    <Pricing />
    <Screenshots />
    <Testimonial />
    <Brands />
    <Faq />
    <BlogHome />
    <Contact />
    <CallToAction />
    <Footer />
    </Layout>
  )
}
