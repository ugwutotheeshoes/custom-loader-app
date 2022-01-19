import Nextimage from "./components/Nextimage";
import Cloudinary from "./components/Cloudinaryimage";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Image Optimization</h1>
      <main className={styles.main}>
      <Nextimage />
      <Cloudinary />
      </main>
    </div>
  );
}
