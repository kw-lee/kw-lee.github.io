import * as React from "react"
import * as styles from "./index.module.css"
import links from "./link"

// 언어별 콘텐츠 가져오기
import enLinks from "../content/en/links.json"
import koLinks from "../content/ko/links.json"

const LinkList = ({ language = "en" }) => {
  // const translations = language === "ko" ? koLinks : enLinks;
  // later..
  const translations = enLinks;
  
  return (
    <div className={styles.linkList}>
      {links.map((link, index) => {
        // 아이콘 및 베이스 URL은 그대로 유지하고 텍스트만 번역
        const linkKey = Object.keys(translations)[index];
        const translatedText = translations[linkKey]?.text || link.text;
        const translatedDesc = translations[linkKey]?.description || link.description;
        
        return (
          <div key={link.url} className={styles.listItem}>
            {link.icon && <link.icon className={styles.listItemIcon} />}
            <span>
              <a
                className={styles.listItemLink}
                href={link.url}
                onClick={link.onClick}
                rel={link.isExternal ? "noopener noreferrer" : ""}
                target={link.isExternal ? "_blank" : ""}
                aria-label={translatedDesc}
              >
                {translatedText}
              </a>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default LinkList;