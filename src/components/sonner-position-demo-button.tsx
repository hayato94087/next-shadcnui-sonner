"use client";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

import { FC } from "react";

interface SonnerPositionDemoProps {}

export const SonnerPositionDemoButton: FC<SonnerPositionDemoProps> = ({}) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Button
        variant="outline"
        onClick={() => toast("Top Left", { position: "top-left" })}
      >
        Top Left
      </Button>
      <Button
        variant="outline"
        onClick={() => toast(" Top Center", { position: "top-center" })}
      >
        Top Center
      </Button>
      <Button
        variant="outline"
        onClick={() => toast("Top Right", { position: "top-right" })}
      >
        Top Right
      </Button>
      <Button
        variant="outline"
        onClick={() => toast("Bottom Left", { position: "bottom-left" })}
      >
        Bottom Left
      </Button>
      <Button
        variant="outline"
        onClick={() => toast(" Bottom Center", { position: "bottom-center" })}
      >
        Bottom Center
      </Button>
      <Button
        variant="outline"
        onClick={() => toast("Bottom Right", { position: "bottom-right" })}
      >
        Bottom Right
      </Button>
    </div>
  );
};
