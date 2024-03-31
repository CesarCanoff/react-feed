import { useState } from "react";
import { ThumbsUp, Trash } from "phosphor-react";

import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import STYLES from "./Comment.module.css";

import { Avatar } from "./Avatar";

interface CommentProps {
  content: string;
  timestamp: Date;
  onDeleteComment: (content: string) => void;
}

export function Comment({ content, timestamp, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((prevLikeCount) => prevLikeCount + 1);
  }

  const commentDateFormatted = format(
    new Date(timestamp),
    "dd 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const commentDateRelativeToNow = formatDistanceToNow(timestamp, {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <div className={STYLES.comment}>
      <Avatar hasBorder={false} src="https://www.github.com/CesarCanoff.png" />

      <div className={STYLES.commentBox}>
        <div className={STYLES.commentContent}>
          <header>
            <div className={STYLES.authorAndTime}>
              <strong>César Canoff</strong>
              <time
                title={commentDateFormatted}
                dateTime={timestamp.toISOString()}
              >
                {commentDateRelativeToNow}
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
