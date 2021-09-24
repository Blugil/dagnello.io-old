import * as React from "react"
import Layout from "../components/layout/layout"
import Coming from "../components/coming/coming"

const IndexPage = () => {
  return (
    <div>
        <Layout render={<Coming />}/>
    </div>
  )
}

export default IndexPage
