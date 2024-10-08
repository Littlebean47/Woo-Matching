import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="Chats"
        options={{
          title: 'Chats',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'message' : 'message-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ProfileLikes"
        options={{
          title: 'Liked You',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'heart' : 'heart-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'People',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={'bird'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Roulette"
        options={{
          title: 'Roulette',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'cards-playing-heart' : 'cards-playing-heart-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'account' : 'account-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
