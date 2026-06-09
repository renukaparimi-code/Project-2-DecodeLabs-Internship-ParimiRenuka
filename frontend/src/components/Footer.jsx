import "../styles/Footer.css";

function Footer() {

  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-about">

          <h1>NeuroConnect</h1>

          <p>
            NeuroConnect is an interactive platform
            to explore the human nervous system,
            neurons and brain components through
            modern web technology.
          </p>

        </div>

        <div className="footer-links">

          <h2>Quick Links</h2>

          <a href="/">Home</a>

          <a href="/explorer">Explorer</a>

          <a href="/admin">Admin</a>

        </div>

        <div className="footer-contact">

          <h2>Contact</h2>

          <p>Email: neuroconnect@gmail.com</p>

          <p>Phone: +91 9876543210</p>

          <p>Location: India</p>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 NeuroConnect. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;