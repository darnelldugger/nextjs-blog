import utilStyles from '../styles/utils.module.css'

import { HiOutlineMail } from 'react-icons/hi'

export default function Contact() {
  return (
    <>
      <a
        className={utilStyles.aColorBlk}
        href="mailto:darnelldugger@gmail.com"
      >
       <HiOutlineMail
        className={utilStyles.iconXl}
        />
      </a>
      
    </>
  )
}
