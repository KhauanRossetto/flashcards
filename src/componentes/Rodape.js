import React from "react";

export default function Rodape({ total, concluidas }) {
  return (
    <footer className="rodape">
      <span>{concluidas}/{total} CONCLUÍDOS</span>
    </footer>
  );
}