import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import useFetchWeather from "../../hooks/fetchWeather";
import { IWeather } from "./WeatherProvider.interface";

export const weatherContext = createContext<
  [
    IWeather | undefined,
    // React.Dispatch<React.SetStateAction<IWeather | undefined>>,
    boolean
  ]
>([undefined, true]);

const WeatherProvider = (args: any) => {
  const { weather, isLoading } = useFetchWeather();

  return (
    <weatherContext.Provider value={[weather, isLoading]}>
      {args.children}
    </weatherContext.Provider>
  );
};

export default WeatherProvider;
