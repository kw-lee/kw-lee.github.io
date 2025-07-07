import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import * as styles from "../../components/index.module.css"
import LinkList from "../../components/link-list"
import LanguageButton from "../../components/language-button"

const KoreanIndexPage = ( { location } ) => (
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
        이경원
      </h1>
      <p className={styles.intro}>
        <b>박사후연구원</b> <br />
        메릴랜드 대학교 수학과
      </p>
      <LanguageButton currentPath={location?.pathname} />
    </div>
    <LinkList language="ko" />
  </Layout>
)

export const Head = () => <Seo title="홈" />

export default KoreanIndexPage