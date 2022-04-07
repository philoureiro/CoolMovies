import { NativeBaseProvider } from "native-base"
import React from "react"
import { TabNavigator } from "./src/components"

export default function App() {
  return (
    <NativeBaseProvider>
      <TabNavigator />
    </NativeBaseProvider>
  )
}
