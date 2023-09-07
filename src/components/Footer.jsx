import LogoKasaBlanc from "../assets/img/LogoKasaBlanc.png";

function Footer() {
  return (
    <footer className="main-footer">
      <div className="logo-footer">
        <img src={LogoKasaBlanc} alt="Logo du site" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}
export default Footer;
