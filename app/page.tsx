
import styles from './page.module.css';

export default function Homepag() {
  return (
    <div className={styles.container}>

      <h1 className={styles.Home}>This is Home page</h1>
      <ul>
      <li> <a href="/" >Home </a></li>
        <li> <a href="/about">About</a> </li>
        <li><a href="/contact">Contact</a>  </li>
        <li> <a href="/projects" >Projects</a></li>
        <li> <a href="/projects/project01" >Nested Project</a></li>
      </ul>

    </div>
  );
}
