import { StatusBar } from "expo-status-bar";
import Routes from "./src/routes";
import Home from "./src/screens/Home";

export default function app() {
  return (
    <>
      <Routes />
      <StatusBar style="light" />
    </>
  )
}