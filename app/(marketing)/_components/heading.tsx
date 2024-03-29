"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        {" "}
        Your Ideas, Documents, & Plans. Unified. Welcome to{" "}
        <span className="underline">Botion</span>
      </h1>
      <h3>
        Botion is connected workspace where <br /> better, faster work happends.
      </h3>

      <Button>
        Enter Botion
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};
