import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomList from './RoomList'
import Loading from './Loading'
import { withRoomConsumer, RoomConsumer } from '../Context'

function RoomsContainer({ context }) {
    const { loading, storedRooms, rooms } = context;
    if (loading) {
        return <Loading />
    }
    return (
        <div>
            <RoomsFilter rooms={rooms} />
            <RoomList rooms={storedRooms} />
        </div>
    )
}
export default withRoomConsumer(RoomsContainer)

// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {value => {
//                 const { loading, storedRooms, rooms } = value;
//                 if (loading) {
//                     return <Loading />
//                 }
//                 return (
//                     <div>
//                         <RoomsFilter rooms={rooms} />
//                         <RoomList rooms={storedRooms} />
//                     </div>
//                 )
//             }}
//         </RoomConsumer>

//     )
// }
