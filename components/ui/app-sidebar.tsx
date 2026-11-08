import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { House, Scissors, User, UsersRound } from "lucide-react"

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader><Scissors /></SidebarHeader>
      <SidebarContent>
        <SidebarGroup  title="Main">
             <SidebarMenuButton render={<a href={"/dashboard/"} />}>
                <House />
                <span>Home</span>
            </SidebarMenuButton>
            
            <SidebarMenuButton render={<a href={"/dashboard/users"} />}>
                <UsersRound />
                <span>Users</span>
            </SidebarMenuButton>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}