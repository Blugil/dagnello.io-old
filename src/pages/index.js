import * as React from "react"
import Layout from "../components/layout/layout"
import Coming from "../components/coming/coming"
import { Helmet } from "react-helmet"

const IndexPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <meta name="author" content="Dominick Agnello" />
        <meta name="copyright" content="Dominick Agnello" />
        <meta name="keywords" content="personal blog, programming"/>
        <title>Home | Dominick Agnello</title>
      </Helmet>
        <Layout render={<Coming />}/>
    </React.Fragment>
  )
}

export default IndexPage
