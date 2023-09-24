import { Card, Collapse, Typography } from "@material-tailwind/react";
import { useReducer } from "react";
import MovementForm from "./MovementForm";

const nature_tr = ["Income", "Expense", "Investment"];

export default function Movement({ movement }: { movement: Movement }) {
  const [isFormOpen, toggleForm] = useReducer((state) => !state, false);

  return (
    <Card className="p-6 w-full border border-black my-5">
      <div>
        <div
          onClick={toggleForm}
          className="grid grid-cols-2 justify-items-center place-items-center"
        >
          <Typography variant="small" className="col-span-2">
            {movement.effective_date}
          </Typography>
          <Typography className="col-span-2">${movement.amount} MXN</Typography>
          <Typography variant="h6">{movement.category}</Typography>
          <Typography
            variant="paragraph"
            color={movement.nature == 1 ? "red" : "green"}
          >
            {nature_tr[movement.nature]}
          </Typography>
          <Typography className="col-span-2 text-justify">
            {movement.description}
          </Typography>
        </div>

        {isFormOpen && (
          <Collapse open={isFormOpen} className="col-span-2">
            <div className="pt-3">
              <MovementForm movement={movement} />
            </div>
          </Collapse>
        )}
      </div>
    </Card>
  );
}
