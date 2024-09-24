import React from 'react';
import {IconType} from 'react-icons';

interface IconButtonProps {
  icon: IconType;
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ icon: IconComponent, onClick }) => {

  return (
    <button onClick={onClick} className="text-white">
      <IconComponent className="text-2xl" />  
    </button>
  );
};

export default IconButton;