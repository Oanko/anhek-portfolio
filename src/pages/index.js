import React from "react"
import { useIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"

import Hero from "../components/hero"
import Header from "../components/header"
import Work from "../components/work"
import About from "../components/about"
import SEO from "../components/seo"


const IndexPage = () => {
  const intl = useIntl();
  
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "pages.index" })}
        keywords={[`developer`, `front-end developer`, `graphic designer`]}
      />
      <Header siteTitle={intl.formatMessage({ id: "title" })}/>      
      <div className="bg-white border-b dark:bg-gray-900 dark:border-gray-800">
        <Hero/>
      </div>
      <div className="bg-gray-100 border-b dark:bg-gray-900 dark:border-gray-800">
        <Work/>
      </div>
      <div className="bg-white dark:bg-gray-900">
        <About/>
      </div>
    </Layout>
  )
}

export default IndexPage
