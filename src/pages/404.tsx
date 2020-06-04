import React from "react"
import Layout from "../components/layout"

const NotFoundPage: React.FC = () => (
  <Layout title="Sorry, ain't no page here" subtitle="Not Found">
    <h1>Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
