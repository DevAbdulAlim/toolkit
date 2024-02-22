import Link from "next/link";
import { FaCalculator, FaRuler, FaTasks } from "react-icons/fa";
import {
  FiThermometer,
  FiCalendar,
  FiDollarSign,
  FiClock,
  FiLayers,
  FiGlobe,
  FiDatabase,
  FiSun,
} from "react-icons/fi";
import { IoMdSpeedometer } from "react-icons/io";

const Home: React.FC = () => {
  const options = [
    { name: "Calculator", icon: <FaCalculator />, url: "/calculator" },
    { name: "Task", icon: <FaTasks />, url: "/task" },
    { name: "Temperature", icon: <FiThermometer />, url: "/" },
    { name: "Age", icon: <FiCalendar />, url: "/" },
    { name: "Length/Distance", icon: <FaRuler />, url: "/" },
    { name: "Weight/Mass", icon: <FiDollarSign />, url: "/" },
    { name: "Time", icon: <FiClock />, url: "/" },
    { name: "Area", icon: <FiLayers />, url: "/" },
    { name: "Currency", icon: <FiGlobe />, url: "/" },
    { name: "Speed", icon: <IoMdSpeedometer />, url: "/" },
    { name: "Data Storage", icon: <FiDatabase />, url: "/" },
    { name: "Pressure", icon: <FiSun />, url: "/" },
  ];

  return (
    <div className="container mx-auto flex flex-col items-center justify-center h-full w-full px-3">
      <div className="mt-8 grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-12">
        {options.map((option, index) => (
          <Link
            href={option.url}
            key={index}
            title={option.name}
            className="text-5xl hover:bg-green-500 rounded-full hover:text-green-50 text-green-600 p-4 cursor-pointer"
          >
            {option.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
