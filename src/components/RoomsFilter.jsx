import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../Context'
import Title from './Title'

//get all enique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function RoomsFilter({ rooms }) {
    const context = useContext(RoomContext);
    const { handleChange, type, capacity, price, minPrece, maxPrice, minSize, maxSize, breakfast, pets } = context;
    let types = getUnique(rooms, 'type');
    types = ['all', ...types];
    //map to jsx
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })
    let people = getUnique(rooms, 'capacity');
    people = people.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })
    return (
        <section className="filter-container">
            <Title title="Search Rooms" />
            <form className="filter-form">
                {/* select type*/}
                <div className="form-group">
                    <label htmlFor="type"> room type</label>
                    <select name="type" id="type" className="form-control" onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/* end select type*/}

                {/* guests type*/}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity" id="capacity" className="form-control" onChange={handleChange}>
                        {people}
                    </select>
                </div>
                {/* end sguests type*/}

                {/* room price */}
                <div className="form-group">
                    <label htmlFor="price">
                        rooms price ${price}
                    </label>
                    <input type="range" name="price" min={minPrece} max={maxPrice} id="price" onChange={handleChange} className="form-control" />
                </div>
                {/* end room price */}

                {/* size */}
                <div className="form-group">
                    <label htmlFor="size">Rooms size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input" />
                        <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input" />
                    </div>
                </div>
                {/* end size */}

                {/* extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                        <label htmlFor="breakfast"> breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/* end extras */}
            </form>
        </section>
    )
}
