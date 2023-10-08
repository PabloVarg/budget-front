"use client";

import { HashLoader } from "react-spinners";
import MovementForm from "@/components/MovementForm";
import Divider from "@/components/Divider";
import Movement from "@/components/Movement";
import { Typography } from "@material-tailwind/react";
import MovementsProvider from "@/contexts/MovementContext";
import { useMovements } from "@/services/movements";

export default function Movements() {
  const { data, isError, isLoading, refetch } = useMovements();

  return (
    <MovementsProvider refetch={refetch}>
      <div className="my-5">
        <Typography variant="h4" className="text-center mb-4">
          Register a movement
        </Typography>

        <div className="grid place-items-center justify-items-center">
          <div className="w-3/4 lg:w-1/2">
            <MovementForm />
          </div>
        </div>
      </div>

      <Divider />

      <div className="mt-4 grid grid-cols-1 place-items-center justify-items-center gap-12">
        <MovementsList data={data} isError={isError} isLoading={isLoading} />
      </div>
    </MovementsProvider>
  );
}

function MovementsList({
  data,
  isError,
  isLoading,
}: {
  data: [Movement];
  isError: boolean;
  isLoading: boolean;
}) {
  if (isLoading) {
    return (
      <div className="grid place-items-center min-h-screen">
        <HashLoader />
      </div>
    );
  }

  if (isError) {
    return <div>Error :(</div>;
  }

  return (
    <div className="grid place-items-center w-3/4 sm:w-1/2">
      {data?.map((item: Movement) => (
        <Movement key={JSON.stringify(item)} movement={item} />
      ))}
    </div>
  );
}
