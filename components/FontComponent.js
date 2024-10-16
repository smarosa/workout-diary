import { useFonts } from 'expo-font';

//fonts loaded in separate component to avoid order of hooks error

export default function FontComponent({ children }){

    const [loaded] = useFonts({
        Nunito: require('../assets/fonts/Nunito-SemiBold.ttf'),
      });
      if (!loaded) {
        return null;
      }

    return children;
}