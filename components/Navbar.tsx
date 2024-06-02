"use client";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import Icon from "@/utils/icons";
import { ThemeButton } from "./ui/theme-button";
import SearchDialog from "./ui/search-dialog";
const Navbar = () => {
  const route = useRouter();
  return (
    <div className="w-full py-4 flex items-center justify-between">
      <div className="left "></div>
      <div className="search-container flex shrink-0 w-full gap-2 sm:w-fit">
        <SearchDialog />
        <div className="btn-group flex gap-2 items-center">
          <ThemeButton />
          <Button
            className="source-code flex items-center gap-2"
            onClick={() => {
              route.push("https://github.com");
            }}
          >
            <Icon name="Github" size="24px" />
            Source Code
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
