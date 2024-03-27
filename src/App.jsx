import "./global.css";

import STYLES from "./App.module.css";

import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import { posts } from "./data/database";

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
