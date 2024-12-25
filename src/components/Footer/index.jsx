import "./styles.scss";

const Footer = () => {
  return (
    <div className='footer'>
      <span className='footer__text'>
        © {new Date().getFullYear()} - Wesley Costa - Todos os direitos
        reservados
      </span>
    </div>
  );
};

export default Footer;
