import utilStyles from '../styles/utils.module.css'
import { DiGithubBadge } from 'react-icons/di'


export default function Github() {
  return (
    <>
      <a
        className={utilStyles.aColorBlk}
        href="https://github.com/darnelldugger"
      >
        <DiGithubBadge
          className={utilStyles.iconXl}
        />
        <p
        className={utilStyles.iconText}
        >Github</p>
      </a>
    </>
  )
}
