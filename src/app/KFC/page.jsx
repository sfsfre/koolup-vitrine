import React from 'react';
import SidebarResto from '../component/sidebarResto';
import Subscribe from '../component/Subscribe';
import SearchIcon from '@mui/icons-material/Search';

const page = () => {
    const handleSearch = () => {
        // Fonction de recherche à implémenter
        console.log("Recherche de:");
        // Vous pouvez implémenter ici la logique de recherche, par exemple en appelant une fonction de recherche de votre API
    };
    return (
        <div className='w-full flex flex-col'>
            <div className=" bg-cover relative w-full flex justify-center" style={{ backgroundImage: "url('/kfc.png')" }}>
                <img src="/kfc.png" alt="restaurant" className="w-full" />
                <div className="absolute inset-0 flex justify-center items-center" style={{ backgroundColor: 'rgba(52, 23, 72, 0.5)' }}>
                    <img src="/profil.png" alt="restaurant" className=" relative w-full  top-[30%]  " />

                </div>
            </div>
            <div className="flex justify-normal ">
                <div className="  flex relative py-14  w-1/3   " ><SidebarResto /></div>
                

                <div className="flex items-center justify-center  w-2/3">
                    <input
                        type="text"
                        placeholder="Rechercher..."
                        className="w-full border-orange-400  rounded-l-3xl  ml-4  px-3 py-1 mb-4 bg-orange-400 bg-opacity-20"
                        onChange={handleSearch()}
                        
                        />
                    <button
                        className="text-white px-3 py-1 rounded-r-3xl mb-4 mr-1"
                        style={{ background: 'rgba(226, 112, 61, 1)' }}
                        >
                        <SearchIcon />
                    </button>
                </div>
            </div>
            



            {/* <Subscribe/> */}
      
            </div>

    );
}

export default page;
