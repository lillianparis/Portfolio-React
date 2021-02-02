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
                        <p>Full Stack Web Developer</p>
                        <p>© 2014 BS3 UI Kit, All rights reserved</p>
                    </div>
                    <div className="col-md-4 footer-nav animated fadeInUp">
                        <h4>Menu —</h4>
                        <div className="col-md-6">
                            <ul className="pages">
                                <li><a href="https://lillianparis.github.io/work-day-scheduler/">Workday Scheduler</a></li>
                                <li><a href="https://github.com/Erin-Leal/Project-2-Dionysus">Invitor +</a></li>
                                <li><a href="https://arcane-shore-48502.herokuapp.com/">Note Taker</a></li>
                                <li><a href="https://drive.google.com/file/d/1MxspBT2Xze1QpznwIGkqXLbvKcreYTV3/view?usp=sharing">Team Profile Generator</a></li>
                                <li><a href="https://daellarrek.github.io/Team-Grass/">Movie Eaters</a></li>
                                <li><a href="https://lillianparis.github.io/password-generator/">Password Generator</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul className="list">
                                <li><a href="https://react-bootstrap.github.io/">React-Bootsrap</a></li>
                                <li><a href="https://www.npmjs.com/package/jsx">JSX</a></li>
                                <li><a href="https://www.npmjs.com/package/react">React</a></li>
                                <li><a href="https://www.npmjs.com/package/sql">SQL</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2 footer-social animated fadeInDown">
                        <h4>Contact Me</h4>
                        <ul>
                            <li><a href="https://github.com/lillianparis">Github</a></li>
                            <li><a href="./Resume">Resume</a></li>
                            <li><a href="lillian.paris529@gmail.com">Email</a></li>
                            <li><a href="https://www.linkedin.com/in/lillian-paris-7340401b4">Linkedln</a></li>
                            <li><a href="https://twitter.com/lilliannpar">Twitter</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 footer-ns animated fadeInRight">
                        <h4>Thank You for Visiting</h4>
                        <h4>Email: lillian.paris529@gmail.com</h4>
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