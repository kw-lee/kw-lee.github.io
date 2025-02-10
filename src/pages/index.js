import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import links from "../components/link"

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
      </div>
      <div className={styles.linkList}>
        {links.map(link => (
          <div key={link.url} className={styles.listItem}>
            {link.icon && <link.icon className={styles.listItemIcon} />}
            <span><a
              className={styles.listItemLink}
              href={`${link.url}`}
            >
              {link.text}
            </a></span>
          </div>
        ))}
      </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
