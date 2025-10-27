import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../../components/cv.module.css"
import links from "../../components/link"
import LanguageButton from "../../components/language-button"

const CvPage = ({ location }) => (
  <Layout>
      <div className={styles.topBox}>
      <StaticImage
        src="../../images/kwlee.jpeg"
        loading="eager"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        className={styles.profileImage}
      />
      <div className={styles.titleBox}>
      <h1 className={styles.title}>
        이경원
      </h1>
      <p className={styles.intro}>
        <b>박사후연구원</b> <br />
        메릴랜드 대학교 수학과
      </p>
      <LanguageButton currentPath={location?.pathname} />
      <div className={styles.linkList}>
        {links.map(link => (
          <div key={link.url} className={styles.listItem}>
            {link.icon && <link.icon className={styles.listItemIcon} />}
            <span><a
              className={styles.listItemLink}
              href={link.url}
            >
              {link.text}
            </a></span>
          </div>
        ))}
      </div>
      </div>
      </div>
      <div className={styles.cvBox}>
        <h2>소개</h2>
        <hr className={styles.borderLine}></hr>
        <p className={styles.cvDescription}>메릴랜드 대학교 수학과 Lizhen Lin 교수님 연구팀에서 박사후연구원으로 근무하고 있습니다. 서울대학교 통계학과에서 이재용 교수님의 지도하에 박사 학위를 취득했습니다. 주요 연구 분야는 고차원 베이즈 모형, 비모수 베이즈 방법론, 점근 이론, 베이즈 계산 방법 등이며 베이즈 통계학 전반에 관심을 가지고 연구하고 있습니다.</p>
      </div>
      <div className={styles.cvBox}>
        <h2>학력</h2>
        <hr className={styles.borderLine}></hr>
        <ul>
          <li>통계학 박사: 2024년 2월, 서울대학교, 대한민국
            <ul>
              <li>지도교수: 이재용 교수</li>
              <li>논문: 지도학습에서 베이즈 신경망 모형의 점근적 성질에 대한 연구</li>
            </ul>
          </li>
          <li>수학 학사: 2017년 2월, 서울대학교, 대한민국</li>
          <li>통계학 학사: 2017년 2월, 서울대학교, 대한민국</li>
        </ul>
      </div>
      <div className={styles.cvBox}>
        <h2>경력</h2>
        <hr className={styles.borderLine}></hr>
        <ul>
          <li>박사후 연구원, 메릴랜드 대학교 수학과, 미국 메릴랜드 칼리지 파크, 2024년 8월 - 현재</li>
          <li>박사후 연구원, 연세대학교 통계데이터사이언스학과, 서울, 대한민국, 2024년 3월 - 2024년 8월</li>
        </ul>
      </div>
      <div className={styles.cvBox}>
        <h2>수상 및 장학금</h2>
        <hr className={styles.borderLine}></hr>
        <ul>
          <li>2023 T-SM Best Paper Award, IEEE Transactions on Semiconductor Manufacturing, 2023</li>
          <li>우수 조교상, 서울대학교 통계학과, 2024</li>
          <li>대학원생 발표논문상 1등, 한국통계학회 하계학술대회, 2023</li>
          <li>우수 조교상, 서울대학교 통계학과, 2021</li>
          <li>학문후속세대 장학금, 서울대학교, 2019</li>
        </ul>
      </div>
      <div className={styles.cvBox}>
        <h2>논문</h2>
        <hr className={styles.borderLine}></hr>
        <ul>
          <li>K. Lee, S. Jo, <b>K. Lee</b>, and J. Lee (2025+). Scalable and optimal Bayesian inference for sparse covariance matrices via screened beta-mixture prior. Bayesian Analysis, Accepted.</li>
          <li><b>K.Lee</b>, L.Lin, J. Park, and S. Jeong (2025). Posterior Contraction for Sparse Neural Networks in Besov Spaces with Intrinsic Dimensionality. <i>Advances in Neural Information Processing Systems</i>, Accepted. [<a href="https://arxiv.org/abs/2506.19144">Arxiv</a>]</li>
          <li><b>K. Lee</b>, K. Lee, K. Lee, and S. Jo (2025). bspcov: An R Package for Bayesian Sparse Covariance Matrix Estimation. <i>SoftwareX</i>, 32.</li>
          <li>S. Park, <b>K. Lee</b>, D. Jeong, H. Ko, and J. Lee. (2023). Bayesian nonparametric classification for incomplete data with a high missing rate: an application to semiconductor manufacturing data. <i>IEEE Transactions on Semiconductor Manufacturing</i>, 36(2), 170-179.</li>
          <li>K. Kim., M. Ma, and <b>K. Lee</b> (2023). Prediction of spatio-temporal AQI data. <i>Communications for Statistical Applications and Methods</i>, 30(2), 119-133.</li>
          <li><b>K. Lee</b>, and J. Lee. (2022). Asymptotic properties for Bayesian neural network in Besov space. <i>Advances in Neural Information Processing Systems</i>, 35.</li>
          <li>S. Lee, S. Han, S. Park, <b>K. Lee</b>, and J. Lee. (2019). Korean speech recognition using deep learning. <i>The Korean Journal of Applied Statistics</i>, 32(2), 213-227.</li>
        </ul>
      </div>
      <div className={styles.cvBox}>
        <h2>학회 발표</h2>
        <hr className={styles.borderLine}></hr>
        <ul>
          <li>Bayesian Sparse Neural Networks in General Besov Spaces with Intrinsic Dimensions
            <ul>
              <li>2025 14th International Conference on Bayesian Nonparametrics</li>
            </ul>
          </li>
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
        <h2>강의</h2>
        <hr className={styles.borderLine}></hr>
        <h3>강의</h3>
        <ul>
          <li>메릴랜드 대학교, 칼리지 파크, 미국, 2024 - 현재
            <ul>
              <li>STAT401: Applied Statistics and Probability II</li>
              <li>STAT410: Introduction to Probability Theory</li>
            </ul>
          </li>
          <li>휴마인, 대한민국, 2020 - 2022
            <ul>
              <li>데이터 사이언스 입문</li>
            </ul>
          </li>
          <li>패스트캠퍼스, 대한민국, 2018 - 2019
            <ul>
              <li>머신러닝을 위한 통계 및 베이즈 추론</li>
            </ul>
          </li>
        </ul>
        <h3>조교</h3>
        <ul>
          <li>한국방송통신대학교, 대한민국
            <ul>
              <li>베이즈 데이터 분석</li>
            </ul>
          </li>
          <li>서울대학교, 대한민국
            <ul>
              <li>통계학</li>
              <li>통계학 실험 [<a href="https://kw-lee.github.io/033_020_010-2018fall">강의 자료</a>]</li>
              <li>수리통계학</li>
              <li>통계학 이론</li>
              <li>고급 베이즈 통계학</li>
            </ul>
          </li>
          <li>서울대학교 통계연구소, 대한민국
            <ul>
              <li>R/Python을 활용한 데이터 사이언스</li>
            </ul>
          </li>
        </ul>
        <h3>자원봉사 교육 경험</h3>
        <ul>
          <li>과학봉사단, 서울대학교 자연과학대학, 대한민국, 2014 - 2015</li>
          <li>교육봉사, 씨라이트 에듀 (서울대학교 사회봉사과목), 대한민국, 2015</li>
        </ul>
      </div>
      <div className={styles.cvBox}>
        <h2>연구 프로젝트</h2>
        <hr className={styles.borderLine}></hr>
        <div>
          <p>
            <i>
              <strong>Asymptotic analysis of deep generative models</strong>
            </i>
            <br />
            <i>Lizhen Lin 교수님과 공동 연구, 2024 -.</i>
          </p>
        </div>
        <div>
          <p>
            <i>
              <strong>Asymptotic properties and applications of sparse Bayesian neural networks</strong>
            </i>
            <br />
            <i>이재용 교수님과 공동 연구, 2018 -.</i>
          </p>
        </div>
        <div>
          <p>
            <i>
              <strong>Scalable and optimal Bayesian inference for high-dimensional sparse covariance matrices</strong>
            </i>
            <br />
            <i>조성일, 이광민, 이경재, 이재용 교수님과 공동 연구, 2023 -.</i>
          </p>
        </div>
        <div>
          <p>
            <i>
              <strong>Bayesian nonparametric classification for incomplete data with a high missing rate</strong>
            </i>
            <br />
            <i>정다은, 고흥국, 박세원, 이재용 교수님과 공동 연구이며 삼성전자의 지원을 받음, 2021 - 2023.</i>
          </p>
        </div>
        <div>
          <p>
            <i>
              <strong>구조적 종속성의 통계적 추론</strong>
            </i>
            <br />
            <i>김경은, 마미루와 공동 연구, 2021 - 2023.</i>
          </p>
        </div>
        <div>
          <p>
            <i>
              <strong>딥러닝을 이용한 한국어 음성인식</strong>
            </i>
            <br />
            <i>이수지, 한석진, 박세원, 이재용 교수님과 공동 연구, 2017 - 2019.</i>
          </p>
        </div>
        <h2>비연구 프로젝트</h2>
        <hr className={styles.borderLine}></hr>
        <div>
          <p>
            <i>
              <strong>신뢰성 시험 중 불량 발생 위험에 대한 통계적/확률적 연구 및 추가 샘플링을 통한 위험 감소 방안</strong>
            </i>
            <br />
            삼성전자, 2021.
          </p>
        </div>
        <div>
          <p>
            <i>
              <strong>공동주택 실거래가격지수 확대를 위한 지수작성방법 개선에 관한 연구</strong>
            </i>
            <br />
            한국부동산원, 2020 - 2021.
          </p>
        </div>
        <div>
          <p>
            <i>
              <strong>딥 생성 모델을 이용한 신약 디자인</strong>
            </i>
            <br />
            <i>이 연구는 2018년 봄학기 326.739A 수업의 팀 프로젝트로 발표되었으며, 한석진, 이효신, 최서원과 공동 작업, 2018.</i>
          </p>
        </div>
      </div>

      <div className={styles.cvBox}>
        <h2>기술 및 기타 정보</h2>
        <hr className={styles.borderLine}></hr>
        <h3>프로그래밍 언어</h3>
        <p>
          <code>Python</code>, <code>R</code>, <code>Julia</code>, <code>C++</code>
        </p>
        <h3>기술적 능력</h3>
        <ul>
          <li>
            계산 수학 프레임워크 (<code>Rcpp</code>, <code>NumPy</code>,{" "}
            <code>SciPy</code>, <code>JAX</code>)
          </li>
          <li>
            데이터 분석 및 시각화 (<code>dplyr</code>/<code>pandas</code>,{" "}
            <code>ggplot2</code>/<code>matplotlib</code>)
          </li>
          <li>
            딥러닝 프레임워크 (<code>TensorFlow</code>, <code>PyTorch</code>)
          </li>
          <li>
            확률적 프로그래밍 언어 (<code>BUGS</code>/<code>JAGS</code>, <code>Stan</code>,{" "}
            <code>Pyro</code>/<code>NumPyro</code>)
          </li>
          <li>
            문서화 (LaTeX) 및 웹 (<code>HTML</code>, <code>CSS</code>, <code>JS</code>,{" "}
            <code>React</code>)
          </li>
          <li>
            <code>Docker</code>, <code>Git</code>, <code>OpenMP</code>, <code>CUDA</code> 등
          </li>
        </ul>
        <h3>소프트웨어</h3>
        <ul>
            <li>R Package <code>bspcov</code>: Bayesian Sparse Estimation of a Covariance Matrix. [<a href="https://github.com/statjs/bspcov">GitHub</a>] [<a href="https://cran.r-project.org/web/packages/bspcov/index.html">CRAN</a>]</li>
          <li>이 웹사이트는 <code>Gatsby</code>와 <code>React</code>로 만들어졌습니다. [<a href="https://github.com/kw-lee/kw-lee.github.io">GitHub</a>]</li>
        </ul>
        <h3>운영체제</h3>
        <p>
          <code>MacOS</code>, <code>Windows</code>,{" "}
          <code>GNU/Linux</code> (<code>Debian</code>, <code>CentOS</code>, <code>Arch</code>)
        </p>
        <h3>대외활동</h3>
        <ul>
          <li>
            <i>서울대학교 컴퓨터 연구회 (SCSC)</i>{" "}<span className={styles.rightAlign}>2022</span>
          </li>
          <li>
            <i>한국 </i> <code>Stan</code> <i>사용자 그룹 (Stan Korea)</i>{" "}
            <span className={styles.rightAlign}>2017 - 2020</span>
          </li>
          <li>
            <i>제58대 서울대학교 총학생회 (디테일)</i>{" "}
            <span className={styles.rightAlign}>2016</span>
          </li>
          <li>
            <i>서울대학교 산업수학동아리 (REPIM)</i> 창립 및 회장{" "}
            <span className={styles.rightAlign}>2015 - 2016</span>
          </li>
          <li>
            <i>제33대 서울대학교 자연과학대학 학생회</i> 운영위원{" "}
            <span className={styles.rightAlign}>2014 - 2015</span>
          </li>
          <li>
            <i>서울대학교 수리과학부 제1대 학생회</i> 창립 및 회장{" "}
            <span className={styles.rightAlign}>2014 - 2015</span>
          </li>
          <li>
            <i>서울대학교 사진동우회 영상</i>{" "}
            <span className={styles.rightAlign}>2013 - 2018</span>
          </li>
        </ul>
      </div>
      
      <div className={styles.navButtons}>
        <Link to="/ko/" className={styles.navButton}>홈으로 돌아가기</Link>
      </div>
  </Layout>
)

export const Head = () => <Seo title="이력서" />

export default CvPage