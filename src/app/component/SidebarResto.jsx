import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SidebarResto = () => {
  const handleSearch = () => {
    // Fonction de recherche à implémenter
    console.log("Recherche de:");
    // Vous pouvez implémenter ici la logique de recherche, par exemple en appelant une fonction de recherche de votre API
  };

  return (
    <div className="flex flex-col w-[30%]">
     
        <div class="p-5 mt-6 ">
          {/* Ajoutez ici votre boîte de recherche */}
          <h2 className=" ">Popular filtres</h2>
          {/* Ajoutez ici vos filtres populaires */}

          <ul class="flex  space-y-4 ...">
            <li className="flex">
              <img src="/iconSandwich.png" alt="Sandwiches" className="mr-2 w-6 h-6" />
              <a href="#">Sandwiches</a>
            </li>
            <li className="flex">
              <img src="/iconburger.png" alt="Burgers" className="mr-2 w-6 h-6" />
              <a href="#">Burgers</a>
            </li>
            <li className="flex">
              <img src="/iconpizza.png" alt="Pizza" className="mr-2 w-6 h-6" />
              <a href="#">Pizza</a>
            </li>
          </ul>

         
        

        </div>

      </div>
   


  );
}

export default SidebarResto;
