import React from "react";
import { Navigation } from "@components/Navigation";
import { routes } from "~/infrastructure/routes";

export default function App() {
  return <Navigation routes={routes} />;
}
