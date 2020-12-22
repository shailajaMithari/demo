import React, {Component} from 'react';
import classes from './Movies.module.css';
import { MDBCol, MDBRow, MDBContainer} from "mdbreact";
import axios from 'axios';

class Movies extends Component {
    constructor(props){
        super(props)
        this.state = {
            titles: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3001/titles/movie.json')
        .then(response => {
            console.log(response)
            this.setState({
                titles: response.data
            })
        })  
        .catch(error => console.log(error))
    }

    render () {
        // const titleSort = this.state.titles.sort(function(a, b) { return a.Variable1 < b.Variable1 ? 1 : -1; }).slice(0, 21);

        // titleSort.sort(function (a, b) {
        //     return a.title.localeCompare(b.title);
        // });

        return (
            <div className={classes.Container}>
                <MDBContainer >
                    <MDBRow>
                        {this.state.titles.map((MovieDetail) => {
                            if(true) {
                                return( 
                                    <MDBCol md="2" key={MovieDetail.title}>
                                        <img alt='' src={MovieDetail.image} style={{width: '100%'}} />
                                        <p><b>{MovieDetail.title}</b></p>
                                    </MDBCol>
                                )
                            }
                        })}
                    </MDBRow>
                </MDBContainer>
            </div>      
        )
    }
}

export default Movies;
