import React from 'react';
import footerClasses from './Footer.module.css'
import { MDBCol, MDBRow, MDBFooter } from "mdbreact";


const Footer = () => {
    return (
        <div className={footerClasses.Footer}>
            <MDBFooter>
                <MDBRow>
                    <MDBCol className={footerClasses.footerSection}>
                        <div className={footerClasses.footerLink}>
                            <ul className={footerClasses.ul}>
                                <li><a className={footerClasses.a} href="/">Home</a></li> |
                                <li><a className={footerClasses.a} href="/">Privacy Policy</a></li> | 
                                <li><a className={footerClasses.a} href="/">Collectin Statement</a></li> |
                                <li><a className={footerClasses.a} href="/">Term and Conditions</a></li> |
                                <li><a className={footerClasses.a} href="/">Help</a></li> | 
                                <li><a className={footerClasses.a} href="/">Privacy Policy</a></li> |
                                <li><a className={footerClasses.a} href="/">Manage Account</a></li>
                            </ul>
                        </div>
                        <p className={footerClasses.copyRight}>Copyright © 2016 Demo Streaming. All Rights Reserved</p>
                    </MDBCol>
                </MDBRow>
            </MDBFooter>
        </div>
    );
}

export default Footer;