import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  Home,
  HomeBuyer,
  MyOrder,
  Login,
  Register,
  Profile,
  InboxBuyer,
  DetailProdukBuyer,
  DaftarAlamatBuyer,
  ProductCategory
} from '../screens/index';

const StackAuth = createStackNavigator(
  {
    Login,
    Register,
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  },
);

const StackHome = createStackNavigator(
  {
    HomeBuyer,
    InboxBuyer,
    Profile,
    MyOrder,
    DetailProdukBuyer,
    DaftarAlamatBuyer,
    ProductCategory
  },
  {
    // initialRouteName: 'HomeBuyer',
    // initialRouteName: 'Profile',
    // initialRouteName: 'InboxBuyer',
    // initialRouteName: 'DetailProdukBuyer',
    // initialRouteName: 'DaftarAlamatBuyer',
    initialRouteName: 'ProductCategory',
    headerMode: 'none',
  },
);

const Router = createSwitchNavigator(
  {
    StackAuth,
    StackHome,
  },
  {
    initialRouteName: 'StackHome',
    headerMode: 'none',
  },
);

const RouterDEV = createStackNavigator(
  {
    Register,
    Login
  },
  {
    initialRouteName: 'Register',
    headerMode: 'none',
  }
);

// export default createAppContainer(RouterDEV);
export default createAppContainer(Router);
