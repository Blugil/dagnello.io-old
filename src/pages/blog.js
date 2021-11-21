import * as React from "react"
import Layout from "../components/layout/layout"
import Articles from "../articles/articles"
import { Helmet } from "react-helmet"

const ArticlePage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Blog | Dominick Agnello</title>
      </Helmet>
      <Layout render={<Articles />}/>
    </React.Fragment>
  )
}

export default ArticlePage