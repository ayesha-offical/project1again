import styles from './contact.module.css';

const Contactpag = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.contact}>Contact Us</h1>
      {/* contact page

      Add your form here * */}
      <form className={styles.form}>
        <input className={styles.name}type="text" placeholder="Your Name" />
        <input  className={styles.name}type="email" placeholder="Your Email" />
        <textarea className={styles.message}placeholder="Your Message" />
        <button className={styles.submit}>Submit</button>
      </form>

    </div>
  )
}

export default Contactpag