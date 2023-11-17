import { RiHome5Line } from 'react-icons/ri';
import { MdAddCircleOutline } from 'react-icons/md';
import { LiaUserCircleSolid } from 'react-icons/lia';
import { BottomNavContainer, NavButton } from './BottomNav.styled';
import { useState } from 'react';

const btn = {
  HOME: 'HOME',
  REQUEST: 'REQUEST',
  PROFILE: 'PROFILE',
};

export const BottomNav = () => {
  const [activeBtn, setActiveBtn] = useState(btn.HOME);

  const handleClick = (currentBtn: string) => {
    setActiveBtn(currentBtn);
  };

  return (
    <BottomNavContainer>
      <NavButton
        $isActive={activeBtn === btn.HOME}
        onClick={() => handleClick(btn.HOME)}
      >
        <RiHome5Line />
        <p>{btn.HOME}</p>
      </NavButton>
      <NavButton
        $isActive={activeBtn === btn.REQUEST}
        onClick={() => handleClick(btn.REQUEST)}
      >
        <MdAddCircleOutline />
        <p>{btn.REQUEST}</p>
      </NavButton>
      <NavButton
        $isActive={activeBtn === btn.PROFILE}
        onClick={() => handleClick(btn.PROFILE)}
      >
        <LiaUserCircleSolid />
        <p>{btn.PROFILE}</p>
      </NavButton>
    </BottomNavContainer>
  );
};
