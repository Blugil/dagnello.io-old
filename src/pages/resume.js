import * as React from "react"
import Layout from "../components/layout/layout"
import ResumeContent from "../components/resume/resume"

const Resume = () => {
  return (
    <div>
      <Layout render={<ResumeContent />}/>
    </div>
  )
}

export default Resume;
