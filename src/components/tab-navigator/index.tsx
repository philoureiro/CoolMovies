import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { HomeScreen } from "../../pages"

const Tab = createMaterialBottomTabNavigator()

const MyTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        activeColor="#e91e63"
        barStyle={{ backgroundColor: "tomato" }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default MyTabs
