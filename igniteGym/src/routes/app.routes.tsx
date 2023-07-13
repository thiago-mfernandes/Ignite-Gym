import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { Exercise } from "@screens/Exercise";
import { History } from "@screens/History";
import { Home } from "@screens/Home";
import { Profile } from "@screens/Profile";

import HomeSvg from "@assets/home.svg";
import HistorySvg from "@assets/history.svg";
import ProfileSvg from "@assets/profile.svg";
import { useTheme } from "native-base";
import { Platform } from "react-native";

type AppRoutes = {
  home: undefined;
  history: undefined;
  profile: undefined;
  exercise: undefined;
} 

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();


export function AppRoutes() {

  const { sizes, colors } = useTheme();

  const iconSize = sizes[6];

  return (

    //a sequencia das screen's influencia na sequencia dos botoes na tab
    <Navigator 
      screenOptions={{ 
        headerShown: false, //remove o cabecalho da rota
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.green[500], //cor do icone ativo 
        tabBarInactiveTintColor: colors.gray[200], //cor do icone inativo
        //estilos da barra de navegacao
        tabBarStyle: {
          backgroundColor: colors.gray[600],
          borderTopWidth: 0,
          height: Platform.OS === "android" ? "auto" : 96, //se for android, senao..
          paddingBottom: sizes[8],
          paddingTop: sizes[8]
        }
      }}
    >
      <Screen 
        name="home" //rota tipada
        component={Home}
        options={{
          tabBarIcon: ({ color }) => ( //consigo acessar a cor
            <HomeSvg fill={color} width={iconSize} height={iconSize} /> 
          )
        }}
      />

      <Screen 
        name="history"
        component={History}
        options={{
          tabBarIcon: ({ color }) => ( 
            <HistorySvg fill={color} width={iconSize} height={iconSize} /> 
          )
        }}
      />

      <Screen 
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => ( 
            <ProfileSvg fill={color} width={iconSize} height={iconSize} /> 
          )
        }}
      />

      <Screen 
        name="exercise"
        component={Exercise}
        //essa rota nao quero que apareca na tabbar
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  );
}