import { useState } from "react";

import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import STYLES from "./Post.module.css";

export function Post({ author, content, publishedAt }) {
  // const publishedDateFormatted = new Intl.DateTimeFormat("pt-BR", {
  //   day: "2-digit",
  //   month: "long",
  //   hour: "2-digit",
  //   minute: "2-digit",
  // }).format(new Date(publishedAt));
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState("");

  const isNewCommentEmpty = newCommentText.trim() === "";

  const publishedDateFormatted = format(
    new Date(publishedAt),
    "dd 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment() {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete) {
    setComments(comments.filter((comment) => comment !== commentToDelete));
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity("Comment cannot be empty.");
  }

  return (
    <article className={STYLES.post}>
      <header>
        <div className={STYLES.author}>
          <Avatar avatarUrl={author.avatarUrl} />

          <div className={STYLES.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={STYLES.content}>
        {content.map((item) => {
          if (item.type === "paragraph") {
            return <p key={item.content}>{item.content}</p>;
          } else if (item.type === "link") {
            return (
              <a key={item.content} href={item.content} target="_blank">
                {item.content}
              </a>
            );
          }
        })}
      </div>

      <form
        onSubmit={handleCreateNewComment}
        action="#"
        className={STYLES.commentForm}
      >
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um comentário"
          name="comment"
          onChange={handleNewCommentChange}
          value={newCommentText}
          required
          onInvalid={handleNewCommentInvalid}
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={STYLES.commentsList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
