import './Review.css';
import React from "react";
import api from '../../api/axiosConfig';
import ReviewForm from "../reviewForm/ReviewForm";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Scrollbars } from 'react-custom-scrollbars-2';


const Review = ({getMovieData, movie, reviews, setReviews}) => {
    
    const revText = useRef();
    let params = useParams();
    const movieId = params.movieId;

    useEffect(() => {
        getMovieData(movieId);
    },[]);

    const addReview = async(e) => {
        e.preventDefault();
        const rev = revText.current;

        if(rev.value.trim() === "")
            return;

        try {
            
            const response = await api.post("/api/v1/review/create", {imdbId:movieId, reviewBody: rev.value}); 
            const updateReview = [response.data,...reviews]
            setReviews(updateReview);
            rev.value = "";
        } catch (error) {
            console.log(error)
        }
    }

    const sortReview = (status) => {
        getMovieData(movieId, status);
    }

    const deleteReview = async(id) => {
        if(id === "")
            return;
        try {
            const response = await api.post("api/v1/review/delete",{rvId: id, imdbId:movieId});
            const deleteReview = reviews.filter((review) => review.rvId !== id)
            setReviews(deleteReview);
        } catch (error) {
            console.log(error);
        }
    }

    const increaseFavorite = async(id) => {
        const rvId = id;
        try {
            await api.post("api/v1/reviews/favourite",{rvId:rvId});
            // eslint-disable-next-line array-callback-return
            const updateFavourite = reviews.map((item) => {
                if(item.rvId === id)
                    item.favourite += 1;
                return item;
            })
            setReviews(updateFavourite)

        } catch (error) {
            console.log(error);
        }
    }

    return(
        <Container>
            <Row>
                <Col><h3>Reviews</h3></Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <img src={movie?.poster} alt=""/>
                </Col>
                <Col className='review'>
                    {
                        <React.Fragment>
                            <Row>
                                <Col>
                                    <ReviewForm handleSubmit={addReview} 
                                    handleSort={sortReview} 
                                    countReview={reviews?.length}  
                                    revText={revText} 
                                    labelText="Write a review?"
                                    />
                                </Col>
                            </Row>
                            <br/>
                        </React.Fragment>
                        
                    }
                    <Scrollbars 
                        autoHide 
                        thumbMinSize={50} 
                        style={{height: 550, scrollbarColor: 'gold' }} 
                        renderThumbVertical={() => (<div style={{background: "darkgray", borderRadius: 5}}/>)} 
                        className='review-family-card'>
                        {
                            reviews?.map((review) => {
                                const timeCreateReview = moment(new Date(review?.id?.date));
                                return(
                                    <React.Fragment key={`${review?.id?.date}`}>
                                        <Row className="review-card" expand= "lg">
                                            <Row>
                                                <Col className='d-flex'>
                                                    <div className='review-person'>

                                                    </div>
                                                    <div className='review-body d-flex justify-content-between'>
                                                        <div className='review-body-text'>
                                                            {review?.body}
                                                        </div>
                                                        <div>
                                                            <FontAwesomeIcon onClick={() => deleteReview(review?.rvId)} icon={faTrash} />
                                                        </div>
                                                    </div>
                                                </Col>    
                                            </Row>
                                            <Row>
                                                <Col className='review-operation d-flex justify-content-between'>
                                                    <div>
                                                        {review?.favourite}
                                                        <FontAwesomeIcon className='fa-heart' onClick={() => increaseFavorite(review?.rvId)} icon={faHeart} />
                                                    </div>
                                                    <div>
                                                        {timeCreateReview.fromNow()}
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <hr/>
                                            </Col>
                                        </Row>
                                    </React.Fragment>
                                )
                            })
                        }
                    </Scrollbars>
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr/>
                </Col>
            </Row>
        </Container>
    )
}

export default Review;
