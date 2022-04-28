import utilStyles from '../styles/utils.module.css'

import { MdOutlineMailOutline} from 'react-icons/md'

export default function Contact() {
  return (
    <>
      <a
        className={utilStyles.aColorBlk}
        href="mailto:darnelldugger@gmail.com"
      >
        <MdOutlineMailOutline
          className={utilStyles.iconXl}
        />
        <p
        className={utilStyles.iconText}
        >Email</p>
      </a>

    </>
  )
}
