import type { NextPage } from "next";

import { Layout } from "../components/Layout";

import { OpticsStuff } from "../domain/OpticsStuff";
import { OpticsServices } from "../domain/OpticsServices";
import { UserComments } from "../components/UserComments/UserComments";

const Home: NextPage = () => {
  return (
    <Layout home>
      <OpticsServices />

      <OpticsStuff />

      <UserComments />
    </Layout>
  );
};

export default Home;
