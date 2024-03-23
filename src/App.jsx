import "./global.css";

import STYLES from "./App.module.css";

import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post";
import { Sidebar } from "./components/Sidebar/Sidebar";

export function App() {
  return (
    <>
      <Header />
      
      <div className={STYLES.wrapper}>
        <main>
          <Post
            author="Anna Crisp"
            content="I'm learning how to use CSS modules."
          />
        </main>

        <Sidebar />
      </div>
    </>
  );
}
