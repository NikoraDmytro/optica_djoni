import type { NextPage } from 'next';

import { Layout } from '../components/Layout'

import { OpticsStuff } from '../domain/OpticsStuff';
import { OpticsServices } from '../domain/OpticsServices';

const Home: NextPage = () => {
  return (
    <Layout home>
      <OpticsServices />

      <OpticsStuff />
    </Layout>
  )
}

export default Home
