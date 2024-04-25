import React from 'react';
import SidebarResto from '../component/sidebarResto';
import Subscribe from '../component/Subscribe';
import SearchIcon from '@mui/icons-material/Search';
import Pagination from '../component/Pagination';

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
                <div className="flex relative py-14  w-1/2" ><SidebarResto /></div>
                
                
                    <div className="grid grid-cols-2  gap-6">
                    <div className=" flex w-full pt-32">
                    <input
                        type="text"
                        placeholder="Rechercher..."
                        className="w-full border-orange-400  rounded-l-3xl  ml-4  px-3  mb-4 bg-orange-400 bg-opacity-20 "
                        onChange={handleSearch()}
                         />

                
                 <button
                        className="text-white px-3 py-1 rounded-r-3xl mb-4 mr-1 "
                        style={{ background: 'rgba(226, 112, 61, 1)' }}
                        >
                        <SearchIcon />
                    </button>
                    </div>
    {/* Carte 1 */}
    <div className="flex items-center bg-white border border-gray-200 rounded-3xl shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-48 h-48 rounded-l-lg md:w-48 md:h-auto md:rounded-none md:rounded-tl-lg" src="/tower.png" alt="" />
        
        <div className="flex flex-col p-3 leading-normal">
            <h5 className="mb-1 font-bold tracking-tight text-gray-900 dark:text-white">Tower Burger Menu</h5>
            <p className="mb-2  text-gray-700 dark:text-gray-400">2 filets de poulets épicés, 2 onion rings, laitue, fromage cheddar, sauce chili, sauce mayonnaise, 1 large frite, canette au choix</p>
        </div>
    </div>
    {/* Carte 2 */}
    <div className="flex items-center bg-white border border-gray-200 rounded-3xl shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-48 h-48 rounded-l-lg md:w-48 md:h-auto md:rounded-none md:rounded-tl-lg" src="/zinger.png" alt="" />
        <div className="flex flex-col p-4 leading-normal">
            <h5 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Mighty Zinger Menu</h5>
            <p className="mb-3  text-gray-700 dark:text-gray-400">2 filets de poulet épicés, laitue, fromage cheddar, sauce chili, sauce mayonnaise, 1 moyenne frite, canette au choix</p>
        </div>
        
    </div>
    <div className="flex items-center bg-white border border-gray-200 rounded-3xl shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-48 h-48 rounded-l-lg md:w-48 md:h-auto md:rounded-none md:rounded-tl-lg" src="/3.png" alt="" />
        <div className="flex flex-col p-4 leading-normal">
            <h5 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Tower Burger</h5>
            <p className="mb-3  text-gray-700 dark:text-gray-400">2 filets de poulet épicés, 2 onion rings, laitue, fromage cheddar, sauce chili, sauce mayonnaise.</p>
        </div>
        
    </div>
    <div className="flex items-center bg-white border border-gray-200 rounded-3xl shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-48 h-48 rounded-l-lg md:w-48 md:h-auto md:rounded-none md:rounded-tl-lg" src="/4.png" alt="" />
        <div className="flex flex-col p-4 leading-normal">
            <h5 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Tower Burger Menu</h5>
            <p className="mb-3  text-gray-700 dark:text-gray-400">2 filets de poulet épicés, 2 onion rings, laitue, fromage cheddar, sauce chili, sauce mayonnaise.</p>
        </div>
        
    </div>
    <div className="flex items-center bg-white border border-gray-200 rounded-3xl shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-48 h-48 rounded-l-lg md:w-48 md:h-auto md:rounded-none md:rounded-tl-lg" src="/5.png" alt="" />
        <div className="flex flex-col p-4 leading-normal">
            <h5 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Shot's N Wings Snacker</h5>
            <p className="mb-3  text-gray-700 dark:text-gray-400">2 filets de poulet épicés, 2 onion rings, laitue, fromage cheddar, sauce chili, sauce mayonnaise.</p>
        </div>
        
    </div>
    <div className="flex items-center bg-white border border-gray-200 rounded-3xl shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-48 h-48 rounded-l-lg md:w-48 md:h-auto md:rounded-none md:rounded-tl-lg" src="/6.png" alt="" />
        <div className="flex flex-col p-4 leading-normal">
            <h5 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Shot's N Wings Snacker</h5>
            <p className="mb-3  text-gray-700 dark:text-gray-400">2 filets de poulet épicés, 2 onion rings, laitue, fromage cheddar, sauce chili, sauce mayonnaise.</p>
        </div>
        
    </div>
    <div className="flex items-center bg-white border border-gray-200 rounded-3xl shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-48 h-48 rounded-l-lg md:w-48 md:h-auto md:rounded-none md:rounded-tl-lg" src="/4.png" alt="" />
        <div className="flex flex-col p-4 leading-normal">
            <h5 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Shot's N Wings Snacker</h5>
            <p className="mb-3  text-gray-700 dark:text-gray-400">2 filets de poulet épicés, 2 onion rings, laitue, fromage cheddar, sauce chili, sauce mayonnaise.</p>
        </div>
        
    </div>
    <div className="flex items-center bg-white border border-gray-200 rounded-3xl shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-48 h-48 rounded-l-lg md:w-48 md:h-auto md:rounded-none md:rounded-tl-lg" src="/8.png" alt="" />
        <div className="flex flex-col p-4 leading-normal">
            <h5 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Strips 3pcs</h5>
            <p className="mb-3  text-gray-700 dark:text-gray-400">2 filets de poulet épicés, 2 onion rings, laitue, fromage cheddar, sauce chili, sauce mayonnaise.</p>
        </div>
        
    </div>
    <div className="flex items-center bg-white border border-gray-200 rounded-3xl shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-48 h-48 rounded-l-lg md:w-48 md:h-auto md:rounded-none md:rounded-tl-lg" src="/9.png" alt="" />
        <div className="flex flex-col p-4 leading-normal">
            <h5 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Onion Rings</h5>
            <p className="mb-3  text-gray-700 dark:text-gray-400">2 filets de poulet épicés, 2 onion rings, laitue, fromage cheddar, sauce chili, sauce mayonnaise.</p>
        </div>
        
    </div>
    <div className="flex items-center bg-white border border-gray-200 rounded-3xl shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-48 h-48 rounded-l-lg md:w-48 md:h-auto md:rounded-none md:rounded-tl-lg" src="/100.png" alt="" />
        <div className="flex flex-col p-4 leading-normal">
            <h5 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Hot Wings 10 Pieces</h5>
            <p className="mb-3  text-gray-700 dark:text-gray-400">2 filets de poulet épicés, 2 onion rings, laitue, fromage cheddar, sauce chili, sauce mayonnaise.</p>
        </div>
        
    </div>
    <div className="flex items-center bg-white border border-gray-200 rounded-3xl shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-48 h-48 rounded-l-lg md:w-48 md:h-auto md:rounded-none md:rounded-tl-lg" src="/11.png" alt="" />
        <div className="flex flex-col p-4 leading-normal">
            <h5 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Frites Large</h5>
            <p className="mb-3  text-gray-700 dark:text-gray-400">2 filets de poulet épicés, 2 onion rings, laitue, fromage cheddar, sauce chili, sauce mayonnaise.</p>
        </div>
        
    </div>
    <div className="flex items-center bg-white border border-gray-200 rounded-3xl shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-48 h-48 rounded-l-lg md:w-48 md:h-auto md:rounded-none md:rounded-tl-lg" src="/11.png" alt="" />
        <div className="flex flex-col p-4 leading-normal">
            <h5 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Frites Medium</h5>
            <p className="mb-3  text-gray-700 dark:text-gray-400">2 filets de poulet épicés, 2 onion rings, laitue, fromage cheddar, sauce chili, sauce mayonnaise.</p>
        </div>
        
    </div>
    <div className="flex items-center bg-white border border-gray-200 rounded-3xl shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-48 h-48 rounded-l-lg md:w-48 md:h-auto md:rounded-none md:rounded-tl-lg" src="/cola.png" alt="" />
        <div className="flex flex-col p-4 leading-normal">
            <h5 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Coca_Cola 24cl</h5>
            <p className="mb-3  text-gray-700 dark:text-gray-400">2 filets de poulet épicés, 2 onion rings, laitue, fromage cheddar, sauce chili, sauce mayonnaise.</p>
        </div>
        
    </div>
    <div className="flex items-center bg-white border border-gray-200 rounded-3xl shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-48 h-48 rounded-l-lg md:w-48 md:h-auto md:rounded-none md:rounded-tl-lg" src="/13.png" alt="" />
        <div className="flex flex-col p-4 leading-normal">
            <h5 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Boga Lime 24cl</h5>
            <p className="mb-3  text-gray-700 dark:text-gray-400">2 filets de poulet épicés, 2 onion rings, laitue, fromage cheddar, sauce chili, sauce mayonnaise.</p>
        </div>
        
    </div>
    <div className="flex items-center bg-white border border-gray-200 rounded-3xl shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-48 h-48 rounded-l-lg md:w-48 md:h-auto md:rounded-none md:rounded-tl-lg" src="/fanta.png" alt="" />
        <div className="flex flex-col p-4 leading-normal">
            <h5 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Fanta Orange 24cl</h5>
            <p className="mb-3  text-gray-700 dark:text-gray-400">2 filets de poulet épicés, 2 onion rings, laitue, fromage cheddar, sauce chili, sauce mayonnaise.</p>
        </div>
        
    </div>
    <div className="flex items-center bg-white border border-gray-200 rounded-3xl shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-48 h-48 rounded-l-lg md:w-48 md:h-auto md:rounded-none md:rounded-tl-lg" src="/eau.png" alt="" />
        <div className="flex flex-col p-4 leading-normal">
            <h5 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">Eau 0.5L</h5>
            <p className="mb-3  text-gray-700 dark:text-gray-400">2 filets de poulet épicés, 2 onion rings, laitue, fromage cheddar, sauce chili, sauce mayonnaise.</p>
        </div>
        
    </div>
   

                    </div>
                </div>
                <Pagination/>
                <Subscribe />
            </div>
            
        

    );
}

export default page;
