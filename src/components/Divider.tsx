import { Typography } from "@material-tailwind/react";

export default function Divider() {
  return (
    <div className="relative flex items-center justify-center my-10">
      <hr className="absolute z-1 w-3/4" />
      <Typography variant="h6" className="absolute bg-white px-3">
        All movements
      </Typography>
    </div>
  );
}
