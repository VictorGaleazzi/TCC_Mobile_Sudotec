import { FC } from 'react';
import { Home, Register, Login, Main } from '../pages/';

import { PropsGroup } from './types';

const AppRoutes: FC<PropsGroup> = function ({ Drawer }: PropsGroup) {
  return (
    <Drawer.Group>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Main" component={Main} />
      <Drawer.Screen name="Register" component={Register} />
    </Drawer.Group>
  );
};
export default AppRoutes;
