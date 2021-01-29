import React from 'react';



const Footer = () => {
    return (


        <div className="container">
            <section style={{height: '80px'}}></section>

            {/* <!----------- Footer ------------> */}
            <footer className="footer-bs">
                <div className="row">
                    <div className="col-md-3 footer-brand animated fadeInLeft">
                        <h2>Lillian Paris</h2>
                        <p>Suspendisse hendrerit tellus laoreet luctus pharetra. Aliquam porttitor vitae orci nec ultricies. Curabitur vehicula, libero eget faucibus faucibus, purus erat eleifend enim, porta pellentesque ex mi ut sem.</p>
                        <p>© 2014 BS3 UI Kit, All rights reserved</p>
                    </div>
                    <div className="col-md-4 footer-nav animated fadeInUp">
                        <h4>Menu —</h4>
                        <div className="col-md-6">
                            <ul className="pages">
                                <li><a href="#">Workday Scheduler</a></li>
                                <li><a href="#">Invitor +</a></li>
                                <li><a href="#">Note Taker</a></li>
                                <li><a href="#">Team Profile Generator</a></li>
                                <li><a href="#">Movie Eaters</a></li>
                                <li><a href="#">Password Generator</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul className="list">
                                <li><a href="#">React-Bootsrap</a></li>
                                <li><a href="#">JSX</a></li>
                                <li><a href="#">React</a></li>
                                <li><a href="#">SQL</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2 footer-social animated fadeInDown">
                        <h4>Contact Me</h4>
                        <ul>
                            <li><a href="#">Github</a></li>
                            <li><a href="#">Resume</a></li>
                            <li><a href="#">Email</a></li>
                            <li><a href="#">Linkedln</a></li>
                            <li><a href="#">Twitter</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 footer-ns animated fadeInRight">
                        <h4>Thank You for Visiting</h4>
                        <p></p>
                       
                    </div>
                </div>
            </footer>
            <section style={{ textAlign: 'center', margin: '10px' }}><p>Designed by <a href="http://enfoplus.net">Prince J. Sargbah</a></p></section>

        </div>
        // Prince J. Sargbah Footing was designed by

    );
};

export default Footer;