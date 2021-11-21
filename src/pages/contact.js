import * as React from "react"
import Layout from "../components/layout/layout"
import Coming from "../components/coming/coming"
import { Helmet } from "react-helmet"

const ContactPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>
          Contact | Dominick Agnello
        </title>
      </Helmet>
      <Layout render={<Coming />}/>
    </React.Fragment>
  )
}

export default ContactPage