"use client";
import { FaRuler } from 'react-icons/fa';
import { FiThermometer, FiCalendar,  FiDollarSign, FiClock, FiLayers, FiGlobe,  FiDatabase, FiSun, FiSettings } from 'react-icons/fi';
import { IoMdSpeedometer } from 'react-icons/io';

interface NavbarProps {
  setActiveOption: (option: string) => void;
}

const Navbar: React.FC = () => {
  const options = [
    { name: 'Temperature', icon: <FiThermometer /> },
    { name: 'Age', icon: <FiCalendar /> },
    { name: 'Length/Distance', icon: <FaRuler /> },
    { name: 'Weight/Mass', icon: <FiDollarSign /> },
    { name: 'Time', icon: <FiClock /> },
    { name: 'Area', icon: <FiLayers /> },
    { name: 'Currency', icon: <FiGlobe /> },
    { name: 'Speed', icon: <IoMdSpeedometer /> },
    { name: 'Data Storage', icon: <FiDatabase /> },
    { name: 'Pressure', icon: <FiSun /> },
    { name: 'Settings', icon: <FiSettings /> }
  ];

  return (
    <div className="bg-gray-800 fixed left-0 top-0 text-white h-screen  flex flex-col items-center w-12 justify-between">
      <div className="mt-8">
        {options.map((option, index) => (
          <div key={index} className="p-2 text-xl hover:bg-white rounded-full hover:text-gray-800 cursor-pointer">  {/* onClick={() => setActiveOption(option.name)} */}
            {option.icon}
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default Navbar;
