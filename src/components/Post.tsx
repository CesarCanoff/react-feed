import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import STYLES from "./Post.module.css";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface ContentProps {
  type: 'paragraph' | 'link';
  content: string
}

interface PostProps {
  author: Author;
  content: ContentProps[];
  publishedAt: Date;
}

interface CommentsProps {
  text: string;
  timestamp: Date;
}

export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState<CommentsProps[]>([]);
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

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    const currentDate = new Date();

    const newComment = {
      text: newCommentText,
      timestamp: currentDate,
    };

    setComments([...comments, newComment]);
    setNewCommentText("");
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete: string) {
    setComments(comments.filter((comment) => comment.text !== commentToDelete));
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Comment cannot be empty.");
  }

  return (
    <article className={STYLES.post}>
      <header>
        <div className={STYLES.author}>
          <Avatar src={author.avatarUrl} />

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
              key={comment.text}
              content={comment.text}
              timestamp={comment.timestamp}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
