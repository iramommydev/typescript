// * Base
import { Suspense, ReactNode, memo } from "react";
import React from "react";
// * Components
import Loading from "../Loading/Loading";

const Element = memo(({ component }: {component: ReactNode}) => {
  return <Suspense fallback={<Loading />}>{component} </Suspense>;
});

export default Element;