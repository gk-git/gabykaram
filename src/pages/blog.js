import React from "react"
import Layout from "../components/Global/Layout"

const BlogPage = () => {
  return (
    <Layout>
      <div style={{display:'flex', alignItems:'center', height: '100%'}}>
        <p style={{fontSize: '2rem'}}>
          I will be writing some short blog in the upcoming days.
          <br/>
          If you would like to offer some help, please don't hesitate, thank you.
        </p>
      </div>
    </Layout>
  )
}

export default BlogPage;
