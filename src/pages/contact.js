import * as React from "react"
import Layout from "../components/layout/layout"
import Coming from "../components/coming/coming"

const ContactPage = () => {
  return (
    <div>
      <Layout render={<Coming />}/>
    </div>
  )
}

export default ContactPage