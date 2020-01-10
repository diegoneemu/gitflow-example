import React from "react";

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  return (
    <div id="header">
      <img id="logo" src="logo.svg" />
      <ul id="main-nav">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Imagens</a>
        </li>
        <li>
          <a href="#">Vídeos</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
      </ul>
    </div>
  );
};
