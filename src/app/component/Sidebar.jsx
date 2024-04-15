import React from 'react';
import Restaurants from './Restaurents';

const Sidebar = () => {
  const handleSearch = (event) => {
    // Fonction de recherche à implémenter
    console.log("Recherche de:", event.target.value);
    // Vous pouvez implémenter ici la logique de recherche, par exemple en appelant une fonction de recherche de votre API
  };

  return (
    <div className="flex flex-col">
      {/* Filtrage */}
      <div className="w-1/4  p-4 mb-4">
        <h2 className="text-lg font-semibold mb-2">Filtrage</h2>
        {/* Ajoutez ici vos filtres */}
        <label htmlFor="sandwiches" className="inline-block mb-1 mr-2">
          <input type="checkbox" id="sandwiches" className="mr-1" />
          Sandwiches
        </label>
        <label htmlFor="burgers" className="inline-block mb-1 mr-2">
          <input type="checkbox" id="burgers" className="mr-1" />
          Burgers
        </label>
        <label htmlFor="pizza" className="inline-block mb-1 mr-2">
          <input type="checkbox" id="pizza" className="mr-1" />
          Pizza
        </label>
        {/* Ajoutez plus de filtres si nécessaire */}
      </div>
      {/* Recherche */}
      <div className="w-1/4 bg-gray-200 p-4">
        <input 
          type="text" 
          placeholder="Rechercher..."
          className="w-full border rounded px-2 py-1 mb-4"
          onChange={handleSearch}
        />
        {/* Ajoutez ici votre boîte de recherche */}
        <h2 className="text-lg font-semibold mb-4">Popular filtres</h2>
        {/* Ajoutez ici vos filtres populaires */}
       
        <ul>
          <li><a href="#">Sandwiches</a></li>
          <li><a href="#">Burgers</a></li>
          <li><a href="#">Pizza</a></li>
          {/* Ajoutez plus de catégories si nécessaire */}
        </ul>
        <h2 className="text-lg font-semibold mb-4">More filtres</h2>
        {/* Ajoutez ici votre image */}
        <ul>
          <li><a href="#">Sandwiches</a></li>
          <li><a href="#">Burgers</a></li>
          <li><a href="#">Pizza</a></li>
          <li><a href="#">Sandwiches</a></li>
          <li><a href="#">Burgers</a></li>
          <li><a href="#">Pizza</a></li>
          {/* Ajoutez plus de catégories si nécessaire */}
        </ul>
        <img src="/image.jpg" alt="Image" className="mt-4" />
      </div>
      <div className="w-3/4"> {/* Liste des restaurants */}
   <div><Restaurants/></div> 
      </div>
    </div>
  );
}

export default Sidebar;
