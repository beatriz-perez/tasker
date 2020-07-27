import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'

export default function Layout({ children, home }) {
    return (
    <div className={styles.container}>
        <p className={utilStyles.hello}>Hello</p>
        <header>
        {home ? (
          <>
            <h1>estás en Home</h1>
          </>
        ) : (
          <>
            <h1>NO estás en Home</h1>
          </>
        )}

        </header>
        {children}
        {!home && (
            <div className={styles.backToHome}>
            <Link href="/">
                <a>← Back to home</a>
            </Link>
            </div>
        )}
    </div>
    )
}