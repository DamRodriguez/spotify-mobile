import ProfileDrawer from '@/components/header/home-header/pofile-drawer/ProfileDrawer';
import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={(props) => (
        <ProfileDrawer {...props} />
      )}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
    </Drawer>
  );
}