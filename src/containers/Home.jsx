import React,{useState,useEffect} from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import HotelCard from '../components/HotelCard'
import { Col, Row, Container } from 'react-bootstrap'
import SideBar from '../components/SideBar'
import Footer from '../components/Footer'
import {getAllHotels} from '../store/actions'
import {useSelector,useDispatch} from 'react-redux'

function Home() {
   const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllHotels())
        localStorage.setItem("login_session",false)
    },[])

    const state = useSelector(state => state)
    return (
        <div className="home-page">
            <NavBar />
            <Hero />
            <Container>
                <h2 className="text-success py-3">AVAILABLE HOTELS</h2>
                <Row>
                    <Col className="col-md-3">
                        <SideBar/>
                    </Col>
                    <Col className="col-md-9 border p-3">
                        <Row>
                            {state.allHotels ? state.allHotels.map((hotel,index) => {
                                return (
                                    <Col className="col-md-4"><HotelCard imgPath={hotel.imgPath} key={index} services={hotel.services} rating={hotel.rating} hotelName={hotel.hotel_name} price={hotel.per_day_price} rooms={hotel.no_of_rooms} services={hotel.services} /></Col>
                                );
                            }) : <>Loading <div className="loader"></div></>

                        }
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    )
}

export default Home
