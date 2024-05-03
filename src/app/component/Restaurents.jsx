import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Restaurant = ({ name, address, logo, link}) => (
  <div className="max-w-md mx-auto shadow-lg p-8 mb-8 bg-white">
    <link href={link} ><img src={logo} alt={`${name} logo`}  className="w-full mb-4" /></link>
    <fonction> Dining & Delivery
    </fonction>
    <h2 className="text-2xl font-bold mb-2">{name}</h2>
    <p className="text-gray-700">{address}</p>
    <div className="flex items-center mt-2">
    
      {Array.from({ length: rating }, (_, index) => (
        <FontAwesomeIcon key={index} icon={faStar} className="text-yellow-500 p-1 text-xs" />
      ))}
    </div>
    
  </div>
);

const restaurantData = [
  {
    name: 'Baguette et baguette ',
    address: '123 Main St, City, Country',
    logo: '/bagette.png',
    link: '/Baguette et baguette',
 
  },
  {
    name: 'Chaneb Plus Sahloul',
    address: '456 Elm St, City, Country',
    logo: '/chaneb.png',
    link: '/Chaneb Plus Sahloul',
   
  },
  {
    name: 'Crépes Factory',
    address: '456 Elm St, City, Country',
    logo: '/factory.png',
    link: '/Crépes Factory',
   
  },
  {
    name: 'KFC ',
    address: '456 Elm St, City, Country',
    logo: '/mac.png',
    link: '/KFC',
   
  },
  {
    name: 'Papa Jhons',
    address: '789 Oak St, City, Country',
    logo: '/papa.png',
    link: '/Papa Jhons',
    
  },
  {
    name: 'Plan B',
    address: '101 Pine St, City, Country',
    logo: '/plan.png',
    link: '/Plan B',
   
  },
  {
    name: 'Spart’n Tacos',
    address: '111 Maple St, City, Country',
    logo: '/spartan.png',
    link: '/Spart’n Tacos',
  
  },
  {
    name: 'Tabouna Food 8',
    address: '222 Spruce St, City, Country',
    logo: '/tabouna.png',
    link: '/Tabouna Food',
    
  },
];

const Restaurants = () => {
  const firstRowRestaurants = restaurantData.slice(0, 8);

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

      <div className="flex flex-wrap justify-center mt-8 ml-14 ">
  <div className="  grid grid-cols-4 gap-2 justify-items-center">
          {firstRowRestaurants.map((restaurant, index) => (
            <div key={index} className="mr-8 mb-8">
              <Restaurant
              fonction={restaurant.fonction}
                name={restaurant.name}
                address={restaurant.address}
                logo={restaurant.logo}
                link={restaurant.link}
              />
            </div>
          ))}
        </div>
      </div>

      
       

      <div className="flex justify-center mt-8 p-24 ">
        <button className=" py-8 px-6 text-orange-500  text-xl font-bold " style={{ background: 'rgba(255, 242, 232, 1)' ,borderRadius:'25px' }}>
          Explore more places   &gt;
        </button>
      </div>
    </div>
  );
};

export default Restaurants;
