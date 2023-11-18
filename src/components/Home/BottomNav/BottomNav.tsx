import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/ScreenRotationAltOutlined';
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import UserIcon from '@mui/icons-material/AccountCircleOutlined';
import { btn } from '../../../const/components';

export const BottomNav = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: '100%' }}>
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            sx={{ fontWeight: '700' }}
            disableRipple
            label={btn.HOME}
            icon={<HomeIcon sx={{ fontSize: 28 }} />}
          />
          <BottomNavigationAction
            sx={{ fontWeight: '700' }}
            disableRipple
            label={btn.REQUEST}
            icon={<AddIcon sx={{ fontSize: 32 }} />}
          />
          <BottomNavigationAction
            sx={{ fontWeight: '700' }}
            disableRipple
            label={btn.PROFILE}
            icon={<UserIcon sx={{ fontSize: 28 }} />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

// import { RiHome5Line } from 'react-icons/ri';
// import { MdAddCircleOutline } from 'react-icons/md';
// import { LiaUserCircleSolid } from 'react-icons/lia';
// import { BottomNavContainer, NavButton } from './BottomNav.styled';
// import { useState } from 'react';

// const btn = {
//   HOME: 'HOME',
//   REQUEST: 'REQUEST',
//   PROFILE: 'PROFILE',
// };

// export const BottomNav = () => {
//   const [activeBtn, setActiveBtn] = useState(btn.HOME);

//   const handleClick = (currentBtn: string) => {
//     setActiveBtn(currentBtn);
//   };

//   return (
//     <BottomNavContainer>
//       <NavButton
//         $isActive={activeBtn === btn.HOME}
//         onClick={() => handleClick(btn.HOME)}
//       >
//         <RiHome5Line />
//         <p>{btn.HOME}</p>
//       </NavButton>
//       <NavButton
//         $isActive={activeBtn === btn.REQUEST}
//         onClick={() => handleClick(btn.REQUEST)}
//       >
//         <MdAddCircleOutline />
//         <p>{btn.REQUEST}</p>
//       </NavButton>
//       <NavButton
//         $isActive={activeBtn === btn.PROFILE}
//         onClick={() => handleClick(btn.PROFILE)}
//       >
//         <LiaUserCircleSolid />
//         <p>{btn.PROFILE}</p>
//       </NavButton>
//     </BottomNavContainer>
//   );
// };
