import React, { useState } from 'react';

export interface DropdownSearchProps{
    items: {id: string, label: string}[];
    selectItem: (id: string) => void;
    selectedItems?: {id: string, label: string};
}
export const DropdownSearch = (props: DropdownSearchProps) => {

  const {items, selectedItems, selectItem} = props;  
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (e: React.SyntheticEvent) => {
    setSearchTerm((e.target as HTMLInputElement).value);
  };

  const handleCheckboxChange = (e: React.SyntheticEvent) => {
    const { id, checked } = e.target as HTMLInputElement;
    if (checked){
    selectItem(id);
    }
    else{
      selectItem('');
    }
    handleToggle();
  };

 const filteredItems = items.filter(it => searchTerm !== '' ? it.label.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 : it === it);

  return (
    <div>
      <button
        id="dropdownSearchButton"
        onClick={handleToggle}
        className=" w-full text-white bg-black hover:bg-gray-800 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center rounded-r-md "
        type="button"
      >
       
        <svg className="w-2.5 h-2.5 end-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>

      {isOpen && (
        <div id="dropdownSearch" className="z-10 fixed bg-white rounded-lg shadow w-60 dark:bg-gray-700">
          <div className="p-3">
            <label htmlFor="input-group-search" className="sr-only">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
              <input
                type="text"
                id="input-group-search"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50"
                placeholder="Search user"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          </div>
          <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSearchButton">
            {filteredItems.map(item => (
              <li key={item.id}>
                <div className="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <input
                    id={item.id}
                    type="checkbox"
                    checked={selectedItems?.id === item.id}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-md focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label htmlFor={item.id} className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">{item.label}</label>
                </div>
              </li>
            ))}
          </ul>    
        </div>
      )}
    </div>
  );
};

