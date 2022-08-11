import "./Navbar.css";

import sacola from "assets/icons/sacola.svg";

import logo from "assets/logo.svg";

function Navbar({ createPaleta }) {
  return (
    <div className="Header">
      <div className="row">
        <div className="Header__logo Logo">
          <img
            src={logo}
            width="70px"
            alt="Logo El Geladon"
            className="Logo__icone"
          />
          <span className="Logo__titulo"> El Geladon </span>
        </div>
        <div className="Header__opcoes Opcoes">
          <button
            type="button"
            className="Opcoes__paleta Paleta"
            onClick={() => createPaleta()}
          >
            <img
              src= "https://th.bing.com/th/id/R.8faad9c0e26663d34aabf46a480288e9?rik=hyTzyH9LoMLXBw&pid=ImgRaw&r=0"   
              width="40px"
              className="Paleta__icone"
              alt="Adiciionar paleta"
            />
          </button>

          <div className="Opcoes__sacola Sacola">
            <img
              src={sacola}
              width="40px"
              className="Sacola__icone"
              alt="Sacola de compras"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
