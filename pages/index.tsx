import Head from 'next/head';
import Layout from '../components/Layout';
import Work from './Work';
import Resume from './Resume';
import Contact from './Contact';
export default function Home() {
  return (
    <Layout>
      <Work />
      <Resume />
      <Contact />
    </Layout>
  );
}
