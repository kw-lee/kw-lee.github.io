import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import MailIcon from "../svg/fa-envelope-regular.svg"
import FileIcon from "../svg/fa-file-lines-regular.svg"
import GithubIcon from "../svg/fa-github-brands-solid.svg"
import LinkedInIcon from "../svg/fa-linkedin-brands-solid.svg"

const links = [
  {
    text: "kwlee@umd.edu",
    url: "mailto:kwlee@umd.edu",
    description: "Email",
    icon: MailIcon
  },
  {
    text: "Curriculum Vitae",
    url: "/cv.pdf",
    description: "CV",
    icon: FileIcon
  },
  {
    text: "Github",
    url: "https://github.com/kw-lee",
    description: "Github",
    icon: GithubIcon
  },
  {
    text: "LikedIn",
    url: "https://www.linkedin.com/in/kyeongwon-lee/",
    description: "LinkedIn",
    icon: LinkedInIcon
  }
]

// const links = [
//   {
//     text: "Tutorial",
//     url: "https://www.gatsbyjs.com/docs/tutorial",
//     description:
//       "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
//   },
//   {
//     text: "Examples",
//     url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
//     description:
//       "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
//   },
//   {
//     text: "Plugin Library",
//     url: "https://www.gatsbyjs.com/plugins",
//     description:
//       "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
//   },
//   {
//     text: "Build and Host",
//     url: "https://www.gatsbyjs.com/cloud",
//     description:
//       "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
//   },
// ]

// const samplePageLinks = [
//   {
//     text: "Page 2",
//     url: "page-2",
//     badge: false,
//     description:
//       "A simple example of linking to another page within a Gatsby site",
//   },
//   { text: "TypeScript", url: "using-typescript" },
//   { text: "Server Side Rendering", url: "using-ssr" },
//   { text: "Deferred Static Generation", url: "using-dsg" },
// ]

// const moreLinks = [
//   { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
//   {
//     text: "Documentation",
//     url: "https://gatsbyjs.com/docs/",
//   },
//   {
//     text: "Starters",
//     url: "https://gatsbyjs.com/starters/",
//   },
//   {
//     text: "Showcase",
//     url: "https://gatsbyjs.com/showcase/",
//   },
//   {
//     text: "Contributing",
//     url: "https://www.gatsbyjs.com/contributing/",
//   },
//   { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
// ]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/kwlee.jpeg"
        loading="eager"
        width={400}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1 className={styles.title}>
        Kyeongwon Lee
      </h1>
      <p className={styles.intro}>
        <b>Researcher</b> <br />
        Department of Mathematics, University of Maryland, College Park
      </p>
      <p className={styles.description}>
        Hi! I'm a postdoctoral researcher in the Department of Mathematics at the University of Maryland, College Park. I obtained my Ph.D. from the Department of Statistics at Seoul National University, advised by Prof. Jaeyong Lee. My research focuses on Bayesian statistics, including Bayesian nonparametrics, asymptotic properties, and Bayesian computation.
      </p>
      </div>
      <div className={styles.linkList}>
        {links.map(link => (
          <div key={link.url} className={styles.listItem}>
            {link.icon && <link.icon className={styles.listItemIcon} />}
            <span><a
              className={styles.listItemLink}
              href={`${link.url}${utmParameters}`}
            >
              {link.text}
            </a></span>
          </div>
        ))}
      </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
