import React, {useEffect,useState} from 'react';
import SeriesData from '../data.json';
import classes from './Series.module.css';
import { MDBCol, MDBRow, MDBContainer} from "mdbreact";
import { BeatLoader} from 'react-spinners';

const Series = () => {
    const [loading, SetLoading] = useState(false);
    var titleSort = SeriesData.sort(function(a, b) { return a.Variable1 < b.Variable1 ? 1 : -1; }).slice(0, 21);

    titleSort.sort(function (a, b) {
        return a.title.localeCompare(b.title);
    });

    useEffect(()=>{
        SetLoading(true);
        setTimeout(()=>{
            SetLoading(false);
        },2000)
    },[])

    return (
        <div className={classes.Container}>
            <MDBContainer >
                <MDBRow>
                    {loading ?  <BeatLoader /> :
                    titleSort.map((SeriesDetail) => {
                        if(true) {
                            return( 
                                <MDBCol md="2" key={SeriesDetail.title}>
                                    <img alt='' src={SeriesDetail.images.PosterArt.url} style={{width: '100%'}} />
                                    <p><b>{SeriesDetail.title}</b></p>
                                </MDBCol>
                            )
                        }
                    })}

                </MDBRow>
            </MDBContainer>
        </div>      
    )
}

export default Series;
