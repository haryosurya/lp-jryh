// import Head from 'next/head'
// import Image from 'next/image'
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import P11 from '../components/nglarisi-umkm/P11';
import P12 from '../components/nglarisi-umkm/P12';
import P13 from '../components/nglarisi-umkm/P13';
import P14 from '../components/nglarisi-umkm/P14';
import {NextSeo} from 'next-seo';
import P15 from '../components/nglarisi-umkm/P15';
import P16 from '../components/nglarisi-umkm/P16';
import P17 from '../components/nglarisi-umkm/P17';
import FloatingWhatsapp from 'react-floating-whatsapp';
import Images from 'next/image';
import imwa from '../public/img/logo/cs.svg';

export default function Home() {
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
 }
 
const hostname = typeof window !== 'undefined' && window.location.hostname ? window.location.hostname : '';
const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';
const css = "z-index:1;";
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
    {/* <Navbar
    
    /> */}
    <P11
    logo = "/img/logo/jariyah-full-logo.png"
    />
    <P12/>
    <P13/>
    <P14/>
    <P15/>
    <P16/>
    <P17/>
    <FloatingWhatsapp
    className = 'wabtns'
    phoneNumber="621326226775"
    accountName="Customer Support Jariyah"
    allowClickAway
    notification
    statusMessage ="Online"
    notificationDelay={60000} // 1 minute
    notificationSound
    chatMessage="Assalamualaikum, Ada yang bisa Kami bantu?"
    avatar = {imwa}
    />
    {/* <FeaturesOne /> */}
    {/* <Services />
    <FeaturesTwo />
    <Video />
    <Counter />
    <Pricing />
    <Screenshots />
    <Testimonial />
    <Brands />
    <Faq />
    <BlogHome />
  */}
  {/* <Contact /> */}
  {/* <CallToAction /> */}
    {/* <Footer /> */}
    </Layout>
  )
}
