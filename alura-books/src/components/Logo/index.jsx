import logo from '../../assets/logo.svg';
import './styles.css';

export default function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="Logo Alura Books" />
      <p>Alura Books</p>
    </div>
  );
}
