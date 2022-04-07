import React, { useEffect } from "react"
import { BackHandler } from "react-native"
import { Container, Text } from "./styles"

const Dashboard = () => {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      return true
    })
  })
  return (
    <Container>
      <Text>Dashboard</Text>
    </Container>
  )
}

export default Dashboard
