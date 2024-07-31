import {
  Home,
  LineChart,
  Package,
  Package2,
  Package2Icon,
  PanelLeft,
  Search,
  Settings,
  ShoppingCart,
  Users2,
  LogIn,
  UserIcon,
  BriefcaseIcon,
  MailIcon,
  MonitorSmartphone,
  FolderDown,
  User,
} from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Dashboard({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <TooltipProvider>
        <div className="flex w-full flex-col">
          <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 border border-b">
            <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 ">
              <Sheet>
                <SheetTrigger asChild>
                  <Button size="icon" variant="outline" className="sm:hidden">
                    <PanelLeft className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="sm:max-w-xs">
                  <nav className="grid gap-6 text-lg font-medium">
                    <Link
                      href="#"
                      className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                    >
                      <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                      <span className="sr-only">Acme Inc</span>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                      <Home className="h-5 w-5" />
                      Dashboard
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-4 px-2.5 text-foreground"
                    >
                      <ShoppingCart className="h-5 w-5" />
                      Orders
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                      <Package className="h-5 w-5" />
                      Products
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                      <Users2 className="h-5 w-5" />
                      Customers
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                      <LineChart className="h-5 w-5" />
                      Settings
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
              <h1 className="uppercase font-bold text-blue-400">Fanvo</h1>
              <div className="relative ml-auto flex- md:grow-0 ">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className=" rounded-lg bg-background pl-8 md:w-[200px] lg:w-[500px]"
                />
              </div>
              <div className="relative flex items-center justify-center">
                <LogIn className="absolute left-3.5 top-3 h-4 w-4" />
                <button className="w-[95px] border rounded-lg border-slate-200 p-1.5 ml-1">
                  <span className="text-sm">Login</span>
                </button>
              </div>
            </header>
          </div>
          <aside className="hidden h-screen w-64 flex-col border-r bg-background p-4 md:flex">
            <nav className="flex flex-col items-start gap-2">
              <Link
                href="#"
                className="flex w-full items-center gap-2 rounded-md px-3 py-3 text-sm font-medium text-gray-500 transition-colors hover:bg-muted hover:text-foreground"
                prefetch={false}
              >
                <MonitorSmartphone className="h-5 w-5" />
                Domains
              </Link>
              <Link
                href="#"
                className="flex w-full items-center gap-2 rounded-md px-3 py-3 text-sm font-medium text-gray-500 transition-colors hover:bg-muted hover:text-foreground"
                prefetch={false}
              >
                <FolderDown className="h-5 w-5" />
                Curriculum Vitae
              </Link>
              <Link
                href="#"
                className="flex w-full items-center gap-2 rounded-md px-3 py-3 text-sm font-medium text-gray-500 transition-colors hover:bg-muted hover:text-foreground"
                prefetch={false}
              >
                <User className="h-5 w-5" />
                Profile
              </Link>
            </nav>
            <div className="mt-auto">
              <DropdownMenu>
                <DropdownMenuTrigger asChild></DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </aside>
          {children}
        </div>
      </TooltipProvider>
    </section>
  );
}
