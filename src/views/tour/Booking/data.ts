import type { FlightRouteDetailType, HotelDetailType } from '@/views/tour/Booking/type'

export const tourFlightDetail: FlightRouteDetailType[] = [
  {
    departure: {
      tag: 'CDG',
      time: '2:50 pm',
      placeName: 'New York'
    },
    arrival: {
      tag: 'JFK',
      placeName: 'JFK',
      time: '7:35 pm'
    },
    travelDuration: '5hr 50min'
  },
  {
    departure: {
      tag: 'JFK',
      time: '5:50 am',
      placeName: 'Malaysia '
    },
    arrival: {
      tag: 'CDG',
      placeName: 'New York',
      time: '11:35 am'
    },
    travelDuration: '5hr 50min'
  }
]

export const hotelDetails: HotelDetailType[] = [
  {
    name: 'Courtyard by Marriott New York',
    room: 'Deluxe Pool View with Breakfast',
    date: '12 April 2022',
    rating: 4.5
  },
  {
    name: 'Park Plaza Lodge Hotel',
    room: 'Deluxe Pool View with Breakfast',
    date: '14 April 2022',
    rating: 3.5
  },
  {
    name: 'Pride moon Village Resort & Spa',
    room: 'Deluxe Pool View with Breakfast',
    date: '16 April 2022',
    rating: 4
  }
]