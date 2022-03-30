import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens';

import {COLORS, images} from '../constants';
import {TabIcon} from '../components/';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.darkGreen,
        tabBarInactiveTintColor: COLORS.lightLime,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: COLORS.white,
          // left: 0,
          // right: 0,
          // top: 0,
          // bottom: 0,
          // elevation: 0,
          height: '9%',
          borderTopColor: 'transparent',
        },
      }}>
      <Tab.Screen
        name="Call"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} icon={images.call} />
          ),
        }}
      />
      <Tab.Screen
        name="Shield"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} icon={images.shield} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} icon={images.user} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
