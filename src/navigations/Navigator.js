import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import LoginScreen from '../screens/LoginScreen';

const stackNavigatorOptions = {
	headerShown: false,
};

const AppNavigator = createStackNavigator(
	{
		Home: { screen: Home },
		Detail: { screen: Detail },
		Login: { screen: LoginScreen },
	},
	{
		defaultNavigationOptions: stackNavigatorOptions,
	}
);

export default createAppContainer(AppNavigator);
