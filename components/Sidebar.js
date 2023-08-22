import Image from "next/image";
import { HomeIcon } from "@heroicons/react/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import SidebarMenuItem from "./SidebarMenuItem";

export default function Sidebar() {
  const OPTIONS_MENU = [
    { id: 1, text: "Home", Icon: HomeIcon, active: true },
    { id: 2, text: "Explore", Icon: HashtagIcon, active: false },
    { id: 3, text: "Notifications", Icon: BellIcon, active: false },
    { id: 4, text: "Messages", Icon: InboxIcon, active: false },
    { id: 5, text: "Bookmarks", Icon: BookmarkIcon, active: false },
    { id: 6, text: "Lists", Icon: ClipboardIcon, active: false },
    { id: 7, text: "Profile", Icon: UserIcon, active: false },
    { id: 8, text: "More", Icon: DotsCircleHorizontalIcon, active: false },
  ];

  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">
      {/** Twiitter logo */}
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <Image
          width="50"
          height="50"
          src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
        />
      </div>

      {/** Menu */}
      <div className="mt-4 mb-2.5 xl:items-start">
        {OPTIONS_MENU.map(({ id, text, Icon, active }) => (
          <SidebarMenuItem text={text} Icon={Icon} key={id} active={active} />
        ))}
      </div>

      {/** Button */}
      <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden text-lg:inline">
        Tweet
      </button>

      {/** Mini-Profile */}
      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
        <img
          src="https://lh3.googleusercontent.com/a/AEdFTp4z34-zOHfwDhmOxrU0SCLKzOosLKoDpk-1NR-f=s96-c"
          alt="user-img"
          className="h-10 w-10 rounded-full xl:mr-2"
        />
        <div className="leading-5 hidden xl:inline">
          <h4 className="font-bold">Rafael Soriano</h4>
          <p className="text-gray-500">@codeSoriano</p>
        </div>
        <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
      </div>
    </div>
  );
}
