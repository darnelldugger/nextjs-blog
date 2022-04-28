import utilStyles from '../styles/utils.module.css'
import { TiSocialLinkedin } from 'react-icons/ti'


export default function LinkedIn() {
  return (
    <>
      <a
        className={utilStyles.aColorBlk}
        href="https://www.linkedin.com/in/darnelldugger/"
      >
        <TiSocialLinkedin
          className={utilStyles.iconXl}
        />
        <p
        className={utilStyles.iconText}
        >LinkedIn</p>
      </a>
    </>
  )
}
