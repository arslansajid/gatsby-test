import * as React from "react";
import { Link } from "gatsby";
import PageLayout from "../components/PageLayout";

const AboutPage = () => {
  return (
    <PageLayout>
      <main id="about">
        <h1>
          About Page
        </h1>
        <Link to="/">Go back to the homepage</Link>
      </main>
    </PageLayout>
  )
}

export default AboutPage
