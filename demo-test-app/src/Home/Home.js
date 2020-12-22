import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Series from '../assets/images/series.jpg';
import Movies from '../assets/images/movies.jpg';
import classes from './Home.module.css';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

class home extends Component {

    render () {
        
        return (
            <MDBContainer className={classes.Container}>
                <MDBRow>
                    <MDBCol md="4" >
                        <NavLink exact activeClassName="active_class" to='/series'>
                            <img className={classes.Home} src={Series} alt="Series" />
                        </NavLink>
                        <NavLink exact activeClassName="active_class" to='/series'>
                            <h3 className={classes.h3}>
                                Series
                            </h3>
                        </NavLink>
                    </MDBCol>
                    <MDBCol md="4">
                        <NavLink exact activeClassName="active_class" to='/series'>
                            <img className={classes.Home} src={Movies} alt="Movies" />
                        </NavLink>
                        <NavLink exact activeClassName="active_class" to='/movies'>
                            <h3 className={classes.h3}>Movies</h3>
                        </NavLink>
                    </MDBCol>
                </MDBRow>  
            </MDBContainer>
        );
    }
}

export default home;