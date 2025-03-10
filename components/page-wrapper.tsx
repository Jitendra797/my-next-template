"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import { CustomSidebar } from "./admin-panel/sidebar";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentPath = usePathname();
  const paths = currentPath.split("/").filter((path) => path);

  const getNameForPath = (path: string): string => {
    return path.split("-").join(" ");
  };

  return (
    <SidebarProvider>
      <CustomSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between border-b px-4">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                {/* Breadcrumb list is created dynamically using the current path name */}
                {paths.map((path, index) => {
                  if (index == paths.length - 1) {
                    return (
                      <BreadcrumbItem key={path} className="hidden md:block">
                        <BreadcrumbPage className="capitalize">
                          {getNameForPath(path)}
                        </BreadcrumbPage>
                      </BreadcrumbItem>
                    );
                  }
                  return (
                    <>
                      <BreadcrumbItem key={path} className="hidden md:block">
                        <BreadcrumbLink
                          href={`/${paths.slice(0, index + 1).join("/")}`}
                          className="capitalize"
                        >
                          {getNameForPath(path)}
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      {index != 0 || index != paths.length - 1 ? (
                        <BreadcrumbSeparator />
                      ) : (
                        <></>
                      )}
                    </>
                  );
                })}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex items-center gap-2">
            <ModeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full">
                  CN
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                    <Link href="/">Logout</Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
