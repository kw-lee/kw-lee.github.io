import * as React from "react"
import { navigate } from "gatsby"

const IndexRedirectPage = () => {
  React.useEffect(() => {
    const userLang = typeof window !== 'undefined' && window.navigator ? 
      window.navigator.language || window.navigator.userLanguage : 'en';
    
    if (userLang.startsWith('ko')) {
      navigate('/ko/');
    } else {
      navigate('/en/');
    }
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <p>Redirecting...</p>
    </div>
  );
};

export default IndexRedirectPage;
