import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaHome, FaHistory, FaUser } from 'react-icons/fa';
import {IconType} from 'react-icons';
import { FaMessage } from 'react-icons/fa6';


const BottomNavigation: React.FC = () => {
  const router = useRouter();  // Hook to access current route
  const currentPath = router.pathname;  // Gets the current path
  
  interface Navigation {
    path: string,
    label: string,
    icon: IconType,
  }
  // Define routes and corresponding icons
  const navigation: Navigation[] = [
    { path: '/', icon: FaHome, label: 'Home' },
    { path: '/messages', icon: FaMessage, label: 'Messages' },
    { path: '/profile', icon: FaMessage, label: 'Profile' },
    { path: '/history', icon: FaHistory, label: 'History' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-around bg-gray-800 p-2">
      {navigation.map((navItem) => {
        const IconComponent = navItem.icon;
        const isActive = currentPath === navItem.path;
        
        return (
          <Link href={navItem.path} key={navItem.label}>
            <a className="flex flex-col items-center">
              <IconComponent 
                className={`text-2xl ${isActive ? 'text-green-500' : 'text-white'}`} 
              />
              {isActive && (
                <div className="w-2 h-2 rounded-full bg-green-500 mt-1" />  // Active indicator
              )}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomNavigation;