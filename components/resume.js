import utilStyles from '../styles/utils.module.css'
import { DiGoogleDrive } from 'react-icons/di'

export default function Resume() {
  return (

    <>
      <a
        className={utilStyles.aColorBlk}
        href="https://docs.google.com/document/d/1vHNBdOKd2mUuThLuyssR3N8pG3rnrXE-8ymSdtDFLi8/edit?usp=sharing"
      >
        <DiGoogleDrive
        className={utilStyles.iconXl}
        />
        <p
        className={utilStyles.iconText}
        >Resume</p>
      </a>
    </>
  )
}