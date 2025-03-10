import { cn } from "@/lib/utils";
import { Navbar } from "./navbar";
interface ContentLayoutProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function ContentLayout({
  title,
  children,
  className,
}: ContentLayoutProps) {
  return (
    <div
      className={cn(`flex flex-col h-screen relative bg-background`, className)}
    >
      <Navbar title={title} />
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}
