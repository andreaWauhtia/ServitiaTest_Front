import React, { useState } from 'react';
import { FaCog, FaPlusSquare, FaPeopleCarry, FaAtlas } from 'react-icons/fa';

export interface FabMenuItem{
    icon: JSX.Element;
    onclick: () => void;
}
export interface FabMenuProps{
    menus: FabMenuItem[]
}

const FABMenu: React.FC<FabMenuProps> = ({menus}) => {
  const [isOpen, setIsOpen] = useState(true);
  const distancefromcenter = 64;
  const toggleMenu = ({}) => {
    setIsOpen(!isOpen);
  };

//   const calculatePosition = (index: number, total: number, distance: number) => {
//     const angle = (index / total) * 2 * Math.PI; 
//     const x = Math.cos(angle) * distance ;
//     const y = Math.sin(angle) * distance ;
//     return { x, y };
//   };


  return (
    <div className="group fixed bottom-0 right-0 p-2 flex items-end justify-end w-24 h-24">
    
      <div 
        className="text-white shadow-xl flex items-center justify-center p-3 rounded-md bg-black z-50 absolute cursor-pointer"
        onClick={toggleMenu}
      >
        <FaCog className={`w-6 h-6 transition-all duration-[0.6s] ${isOpen ? 'rotate-90' : ''}`} />
      </div>
      {/* {menus.map((it,index) => {
         const { x, y } = calculatePosition(index, menus.length, distancefromcenter);
         return (
            <div
            key={index}
            style={{ transform: `translate(${x}px, ${y}px)` }}
            className={`absolute rounded-md transition-all duration-[0.2s] ease-out ${
              isOpen ? 'scale-100' : 'scale-0'
            } flex p-2 hover:p-3 bg-gray-800 text-white`}
          >
         {it.icon}
       </div>)
      }
      )} */}

      {menus.length > 0 &&
      <div onClick={(e) => {e.preventDefault(); menus[0].onclick();}} className={`absolute rounded-md transition-all duration-[0.2s] ease-out ${isOpen ? 'scale-y-100 -translate-x-16' : 'scale-y-0'} flex p-2 hover:p-3 bg-gray-800 text-white`}>
       {menus[0].icon}
      </div>
      }
     {menus.length > 1 &&
      <div  onClick={(e) => {e.preventDefault(); menus[1].onclick();}} className={`absolute rounded-md transition-all duration-[0.2s] ease-out ${isOpen ? 'scale-x-100 -translate-y-16' : 'scale-x-0'} flex p-2 hover:p-3 bg-gray-800  text-white`}>
         {menus[1].icon}
      </div>
     }
     {menus.length > 2 &&
      <div  onClick={(e) => {e.preventDefault(); menus[2].onclick();}} className={`absolute rounded-md transition-all duration-[0.2s] ease-out ${isOpen ? 'scale-x-100 -translate-y-14 -translate-x-14' : 'scale-x-0'} flex p-2 hover:p-3 bg-gray-800 text-white`}>
        {menus[2].icon}
      </div>
    }
    </div>
  );
};

export default FABMenu;
