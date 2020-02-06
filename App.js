import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';


const AppStack = createStackNavigator({
  Welcome: WelcomeScreen
})

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  SignUp: SignUpScreen,
})
const navigator = createSwitchNavigator(
  {
    Home: HomeScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName:'Home'
  });


export default createAppContainer(navigator);


