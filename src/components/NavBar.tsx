import { Navbar, Typography } from "@material-tailwind/react";
import Link from "next/link";
import { CurrencyYenIcon } from "@heroicons/react/20/solid";

export default function NavBar() {
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/" className="flex items-center">
          Home
        </Link>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/movements" className="flex items-center">
          Movements
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar
      fullWidth
      blurred
      className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4"
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link href="/" className="mr-4 cursor-pointer">
          <CurrencyYenIcon className="w-8 h-8" />
        </Link>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
        </div>
      </div>
    </Navbar>
  );
}
