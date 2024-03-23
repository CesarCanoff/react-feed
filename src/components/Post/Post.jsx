import STYLES from "./Post.module.css";

export function Post() {
  return (
    <article className={STYLES.post}>
      <header>
        <div className={STYLES.author}>
          <img
            src="https://github.com/CesarCanoff.png"
            className={STYLES.avatar}
          />
          <div className={STYLES.authorInfo}>
            <strong>Anna Coast</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="14 de Abril às 15:33" dateTime="2023-03-11 07:13:54">
          Publicado há 1 hora
        </time>
      </header>

      <div className={STYLES.content}>
        <p>Hello there!</p>
        <p>
          This is a great tech post discussing the latest advancements in
          artificial intelligence.
        </p>
        <p>
          <a href="#">anna.web/ia-projects</a>
        </p>
        <p>
          <a href="#">#ia #machine-learning #python-for-data</a>
        </p>
      </div>
    </article>
  );
}
