import "./styles.css";

import perfil from "../../assets/perfil.svg";
import sacola from "../../assets/sacola.svg";

import styled from "styled-components";

const Icones = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const menuItems = [
  { name: "Home", link: "#home" },
  { name: "Books", link: "#books" },
  { name: "About", link: "#about" },
];

const menuIcons = [
  { name: "Books", icon: sacola },
  { name: "About", icon: perfil },
];

export default function Nav() {
  return (
    <nav>
      <Icones>
        {menuItems.map((item) => (
          <li key={item.name}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </Icones>
      <Icones>
        {menuIcons.map((item) => (
          <li className="icon" key={item.name}>
            <img src={item.icon} alt={item.name} />
          </li>
        ))}
      </Icones>
    </nav>
  );
}
