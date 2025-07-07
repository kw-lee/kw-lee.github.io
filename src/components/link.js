import { navigate } from "gatsby"
import MailIcon from "../svg/fa-envelope-regular.svg"
import FileIcon from "../svg/fa-file-lines-regular.svg"
import GithubIcon from "../svg/fa-github-brands-solid.svg"
import LinkedInIcon from "../svg/fa-linkedin-brands-solid.svg"

const getLanguageFromPath = (path) => {
  const pathSegments = path.split('/').filter(segment => segment);
  return pathSegments[0] || 'en'; // 기본값은 영어
}

const handleCVClick = (e) => {
  e.preventDefault();
  const path = typeof window !== 'undefined' ? window.location.pathname : '';
  const lang = getLanguageFromPath(path);
  navigate(`/${lang}/cv/`);
}

const links = [
    {
      text: "kwlee@umd.edu",
      url: "mailto:kwlee@umd.edu",
      description: "Email",
      icon: MailIcon,
      isExternal: true
    },
    {
      text: "Curriculum Vitae",
      url: "#",
      description: "CV",
      icon: FileIcon,
      onClick: handleCVClick,
      isExternal: false
    },
    {
      text: "Github",
      url: "https://github.com/kw-lee",
      description: "Github",
      icon: GithubIcon,
      isExternal: true
    },
    {
      text: "LinkedIn",
      url: "https://www.linkedin.com/in/kyeongwon-lee/",
      description: "LinkedIn",
      icon: LinkedInIcon,
      isExternal: true
    }
]

export default links