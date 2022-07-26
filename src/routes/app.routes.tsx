import { FC } from 'react';
import { Home, Login, Atendimento, Language } from '../pages';

import { PropsGroup } from './types';

const AppRoutes: FC<PropsGroup> = function ({ Drawer }: PropsGroup) {
  return (
    <Drawer.Group>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Atendimento" component={Atendimento} />
      <Drawer.Screen name="Language" component={Language} />
    </Drawer.Group>
  );
};
export default AppRoutes;
