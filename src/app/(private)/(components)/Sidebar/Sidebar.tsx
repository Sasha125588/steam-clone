import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import {
  ArrowRightIcon,
  DownloadCloudIcon,
  PlusIcon,
  UsersIcon,
} from "lucide-react";

export const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <h1 className="text-2xl font-bold text-white">Steam Clone</h1>
      </SidebarHeader>
      <SidebarContent className="p-4">
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter className="p-4">
        <div className="flex flex-col gap-4">
          <div className="border border-muted-foreground/50 h-13 rounded-md flex items-center justify-between px-3">
            <div className="flex items-center gap-2">
              <UsersIcon size={16} className="text-[#2f99e6]" />
              <p className="text-xs text-white font-semibold text-center">
                Friends & Chat
              </p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-[#2f99e6] text-xs font-semibold">12 Online</p>
              <ArrowRightIcon className="text-zinc-600" size={18} />
            </div>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex-1 h-26 bg-muted-foreground/15 rounded-md p-2 flex-col place-content-center">
              <div className="size-8 bg-ring/30 rounded-full mx-auto flex items-center justify-center ">
                <PlusIcon size={20} />
              </div>
              <div className="mt-2">
                <p className="text-[13px] text-white text-center uppercase font-bold">
                  Add A Game
                </p>
                <p className="text-[#2f99e6] text-xs text-center font-semibold">
                  Activate
                </p>
              </div>
            </div>
            <div className="flex-1 h-26 bg-muted-foreground/15 rounded-md p-2 flex-col place-content-center">
              <div className="size-8 bg-ring/30 rounded-full mx-auto flex items-center justify-center">
                <DownloadCloudIcon size={20} />
              </div>
              <div className="mt-2">
                <p className="text-[13px] text-white text-center uppercase font-bold">
                  Downloads
                </p>
                <p className="text-[#2f99e6] text-xs text-center font-semibold">
                  Manage
                </p>
              </div>
            </div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};
