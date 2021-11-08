import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import home from '../screens/home';
import reciept from '../screens/reciept';

const screens = {
    Home:{
        screen: home,
    },
    Reciept:{
        screen: reciept,
    },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);

