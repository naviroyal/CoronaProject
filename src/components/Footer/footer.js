import React from 'react';
import './footer.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css'
function Footer() {
    return(
        <footer className="footer-distributed">

			<div className="footer-left">

				<h3><span style={{color:'black'}}>&#9760;</span>Covid<span> Tracker</span></h3>

				<p className="footer-links">
					<a href="#" className="link-1">Home</a>
					<a href="#">About</a>
					<a href="#">Faq</a>
					<a href="#">Contact</a>
				</p>

				<p className="footer-company-name">Company Name © 2020</p>
			</div>

			<div className="footer-center">

				<div>
					<i className="fa fa-map-marker"></i>
					<p><span>444 S. Cedros Ave</span> Banglore, India</p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p>+1.555.555.5555</p>
				</div>

				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">naviroyal909098@gmail.com</a></p>
				</div>

			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<span>About the company</span>
					I am a B.tech Student as of now we all are stuck in our homes and we have nothing to do so i utilize my time in making this corona tracker webapp.
				</p>

				<div className="footer-icons">
					<a href="https://www.facebook.com/profile.php?id=100011014504407"><i className="fa fa-facebook"></i></a>
					<a href="#"><i className="fa fa-twitter"></i></a>
					<a href="https://www.linkedin.com/in/navdeep-singh-684632168/"><i className="fa fa-linkedin"></i></a>
					<a href="#"><i className="fa fa-github"></i></a>

				</div>

			</div>

		</footer>
    );
}

export default Footer;