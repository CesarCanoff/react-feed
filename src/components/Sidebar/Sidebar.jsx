import { PencilLine } from "phosphor-react";

import STYLES from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={STYLES.sidebar}>
      <img
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className={STYLES.cover}
      />

      <div className={STYLES.profile}>
        <img
          className={STYLES.avatar}
          src="https://github.com/CesarCanoff.png"
          alt="User profile picture"
        />

        <strong>César Canoff</strong>
        <span>Programmer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
