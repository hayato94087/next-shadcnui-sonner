import { SonnerPositionDemoButton } from "@/components/sonner-position-demo-button";
import { SonnerTypeDemoButton } from "@/components/sonner-type-demo-button";
import { type FC } from "react";

const Home: FC = () => {
  return (
    <div className="container flex flex-col space-y-4 mt-4">
      <h1 className="text-2xl font-bold">Sonner Demo</h1>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-4">
          <h2 className="text-lg font-bold">Type</h2>
          <p className="text-sm">
            レンダリングするトーストの種類をカスタマイズできます。Propsの第2引数としてオプションを渡すことができます。
          </p>
          <div>
            <SonnerTypeDemoButton />
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="text-lg font-bold">Position</h2>
          <p className="text-sm">
            レンダリングするトーストの位置をカスタマイズできます。
          </p>
          <div>
            <SonnerPositionDemoButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
