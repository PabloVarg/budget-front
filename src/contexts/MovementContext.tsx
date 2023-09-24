import React, { createContext, useContext } from "react";

const MovementsContext = createContext(() => {});

export const useMovementsContext = () => useContext(MovementsContext);

export default function MovementsProvider({
  refetch,
  children,
}: {
  refetch: () => void;
  children: React.ReactNode;
}) {
  return (
    <MovementsContext.Provider value={refetch}>
      {children}
    </MovementsContext.Provider>
  );
}
