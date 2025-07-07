import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import * as styles from "../../components/index.module.css"
import LinkList from "../../components/link-list"
import LanguageButton from "../../components/language-button"

const IndexPage = ( { location } ) => (
  <Layout>
    <div className={styles.textCenter}>
      <StaticImage
        src="../../images/kwlee.jpeg"
        loading="eager"
        width={400}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)`, borderRadius: `5%` }}
      />
      <h1 className={styles.title}>
        Kyeongwon Lee
      </h1>
      <p className={styles.intro}>
      <b>Postdoctoral Researcher</b> <br />
        Department of Mathematics, University of Maryland
      </p>
      <LanguageButton currentPath={location?.pathname} />
    </div>
    <LinkList language="en" />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
