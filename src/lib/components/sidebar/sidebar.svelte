<script lang="ts">
	import {
	Bell,
	CircleUser,
	Home,
	LineChart,
	Menu,
	Package,
	Package2,
	Search,
	ShoppingCart,
	Users,
	Wallet,
	MessagesSquare,
	Car,
	FileText,
	Warehouse,
	LayoutTemplate,
	Settings,
	WalletCards,
	ArrowRightLeft,
	Calculator,
	Building2,
	CirclePlus,
	ChevronDown,
	} from "lucide-svelte";
	import { Badge } from "$lib/components/ui/badge/index.js";
	import { Button } from "$lib/components/ui/button/index.js";
	import * as Card from "$lib/components/ui/card/index.js";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
	import { Input } from "$lib/components/ui/input/index.js";
	import * as Sheet from "$lib/components/ui/sheet/index.js";
	import logo from '$lib/assets/images/OkeformLogo.svg'
  import { Separator } from "$lib/components/ui/separator";
</script>


<div
    class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]"
  >
    <!-- desktop mode -->
    <div class="hidden border-r bg-muted/40 md:block">
      <div class="flex h-full max-h-screen flex-col gap-2">
        <div
          class="flex min-h-14 items-center border-b px-4 lg:min-h-[60px] lg:px-6 justify-between"
        >
          <img src="logo" alt="logo" />
          <!-- <img :src="hmenu" alt="menu" width="25px" class="cursor-pointer" /> -->
          <!-- <a href="/" class="flex items-center gap-2 font-semibold">
            <Package2 class="h-6 w-6" />
            <span class="">Okeform</span>
          </a>
          <Button variant="outline" size="icon" class="ml-auto h-8 w-8">
            <Bell class="h-4 w-4" />
            <span class="sr-only">Toggle notifications</span>
          </Button> -->
        </div>

        <div class="flex px-2">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger class="my-4">
              <!-- Open -->
              <Button
                variant="secondary"
                class="rounded-2xl hover:bg-slate-200/50 w-full flex justify-between gap-2 px-2 lg:px-4"
              >
                <div class="flex items-center justify-center gap-2">
                  <CircleUser class="h-7 w-7" />
                  <!-- <span class="sr-only">Toggle user menu</span> -->
                  Your Company
                </div>

                <ChevronDown class="h-4 w-4 transition-all hover:rotate-180" />
              </Button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Content align="end">
              <DropdownMenu.Label class="cursor-pointer flex gap-2">
                <Building2 class="h-4 w-4" />
                Company Profile
              </DropdownMenu.Label>
              <DropdownMenu.Separator />
              <DropdownMenu.Item class="cursor-pointer flex gap-2">
                <Users class="h-4 w-4" />
                Employee
              </DropdownMenu.Item>
              <DropdownMenu.Item class="cursor-pointer flex gap-2">
                <CirclePlus class="h-4 w-4" />
                Add a new company
              </DropdownMenu.Item>
              <DropdownMenu.Separator />
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>

        <div class="flex-1">
          <nav class="grid items-start px-2 text-sm font-medium lg:px-4">
            <a
              href="/dashboard"
              class="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 transition-all hover:text-primary hover:bg-slate-200/50"
            >
              <Home class="h-4 w-4" />
              Dashboard
            </a>
            <a
              href="/notifications"
              class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-slate-200/50"
            >
              <Bell class="h-4 w-4" />
              Notification
            </a>
            <a
              href="/cs-management"
              class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-slate-200/50"
            >
              <MessagesSquare class="h-4 w-4" />
              CS Management
            </a>
            <Separator class="my-2" />
            <a
              href="/orders"
              class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-slate-200/50"
            >
              <ShoppingCart class="h-4 w-4" />
              Orders
              <Badge
                class="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
              >
                6
              </Badge>
            </a>
            <a
              href="/send-order"
              class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-slate-200/50"
            >
              <Car class="h-4 w-4" />
              Send Order
            </a>

            <Separator class="my-2" />
            <a
              href="/sale"
              class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-slate-200/50"
            >
              <FileText class="h-4 w-4" />
              Sale
            </a>
            <Separator class="my-2" />
            <a
              href="/ages"
              class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-slate-200/50"
            >
              <LayoutTemplate class="h-4 w-4" />
              Pages
            </a>
            <a
              href="/products"
              class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-slate-200/50"
            >
              <Package class="h-4 w-4" />
              Products
            </a>
            <a
              href="/warehouse"
              class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-slate-200/50"
            >
              <Warehouse class="h-4 w-4" />
              Warehouse
            </a>
            <a
              href="/customer-services"
              class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-slate-200/50"
            >
              <Users class="h-4 w-4" />
              Customer Services
            </a>
            <Separator class="my-2" />
            <a
              href="/balance"
              class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-slate-200/50"
            >
              <WalletCards class="h-4 w-4" />
              Balance
            </a>
            <a
              href="/transactions"
              class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-slate-200/50"
            >
              <ArrowRightLeft class="h-4 w-4" />
              Transactions
            </a>
            <a
              href="/order-reconsiliations"
              class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-slate-200/50"
            >
              <Calculator class="h-4 w-4" />
              Order Reconsiliations
            </a>
            <Separator class="my-2" />
            <a
              href="/settings"
              class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-slate-200/50"
            >
              <Settings class="h-4 w-4" />
              Settings
            </a>
          </nav>
        </div>
        <div class="mt-auto p-4">
          <Card.Root>
            <Card.Header class="p-2 pt-0 md:p-4">
              <Card.Title>Upgrade to Pro</Card.Title>
              <Card.Description>
                Unlock all features and get unlimited access to our support
                team.
              </Card.Description>
            </Card.Header>
            <Card.Content class="p-2 pt-0 md:p-4 md:pt-0">
              <Button size="sm" class="w-full"> Upgrade </Button>
            </Card.Content>
          </Card.Root>
        </div>
      </div>
    </div>
    <!-- mobile/responsive mode -->
    <div class="flex flex-col">
      <header
        class="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6"
      >
        <Sheet.Root>
          <Sheet.Trigger>
            <Button variant="outline" size="icon" class="shrink-0 md:hidden">
              <Menu class="h-5 w-5" />
              <span class="sr-only">Toggle navigation menu</span>
            </Button>
          </Sheet.Trigger>
          <Sheet.Content side="left" class="flex flex-col">
            <nav
              class="grid gap-2 text-lg font-medium overflow-y-auto overflow-x-hidden"
            >
              <a
                href="/"
                class="flex items-center gap-2 text-lg font-semibold mb-6"
              >
                <!-- <Package2 class="h-6 w-6" /> -->
                <!-- <span class="sr-only">Okeform dslkfmdslkmf</span> -->
                <!-- oi -->
                <img src="logo" alt="logo" />
              </a>
              <a
                href="/dashboard"
                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <Home class="h-5 w-5" />
                Dashboard
              </a>
              <a
                href="/notifications"
                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <Bell class="h-5 w-5" />
                Notification
              </a>
              <a
                href="/cs-management"
                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <MessagesSquare class="h-5 w-5" />
                CS Management
              </a>
              <Separator class="my-2" />
              <a
                href="/orders"
                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
              >
                <ShoppingCart class="h-5 w-5" />
                Orders
                <Badge
                  class="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                >
                  6
                </Badge>
              </a>
              <a
                href="/send-order"
                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <Car class="h-4 w-4" />
                Send Order
              </a>

              <Separator class="my-2" />
              <a
                href="/sale"
                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <FileText class="h-4 w-4" />
                Sale
              </a>
              <Separator class="my-2" />
              <a
                href="/pages"
                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <LayoutTemplate class="h-4 w-4" />
                Pages
              </a>
              <a
                href="/products"
                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <Package class="h-4 w-4" />
                Products
              </a>
              <a
                href="/warehouse"
                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <Warehouse class="h-4 w-4" />
                Warehouse
              </a>
              <a
                href="/customer-services"
                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <Users class="h-4 w-4" />
                Customer Services
              </a>
              <Separator class="my-2" />
              <a
                href="balance"
                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <WalletCards class="h-4 w-4" />
                Balance
              </a>
              <a
                href="transactions"
                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <ArrowRightLeft class="h-4 w-4" />
                Transactions
              </a>
              <a
                href="order-reconsiliations"
                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <Calculator class="h-4 w-4" />
                Order Reconsiliations
              </a>
              <Separator class="my-2" />
              <a
                href="settings"
                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <Settings class="h-4 w-4" />
                Settings
              </a>
            </nav>
            <div class="mt-auto">
              <Card.Root>
                <Card.Header>
                  <Card.Title>Upgrade to Pro</Card.Title>
                  <Card.Description>
                    Unlock all features and get unlimited access to our support
                    team.
                  </Card.Description>
                </Card.Header>
                <Card.Content>
                  <Button size="sm" class="w-full"> Upgrade </Button>
                </Card.Content>
              </Card.Root>
            </div>
          </Sheet.Content>
        </Sheet.Root>
        <div class="w-full flex-1">
          <form>
            <div class="relative">
              <Search
                class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
              />
              <Input
                type="search"
                placeholder="Search products..."
                class="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
              />
            </div>
          </form>
        </div>
        <Button variant="secondary" class="rounded-full">
          <Wallet class="h-5 w-5" />
          RP 1000000
          <span class="sr-only">Toggle user menu</span>
        </Button>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="secondary" size="icon" class="rounded-full">
              <CircleUser class="h-5 w-5" />
              <span class="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content align="end">
            <DropdownMenu.Label class="cursor-pointer"
              >My Account</DropdownMenu.Label
            >
            <DropdownMenu.Separator />
            <DropdownMenu.Item class="cursor-pointer">Settings</DropdownMenu.Item>
            <DropdownMenu.Item class="cursor-pointer">Support</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <!-- <RouterLink :to="{ path: '/' }"> -->
              <DropdownMenu.Item class="cursor-pointer">Logout</DropdownMenu.Item>
            <!-- </RouterLink> -->
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </header>
      <main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <!-- <ProductVue /> -->
        <!-- <DashboardVue /> -->
      </main>
    </div>
  </div>

<!-- <aside>
    <h1>Ini halaman Sidebar</h1>
</aside> -->