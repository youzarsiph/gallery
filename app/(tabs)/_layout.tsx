import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'

import { TabBar, TabsHeader } from '@/lib'

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>['name']
  color: string
}) {
  return <MaterialCommunityIcons size={24} {...props} />
}

const TabLayout = () => (
  <Tabs
    tabBar={(props) => <TabBar {...props} />}
    screenOptions={{
      header: (props) => <TabsHeader navProps={props} children={undefined} />,
    }}
  >
    <Tabs.Screen
      name="index"
      options={{
        title: 'Photos',
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon
            name={focused ? 'image-multiple' : 'image-multiple-outline'}
            color={color}
          />
        ),
      }}
    />
    <Tabs.Screen
      name="albums"
      options={{
        title: 'Albums',
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon name={focused ? 'album' : 'image-album'} color={color} />
        ),
      }}
    />
  </Tabs>
)

export default TabLayout
