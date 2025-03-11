import './Header.css';

function Footer(props) {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 border-top bg-white">
      <div className="col-md-4 d-flex align-items-center">
        <span>© {props.year}</span>
      </div>
      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3"><a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a></li>
        <li className="ms-3"><a href="http://x.com" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a></li>
        <li className="ms-3"><a href="http://instagram.com" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
        <li className="ms-3"><a href="http://linkedin.com" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a></li>
      </ul>
    </footer>
  );
}

export default Footer;
