import { useState } from "react";
import { ThumbsUp, Trash } from "phosphor-react";

import STYLES from "./Comment.module.css";

import { Avatar } from "./Avatar";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((prevLikeCount) => prevLikeCount + 1);
  }

  return (
    <div className={STYLES.comment}>
      <Avatar
        hasBorder={false}
        avatarUrl="https://www.github.com/CesarCanoff.png"
      />

      <div className={STYLES.commentBox}>
        <div className={STYLES.commentContent}>
          <header>
            <div className={STYLES.authorAndTime}>
              <strong>César Canoff</strong>
              <time title="14 de Abril às 15:33" dateTime="2023-03-11 07:13:54">
                Cerca de 1 hora atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={18} />
            Like <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
