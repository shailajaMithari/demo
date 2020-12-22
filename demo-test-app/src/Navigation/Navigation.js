import React from 'react';
import classes from './Navigation.module.css';

const Navigation = () => {
    return (
        <div className={classes.headerSection}>
            <div className={classes.headerTop}>
                <div className={classes.container}>
                    <div className={classes.headContainer}>
                        <div className={classes.brandName}>
                            <a  href="/">DEMO Streaming</a>
                        </div>
                        <div className={classes.loginTrial}>
                            <ul className={classes.ul}>
                                <li className={classes.li}>
                                    <a  className={classes.a} href="/">Home</a>
                                </li>
                                <li className={classes.li}>
                                    <a className={classes.a} href="/movies">Movies</a>
                                </li>
                                <li className={classes.li}>
                                    <a className={classes.a} href="/series">Series</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.headerSub}>
                <div>
                    <div>
                        <h3 className={classes.h3}>Populer Titles</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;