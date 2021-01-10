import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import LoginScreen from '../screens/LoginScreen';

const stackNavigatorOptions = {
	headerShown: false,
};

const AppNavigator = createStackNavigator(
	{
		Home: { screen: Home },
		Profile: { screen: Profile },
		Login: { screen: LoginScreen },
	},
	{
		defaultNavigationOptions: stackNavigatorOptions,
		initialRouteName: 'Login', 
	}
);

export default createAppContainer(AppNavigator);
