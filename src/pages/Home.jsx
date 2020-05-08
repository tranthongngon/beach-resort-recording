import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Service from '../components/Service'
import FeatureRoom from '../components/FeatureRoom'

export default function Home() {
    return (
        <>
            <Hero>
                <Banner title="Luxurious rooms" subtitle="deluxe rooms starting at $299">
                    <Link to='/rooms' className="btn-primary">Our Rooms</Link>
                </Banner>
            </Hero>
            <Service />
            <FeatureRoom />
        </>
    )
}
