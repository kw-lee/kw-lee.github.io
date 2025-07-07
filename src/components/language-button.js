import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./language-button.module.css"

const getLanguagePath = (currentPath, targetLang) => {
  // 현재 경로가 없거나 '/'인 경우 루트 경로로 간주
  if (!currentPath || currentPath === "/") {
    return `/${targetLang}/`;
  }
  
  // 현재 경로에서 언어 코드 부분을 추출하여 대상 언어로 교체
  const pathParts = currentPath.split('/').filter(part => part);
  
  if (pathParts.length > 0) {
    pathParts[0] = targetLang;
    return `/${pathParts.join('/')}/`;
  }
  
  return `/${targetLang}/`;
};

const LanguageButton = ({ currentPath }) => {
  const [path, setPath] = React.useState('/');
  
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setPath(currentPath || window.location.pathname);
    }
  }, [currentPath]);
  
  const enPath = getLanguagePath(path, 'en');
  const koPath = getLanguagePath(path, 'ko');
  
  return (
    <div className={styles.langSwitch}>
      <Link to={enPath} className={path.includes('/en/') ? styles.active : ''}>English</Link>
      {' | '}
      <Link to={koPath} className={path.includes('/ko/') ? styles.active : ''}>한국어</Link>
    </div>
  );
};

export default LanguageButton;