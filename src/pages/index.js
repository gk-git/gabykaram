import React from "react"
import Helmet from "react-helmet"
import Intro from "../components/Global/Intro"
import Layout from "../components/Global/Layout"

export default function Home () {
  return (
    <Layout
      navigationProps={{
        isTransparent: false
      }}
      showIntro={true}
      introComponent={<Intro />}
    >
      <Helmet title="Gaby Karam | Digital Producer & Developer" defer={false}  >
      </Helmet>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="I don’t find myself defined by who I am currently. I define myself by what I am looking to be." />
      </Helmet>
      <div>
        <h1>👋 I want to make things that make a difference. 👋</h1>
        <hr />
        <p>
          Hi, I am Gaby, a strong believer in the learn by teaching concepts,
          a technical artist 🧑‍💻🧑‍🎨 who knows that anything can be done
          and prefers to have a magical touch on every piece of art he contributes to.
        </p>
    
    
        <p>I am a person who tackles what he doesn't know and who keep searching for what he doesn't know.</p>
    
    
        <p>
          On my tech status, I am a full stack developer who strives to become a designer.
    
    
        </p>
        <p>During my previous years of experience, I have developed an expertise in the following:</p>
        <ul>
          <li>Building WordPress themes by following a design resource (Adobe XD, Figma or Sketch)</li>
          <li>Creating custom WordPress plugins.</li>
          <li>Maintaining websites, even if not developed by myself</li>
          <li>Bug finder and solver for WordPress, PHP, Javascript, and React.</li>
          <li>Ability to migrate websites from one server to another</li>
          <li>Having a good understanding of developing accessible websites.</li>
          <li>A good understanding of technical SEO</li>
        </ul>
        <p>
          I'm currently <a href="https://app.codeable.io/tasks/new?preferredContractor=86716" rel="noopener" title="Hire me">available
          for hire</a>
          &nbsp;through <a href="https://codeable.io/how-it-works/" target="_blank" rel="noopener" >Codeable.</a>
        </p>
      </div>
    </Layout>
  )
}
