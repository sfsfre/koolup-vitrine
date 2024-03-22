import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Restaurant = ({ name, address, logo, link, rating }) => (
  <div className="max-w-md mx-auto shadow-lg p-8 mb-8 bg-white">
    <img src={logo} alt={`${name} logo`} className="w-full mb-4" />
    <h2 className="text-2xl font-bold mb-2">{name}</h2>
    <p className="text-gray-700">{address}</p>
    <div className="flex items-center mt-2">
      <p className="text-gray-600 mr-2">Rating:</p>
      {Array.from({ length: rating }, (_, index) => (
        <FontAwesomeIcon key={index} icon={faStar} className="text-yellow-500 p-1 text-xs" />
      ))}
    </div>
    <a href={link} className="block mt-4 text-blue-500">Visit Website</a>
  </div>
);

const restaurantData = [
  {
    name: 'Restaurant 1',
    address: '123 Main St, City, Country',
    logo: '/bagette.png',
    link: '/restaurant1',
    rating: 4
  },
  {
    name: 'Restaurant 2',
    address: '456 Elm St, City, Country',
    logo: '/chaneb.png',
    link: '/restaurant2',
    rating: 4
  },
  {
    name: 'Restaurant 3',
    address: '456 Elm St, City, Country',
    logo: '/factory.png',
    link: '/restaurant3',
    rating: 5
  },
  {
    name: 'Restaurant 4',
    address: '456 Elm St, City, Country',
    logo: '/mac.png',
    link: '/restaurant4',
    rating: 4
  },
  {
    name: 'Restaurant 5',
    address: '789 Oak St, City, Country',
    logo: '/papa.png',
    link: '/restaurant5',
    rating: 5
  },
  {
    name: 'Restaurant 6',
    address: '101 Pine St, City, Country',
    logo: '/plan.png',
    link: '/restaurant6',
    rating: 5
  },
  {
    name: 'Restaurant 7',
    address: '111 Maple St, City, Country',
    logo: '/spartan.png',
    link: '/restaurant7',
    rating: 4
  },
  {
    name: 'Restaurant 8',
    address: '222 Spruce St, City, Country',
    logo: '/tabouna.png',
    link: '/restaurant8',
    rating: 4
  },
];

const Restaurants = () => {
  const firstRowRestaurants = restaurantData.slice(0, 4);
  const secondRowRestaurants = restaurantData.slice(4, 8);

  return (
    <div>
      <Head>
        <title>Available Restaurants</title>
      </Head>

      <div className="text-center py-12">
        <h1 className="font-MasteryKingdom text-6xl font-bold leading-9 text-center text-gray-900 mb-12">
          Available Restaurants
        </h1>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center">
          {firstRowRestaurants.map((restaurant, index) => (
            <div key={index} className="mr-8 mb-8">
              <Restaurant
                name={restaurant.name}
                address={restaurant.address}
                logo={restaurant.logo}
                link={restaurant.link}
                rating={restaurant.rating}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <div className="flex flex-wrap justify-center">
          {secondRowRestaurants.map((restaurant, index) => (
            <div key={index} className="mr-8 mb-8">
              <Restaurant
                name={restaurant.name}
                address={restaurant.address}
                logo={restaurant.logo}
                link={restaurant.link}
                rating={restaurant.rating}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8 p-24 ">
        <button className=" py-8 px-6 text-orange-500  text-xl font-bold " style={{ background: 'rgba(255, 242, 232, 1)' ,borderRadius:'25px' }}>
          Explore more places  
        </button>
      </div>
    </div>
  );
};

export default Restaurants;
