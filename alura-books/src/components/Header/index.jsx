import Logo from "../Logo";
import perfil from '../../assets/perfil.svg';
import sacola from '../../assets/sacola.svg';
import './styles.css';

export default function Header() {
  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "Books", link: "#books" },
    { name: "About", link: "#about" },
  ];

  const menuIcons = [
    { name: "Books", icon: sacola },
    { name: "About", icon: perfil },
  ];

  return (
    <header className="App-header">
      <Logo />
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.name}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
        <ul>
          {menuIcons.map((item) => (
            <li className="icon" key={item.name}>
              <img src={item.icon} alt={item.name} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
