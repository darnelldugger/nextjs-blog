import utilStyles from '../styles/utils.module.css'
import { BsGithub } from 'react-icons/bs'


export default function Github() {
  return (
    <>
      <a
        className={utilStyles.aColorBlk}
        href="https://github.com/darnelldugger"
      >
        <BsGithub
          className={utilStyles.iconXl}
        />
      </a>
    </>
  )
}
