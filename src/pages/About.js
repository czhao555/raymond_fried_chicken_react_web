import React from "react";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout title="About" description="This is the About page">
      <div className="text-center mt-5">
        <h1>About</h1>
        <p>
          Lackmond Foo Chicken is an Malaysia fast food restaurant chain
          headquartered in Ipoh. It was founded by Lackmond Foo Wai Mun, an
          entrepreneur who selling fried chicken from his roadside stall in
          Ipoh, Perak.
          <br />
          <br /> Instagram ID : raymondfoo_128
          <br />
          Facebook : Raymond Foo
          <br />
          <br />
          Add my social apps account for discount !
        </p>
      </div>
    </Layout>
  );
};

export default About;
