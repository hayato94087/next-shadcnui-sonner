"use client";
import { toast } from "sonner";
import { Car } from "lucide-react";
import { Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

import { FC } from "react";

interface SonnerTypeDemoProps {}

export const SonnerTypeDemoButton: FC<SonnerTypeDemoProps> = ({}) => {
  const promise = (): Promise<{ name: string }> =>
    new Promise((resolve) =>
      setTimeout(() => resolve({ name: "Sonner" }), 2000)
    );

  return (
    <div className="grid grid-cols-4 gap-4">
      <Button variant="outline" onClick={() => toast("Event has been created")}>
        Default
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
          })
        }
      >
        Description
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Description, Action
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          toast.promise(promise, {
            loading: "Loading...",
            success: (data) => {
              return `${data.name} toast has been added`;
            },
            error: "Error",
          })
        }
      >
        Promise
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", { icon: <Car className="w-4 h-4" /> })
        }
      >
        Icon
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            icon: <Car className="w-4 h-4" />,
            style: { background: "#dc2626", color: "#fff" },
          })
        }
      >
        Color
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          toast(
            <div className="flex flex-col space-y-2">
              <div className="flex flex-row space-x-2 items-center">
                <Sun className="w-4 h-4" />
                <div>Good Morning</div>
              </div>
              <div>
                <div className="flex justify-center items-center">
                  <div className="bg-yellow-400 rounded-full w-24 h-24 flex justify-center items-center">
                    <div className="bg-yellow-500 rounded-full w-16 h-16 flex justify-center items-center">
                      <div className="bg-yellow-600 rounded-full w-8 h-8"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      >
        Custom
      </Button>
    </div>
  );
};
