
import Footer from '../components/Footer2'
import { useLocation } from 'react-router'
const FooterPage = () => {
    const location = useLocation()
  return (
    <>
        {location.pathname !== '/' ? <Footer/> : ''}
    </>
    )
}

export default FooterPage