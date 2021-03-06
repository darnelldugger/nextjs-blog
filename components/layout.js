import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Resume from './resume'
import Contact from './contact'
import LinkedIn from './linkedin'
import Github from './github'
const name = 'Darnell Dugger'
export const siteTitle = 'Darnell Dugger - Portfolio Website'

export default function Layout({ children, home }) {
  return (
    <>
      <div className={styles.container}>
        <Head>

          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Welcome to my portfolio, built with Next.js"
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
          <script src="https://kit.fontawesome.com/219a77197a.js" crossorigin="anonymous"></script>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        </Head>
        <header className={styles.header}>
          {home ? (
            <>
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={200}
                width={200}
                alt={name}
              />
              <h1 className={`${utilStyles.headingXl} ${utilStyles.lightText}`}>{name}</h1>
              <ul className={utilStyles.listHeader}>
                <li><Resume/></li>
                <li><Contact/></li>
                <li><LinkedIn/></li>
                <li><Github/></li>
              </ul>
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <Image
                    priority
                    src="/images/profile.jpg"
                    className={utilStyles.borderCircle}
                    height={166}
                    width={166}
                    alt={name}
                  />
                </a>
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/">
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h2>
              <ul className={utilStyles.listHeader}>
                <li><Resume/></li>
                <li><Contact/></li>
                <li><LinkedIn/></li>
                <li><Github/></li>
              </ul>
            </>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>??? Back to home</a>
              
            </Link>
          </div>
        )}
      </div>
    </>
  )
}