import * as React from "react"
import Layout from "../components/layout/layout"
import Contact from "../components/contact/contact"
import { Helmet } from "react-helmet"

const ContactPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>
          Contact | Dominick Agnello
        </title>
      </Helmet>
      <Layout render={<Contact />}/>
    </React.Fragment>
  )
}

export default ContactPage