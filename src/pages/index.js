import * as React from "react"
import Layout from "../components/layout/layout"
import Home from "../components/home/home"
import { Helmet } from "react-helmet"

const IndexPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <meta name="author" content="Dominick Agnello" />
        <meta name="copyright" content="Dominick Agnello" />
        <meta name="keywords" content="personal blog, programming"/>
        <meta name="description" content="a personal website I use for blogging about topics like: programming, technology, science, life, and others."/>
        <title>Home | Dominick Agnello</title>
      </Helmet>
        <Layout render={<Home />}/>
    </React.Fragment>
  )
}

export default IndexPage
