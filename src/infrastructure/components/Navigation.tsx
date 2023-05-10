import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/core/src/types';
import { ParamListBase } from '@react-navigation/routers';

export interface NavigateProps {
  navigation: any;
  route: RouteProp<ParamListBase>;
}

export interface NavigationRoute<PageProps extends any = {}> {
  name: string;
  title?: (options: NavigateProps) => string;
  Page: (props: PageProps) => JSX.Element;
}

export interface NavigationProps {
  routes: NavigationRoute<NavigateProps>[];
}

export const NativeStack = createNativeStackNavigator();
export const { Navigator, Screen } = NativeStack;

export const Navigation = ({ routes }: NavigationProps) => (
  <NavigationContainer>
    <Navigator initialRouteName={(routes[0].name || 'home').toLowerCase()}>
      {routes.map(({ title, name, Page }, routeIndex) => (
        <Screen
          key={`${name}:${routeIndex + 1}`}
          name={name.toLowerCase()}
          component={Page as any}
          options={({ route, navigation }) => ({
            title: !!title ? title({ navigation, route }) : '',
            headerTintColor: 'rgba(255, 255, 255, 1)',
            headerStyle: {
              backgroundColor: 'rgba(0, 0, 0, 1)',
              color: 'rgba(255, 255, 255, 1)'
            },
          })}
        />
      ))}
    </Navigator>
  </NavigationContainer>
);
