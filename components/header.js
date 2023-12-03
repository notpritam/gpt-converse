import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { RiMenu2Line } from "react-icons/ri";

function Header() {
  return (
    <div
      data-mode="dark"
      className="w-full pl-4 pr-4 fixed justify-between top-0 left-0 right-0 h-[4rem] flex items-center bg:dark"
    >
      <div className="flex gap-2 items-center">
        <Button variant="outline" size="icon">
          <RiMenu2Line className="h-4 w-4" />
        </Button>
        <Link className="text-xl" href="/">
          Innovations Lab
        </Link>
      </div>

      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}

export default Header;
