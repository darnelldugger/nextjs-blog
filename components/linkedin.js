import utilStyles from '../styles/utils.module.css'
import { AiOutlineLinkedin } from 'react-icons/ai'


export default function LinkedIn() {
  return (
    <>
      <a
        className={utilStyles.aColorBlk}
        href="https://www.linkedin.com/in/darnelldugger/"
      >
        <AiOutlineLinkedin
          className={utilStyles.headingLg}
        />
      </a>
    </>
  )
}
