"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu } from "./menu";
import { SidebarToggle } from "./sidebar-toggle";
import { useStore } from "@/hooks/use-store";
import { useSidebar } from "@/hooks/use-sidebar";

export function CustomSidebar() {
  const sidebar = useStore(useSidebar, (x) => x);
  if (!sidebar) return null;
  const { isOpen, toggleOpen, getOpenState, setIsHover, settings } = sidebar;
  return (
    <aside
      className={cn(
        "fixed top-0 left-0 z-20 h-screen -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300 bg-background",
        !getOpenState() ? "w-[90px]" : "w-72",
        settings.disabled && "hidden"
      )}
    >
      <SidebarToggle isOpen={isOpen} setIsOpen={toggleOpen} />
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="relative h-full flex flex-col px-3 py-4 overflow-y-auto shadow-md dark:shadow-zinc-800"
      >
        <Button
          className={cn(
            "transition-transform ease-in-out duration-300 mb-1",
            !getOpenState() ? "translate-x-1" : "translate-x-0"
          )}
          variant="link"
          asChild
        >
          <Link href="/dashboard" className="flex items-center gap-2">
            <img
              src="https://placehold.co/100x30"
              alt="placeholder logo"
              className="w-[100px] h-[100px]"
            />
          </Link>
        </Button>
        <Menu isOpen={getOpenState()} />
      </div>
    </aside>
  );
}
