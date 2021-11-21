import * as React from "react"
import Layout from "../components/layout/layout"
import Coming from "../components/coming/coming"
import { Helmet } from "react-helmet"

const ProjectsPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Projects | Dominick Agnello</title>
      </Helmet>
      <Layout render={<Coming />}/>
    </React.Fragment>
  )
}

export default ProjectsPage