import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import BottomTabs from './components/BottomTabs';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#fff',
    background: 'white',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <BottomTabs />
    </NavigationContainer>
  );
}
