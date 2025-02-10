import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../components/cv.module.css"
import links from "../components/link"

const CvPage = () => (
  <Layout>
      <div className={styles.topBox}>
      <StaticImage
        src="../images/kwlee.jpeg"
        loading="eager"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        className={styles.profileImage}
      />
      <div className={styles.titleBox}>
      <h1 className={styles.title}>
        Kyeongwon Lee
      </h1>
      <p className={styles.intro}>
        <b>Researcher</b> <br />
        Department of Mathematics, University of Maryland, College Park
      </p>
      <div className={styles.linkList}>
        {links.map(link => (
          <div key={link.url} className={styles.listItem}>
            {link.icon && <link.icon className={styles.listItemIcon} />}
            <span><a
              className={styles.listItemLink}
              href={`${link.description}` === "CV" ? "/cv.pdf" : `${link.url}`}
            >
              {link.text}
            </a></span>
          </div>
        ))}
      </div>
      </div>
      </div>
      <div className={styles.cvBox}>
        <h2>About Me</h2>
        <hr className={styles.borderLine}></hr>
        <p className={styles.cvDescription}>I'm a postdoctoral researcher in the Department of Mathematics at the University of Maryland, College Park. I obtained my Ph.D. from the Department of Statistics at Seoul National University, advised by Prof. Jaeyong Lee. My research focuses on Bayesian statistics, including Bayesian nonparametrics, asymptotic properties, and Bayesian computation.</p>
      </div>
      <div className={styles.cvBox}>
        <h2>Education</h2>
        <hr className={styles.borderLine}></hr>
        <ul>
          <li>Ph.D. in Statistics: Feb 2024, Seoul National University, Korea
            <ul>
              <li>Advisor: Professor Jaeyong Lee</li>
              <li>Thesis: Asymptotic analysis of Bayesian neural networks for supervised learning</li>
            </ul>
          </li>
          <li>B.S. in Mathematics: Feb 2017, Seoul National University, Korea</li>
          <li>B.S. in Statistics: Feb 2017, Seoul National University, Korea</li>
        </ul>
      </div>
      <div className={styles.cvBox}>
        <h2>Professional Experience</h2>
        <hr className={styles.borderLine}></hr>
        <ul>
          <li>Postdoctoral Researcher, Department of Mathematics, University of Maryland, College Park, MD, USA, August 2024 - Present</li>
          <li>Postdoctoral Researcher, Department of Statistics and Data Sciences, Yonsei University, Seoul, Korea, March 2024 - August 2024</li>
        </ul>
      </div>
      <div className={styles.cvBox}>
        <h2>Honor and Scholarship</h2>
        <hr className={styles.borderLine}></hr>
        <ul>
          <li>2023 T-SM Best Paper Award, IEEE Transactions on Semiconductor Manufacturing, 2023</li>
          <li>Award for Excellence in Teaching, Department of Statistics, Seoul National University, 2023</li>
          <li>Top Graduate Student Paper Award, Journal of the Korean Statistical Society Summer Conference, 2023</li>
          <li>Award for Excellence in Teaching, Department of Statistics, Seoul National University, 2020</li>
          <li>The Next Generation of Academics in the Field of Fundamental Science (학문후속세대 장학금), Seoul National University, 2019</li>
        </ul>
      </div>
      <div className={styles.cvBox}>
        <h2>Publications</h2>
        <hr className={styles.borderLine}></hr>

        <h3>Accepted or published</h3>
        <ul>
          <li>K. Lee, S. Jo, <b>K. Lee</b>, and J. Lee (2024). Scalable and optimal Bayesian inference for sparse covariance matrices via screened beta-mixture prior. Bayesian Analysis, 1(1), 1-28.</li>
          <li>S. Park, <b>K. Lee</b>, D. Jeong, H. Ko, and J. Lee. (2023). Bayesian nonparametric classification for incomplete data with a high missing rate: an application to semiconductor manufacturing data. <i>IEEE Transactions on Semiconductor Manufacturing</i>, 36(2), 170-179.</li>
          <li>K. Kim., M. Ma, and <b>K. Lee</b> (2023). Prediction of spatio-temporal AQI data. <i>Communications for Statistical Applications and Methods</i>, 30(2), 119-133.</li>
          <li><b>K. Lee</b>, and J. Lee. (2022). Asymptotic properties for Bayesian neural network in Besov space. <i>Advances in Neural Information Processing Systems</i>, 35.</li>
          <li>S. Lee, S. Han, S. Park, <b>K. Lee</b>, and J. Lee. (2019). Korean speech recognition using deep learning. <i>The Korean Journal of Applied Statistics</i>, 32(2), 213-227.</li>
        </ul>
        <h3>In preparation</h3>
        <ul>
          <li>K. Lee, <b>K. Lee</b>, K. Lee, and S. Jo (2025+). bspcov: An R Package for Bayesian Sparse Covariance Matrix Estimation. (<a href="https://github.com/statjs/bspcov">GitHub</a>)</li>
        </ul>
      </div>
      <div className={styles.cvBox}>
        <h2>Conference Presentation</h2>
        <hr className={styles.borderLine}></hr>
        <ul>
          <li>Asymptotic analysis of Bayesian neural networks for supervised learning
            <ul>
              <li>2024 Bayesian Young Statisticians Meeting</li>
            </ul>
          </li>
          <li>Asymptotic properties for Bayesian neural network in Besov space
            <ul>
              <li>2022 Thirty-sixth Conference on Neural Information Processing Systems</li>
              <li>2022 The Asian Regional Section of the International Association for Statistical Computing Interim Conference (Virtual)</li>
              <li>2023 Journal of the Korean Statistical Society Summer Conference</li>
            </ul>
          </li>
          <li>Comparison of end-to-end deep learning models in Korean speech recognition
            <ul>
              <li>2018 Eastern Asia Chapter of the International Society for Bayesian Analysis</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className={styles.cvBox}>
        <h2>Teaching</h2>
        <hr className={styles.borderLine}></hr>
        <h3>Lecture</h3>
        <ul>
          <li>University of Maryland, College Park, USA, 2024 - Present
            <ul>
              <li>STAT410: Introduction to Probability Theory</li>
            </ul>
          </li>
          <li>Humaiin, Korea, 2020 - 2022
            <ul>
              <li>Introduction to Data Science</li>
            </ul>
          </li>
          <li>Fastcampus, Korea, 2018 - 2019
            <ul>
              <li>Statistical and Bayesian Inference for Machine Learning</li>
            </ul>
          </li>
        </ul>
        <h3>Teaching Assistant</h3>
        <ul>
          <li>Korea National Open University, Korea
            <ul>
              <li>Bayesian Data Analysis</li>
            </ul>
          </li>
          <li>Seoul National University, Korea
            <ul>
              <li>Statistics</li>
              <li>Statistics Lab</li>
              <li>Mathematical Statistics</li>
              <li>Theories of Statistics</li>
              <li>Advanced Bayesian Statistics</li>
            </ul>
          </li>
          <li>SNU Statistical Research Institute, Korea
            <ul>
              <li>Data Science with R/Python</li>
            </ul>
          </li>
        </ul>
      </div>
    <div className={styles.cvBox}>
      <h2>Research Project</h2>
      <hr className={styles.borderLine}></hr>
      <div>
        <p>
          <i>
            <strong>Asymptotic analysis of deep generative models</strong>
          </i>
          <br />
          <i>This work is joint research with Lizhen Lin, 2024 -.</i>
        </p>
      </div>
      <div>
        <p>
          <i>
            <strong>Asymptotic properties and applications of sparse Bayesian neural networks</strong>
          </i>
          <br />
          <i>This work is joint research with Jaeyong Lee, 2018 -.</i>
        </p>
      </div>
      <div>
        <p>
          <i>
            <strong>Scalable and optimal Bayesian inference for high-dimensional sparse covariance matrices</strong>
          </i>
          <br />
          <i>This work is joint research with Seongil Jo, Kwangmin Lee, Kyoungjae Lee, and Jaeyong Lee, 2023 -.</i>
        </p>
      </div>
      <div>
        <p>
          <i>
            <strong>Bayesian nonparametric classification for incomplete data with a high missing rate</strong>
          </i>
          <br />
          <i>This work is joint research with Daeun Jeong, Heungkook Ko, Sewon Park, and Jaeyong Lee and supported by Samsung Electronics, 2021 - 2023.</i>
        </p>
      </div>
      <div>
        <p>
          <i>
            <strong>Prediction of spatio-temporal air quality index data</strong>
          </i>
          <br />
          <i>This work is joint research with Kyeongeun Kim and Miru Ma, 2021 - 2023.</i>
        </p>
      </div>
      <div>
        <p>
          <i>
            <strong>Korean speech recognition using deep learning</strong>
          </i>
          <br />
          <i>This work is joint research with Suji Lee, Seokjin Han, Sewon Park, and Jaeyong Lee, 2017 - 2019.</i>
        </p>
      </div>
      <h2>Non-Research Project</h2>
      <hr className={styles.borderLine}></hr>
      <div>
        <p>
          <i>
            <strong>Statistical/probabilistic research on the risk of defective occurrence during reliability testing and measures to reduce risk by securing additional sampling</strong>
          </i>
          <br />
          Samsung Electronics Co., Ltd., 2021.
        </p>
      </div>
      <div>
        <p>
          <i>
            <strong>A Study on the Improvement of Index Preparation Methods for Expansion of Actual Transaction Price Index for the apartment house</strong>
          </i>
          <br />
          Korea Real Estate Board (한국부동산원), 2020 - 2021.
        </p>
      </div>
      <div>
        <p>
          <i>
            <strong>De Novo Drug Design Using Deep Generative Models</strong>
          </i>
          <br />
          <i>This work is presented as a team project of the class 326.739A in the 2018 spring semester and joint work with Seokjin Han, Hyosin Lee, and Seowon Choi, 2018.</i>
        </p>
      </div>
    </div>

    <div className={styles.cvBox}>
      <h2>Skills and Other Information</h2>
      <hr className={styles.borderLine}></hr>
      <h3>Programming languages</h3>
      <p>
        <code>Python</code>, <code>R</code>, <code>Julia</code>, and <code>C++</code>.
      </p>
      <h3>Technical skills</h3>
      <ul>
        <li>
          Computational mathematics frameworks (<code>Rcpp</code>, <code>NumPy</code>,{" "}
          <code>SciPy</code> and <code>JAX</code>)
        </li>
        <li>
          Data analysis and visualization (<code>dplyr</code>/<code>pandas</code> and{" "}
          <code>ggplot2</code>/<code>matplotlib</code>)
        </li>
        <li>
          Deep learning frameworks (<code>TensorFlow</code> and <code>PyTorch</code>)
        </li>
        <li>
          Probablistic programming languages (<code>BUGS</code>/<code>JAGS</code>, <code>Stan</code>{" "}
          and <code>Pyro/NumPyro</code>)
        </li>
        <li>
          Documentation (LaTeX) and Web (<code>HTML</code>, <code>CSS</code>, <code>JS</code> and{" "}
          <code>React</code>)
        </li>
        <li>
          <code>Docker</code>, <code>Git</code> and parallel computing.
        </li>
      </ul>
      <h3>Operating systems</h3>
      <p>
        <code>MacOS</code>, <code>Windows</code> and{" "}
        <code>GNU/Linux</code> (<code>Debian</code>, <code>CentOS</code>, <code>Arch</code>).
      </p>
      <h3>Extracurricular activities</h3>
      <ul>
        <li>
          <i>SNU Computer Study Club (SCSC)</i>{" "}<span className={styles.rightAlign}>2022</span>
        </li>
        <li>
          <i>Korean user group for</i> <code>Stan</code> <i>(Stan Korea)</i>{" "}
          <span className={styles.rightAlign}>2017 - 2020</span>
        </li>
        <li>
          <i>The 58th Student Council of Seoul National University</i>{" "}
          <span className={styles.rightAlign}>2016</span>
        </li>
        <li>
          Founder and President of <i>SNU Industrial Mathematics Club (REPIM)</i>{" "}
          <span className={styles.rightAlign}>2015 - 2016</span>
        </li>
        <li>
          Operating Committee of <i>the 33th Student Council of College of Natural Sciences, Seoul National University</i>{" "}
          <span className={styles.rightAlign}>2014 - 2015</span>
        </li>
        <li>
          Founder and President of <i>the first Student Council of Department of Mathematics, Seoul National University</i>{" "}
          <span className={styles.rightAlign}>2014 - 2015</span>
        </li>
        <li>
          <i>Seoul National University Photography Club (Youngsang)</i>{" "}
          <span className={styles.rightAlign}>2013 - 2018</span>
        </li>
      </ul>
    </div>
      <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="CV" />

export default CvPage

