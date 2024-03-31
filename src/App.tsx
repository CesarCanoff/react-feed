import "./global.css";

import STYLES from "./App.module.css";

import { Header } from "./components/Header.tsx";
import { Post } from "./components/Post.tsx";
import { Sidebar } from "./components/Sidebar.tsx";

import { posts } from "./data/database.ts";

export function App() {
  return (
    <>
      <Header />

      <div className={STYLES.wrapper}>
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>

        <div className={STYLES.sideBar}>
          <Sidebar />
        </div>
      </div>
    </>
  );
}
