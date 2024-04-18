import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Restaurant= ({ name, address, logo, link, rating }) => (
  <div className="max-w-md mx-auto shadow-lg p-8 mb-8 bg-white">
    <img src={logo} alt={`${name} logo`} className="w-full mb-4" />
    <fonction> Dining & Delivery
</fonction>
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
    name: 'Baguette et baguette ',
    address: '123 Main St, City, Country',
    logo: '/bagette.png',
    link: '/Baguette et baguette',
    rating: 4
  },
  {
    name: 'Chaneb Plus Sahloul',
    address: '456 Elm St, City, Country',
    logo: '/chaneb.png',
    link: '/Chaneb Plus Sahloul',
    rating: 4
  },
  {
    name: 'Crépes Factory',
    address: '456 Elm St, City, Country',
    logo: '/factory.png',
    link: '/Crépes Factory',
    rating: 5
  },
  {
    name: 'KFC ',
    address: '456 Elm St, City, Country',
    logo: '/mac.png',
    link: '/KFC',
    rating: 4
  },
  {
    name: 'Papa Jhons',
    address: '789 Oak St, City, Country',
    logo: '/papa.png',
    link: '/Papa Jhons',
    rating: 5
  },
  {
    name: 'Plan B',
    address: '101 Pine St, City, Country',
    logo: '/plan.png',
    link: '/Plan B',
    rating: 5
  },
  {
    name: 'Spart’n Tacos',
    address: '111 Maple St, City, Country',
    logo: '/spartan.png',
    link: '/Spart’n Tacos',
    rating: 4
  },
  {
    name: 'Tabouna Food 8',
    address: '222 Spruce St, City, Country',
    logo: '/tabouna.png',
    link: '/Tabouna Food',
    rating: 4
  },
  {
    name: 'Ali Chapati',
    address: '222 Spruce St, City, Country',
    logo: '/ali.png',
    link: '/Ali Chapati',
    rating: 4
  },
  {
    name: 'Jaghalino',
    address: '222 Spruce St, City, Country',
    logo: '/bouza.png',
    link: '/Jaghalino',
    rating: 4
  },
  {
    name: 'La Cabane',
    address: '222 Spruce St, City, Country',
    logo: '/capan.png',
    link: '/La Cabane',
    rating: 4
  },
  {
    name: 'Youba Chapati',
    address: '222 Spruce St, City, Country',
    logo: '/youba.png',
    link: '/Youba Chapati',
    rating: 4
  },

];

const DeliveryResto = () => {
  const firstRowRestaurants = restaurantData.slice(0, 100);
 

  return (
    <div>
      
      <div className=" ml-14 pt-28">
        <h1 className="font-MasteryKingdom  text-3xl font-Poppins  font-bold  text-gray-900 ">
        Restaurants delivery in Sousse
        </h1>
      </div>

      <div className="flex flex-wrap justify-center mt-8 ml-14 ">
  <div className="  grid grid-cols-3 gap-2 justify-items-center">
          {firstRowRestaurants.map((restaurant, index) => (
            <div key={index} className="mr-5 mb-2">
              <Restaurant
              fonction={restaurant.fonction}
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
      

<nav aria-label="Page navigation example">
  <ul  className=" flex -space-x-p m-10  px-72  py-5 text-2xl    ">
    <li>
      <a href="#"  className="flex items-center justify-center px-3 h-8 leading-tight text-orange-500 bg-white  hover:bg-orange-300 hover:text-white  dark:hover:text-white   rounded-xl"> &lt;Previous </a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-orange-500 bg-white  hover:bg-orange-300 hover:text-white  dark:hover:text-white   rounded-xl">1</a>
    </li>
    <li>
      <a href="#" class=" flex items-center justify-center px-3 h-8 text-white  bg-orange-500 hover:bg-orange-300   rounded-xl">2</a>
    </li>
    <li>
      <a href="#" aria-current="page" class="flex items-center justify-center px-3 h-8 leading-tight text-orange-500 bg-white  hover:bg-orange-300 hover:text-white  dark:hover:text-white  rounded-xl">3</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-orange-500 bg-white  hover:bg-orange-300 hover:text-white  dark:hover:text-white  rounded-xl">4</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-orange-500 bg-white  hover:bg-orange-300 hover:text-white  dark:hover:text-white  rounded-xl">5</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-orange-500 bg-white  hover:bg-orange-300 hover:text-white  dark:hover:text-white   rounded-xl">Next  &gt;</a>
    </li>
  </ul>
</nav>


    </div>
  );
};

export default DeliveryResto;
