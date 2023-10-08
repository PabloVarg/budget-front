import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Button,
  Input,
  Option,
  Select,
  Textarea,
} from "@material-tailwind/react";
import { useEffect } from "react";
import { getLocalDateString } from "@/utils/date";
import { useMovementsContext } from "@/contexts/MovementContext";
import { toast } from "react-toastify";
import {
  useCategories,
  useCreateMovement,
  useDeleteMovement,
  useUpdateMovement,
} from "@/services/movements";

export default function MovementForm({ movement }: { movement?: Movement }) {
  const { refetch } = useMovementsContext();

  const { data: categories, isSuccess } = useCategories();

  const schema = yup.object({
    amount: yup.number().required("An amount is required"),
    nature: yup.string().required("A nature of the movement is required"),
    effective_date: yup.string().required("An effective date is required"),
    description: yup.string(),
    category: yup.string().required("A category is required"),
  });

  const {
    reset,
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      amount: movement?.amount ?? 1_000.0,
      nature: movement?.nature?.toString() ?? "0",
      category: movement?.category,
      description: movement?.description ?? "",
      effective_date: movement?.effective_date ?? getLocalDateString(),
    },
  });

  const onSuccess = () => {
    reset();
    toast.success("Operation successful");
    refetch();
  };

  const onError = () => {
    reset();
    toast.error("Error on operation");
  };

  const { mutate: createMovement } = useCreateMovement(onSuccess, onError);
  const { mutate: updateMovement } = useUpdateMovement(
    onSuccess,
    onError,
    movement?.id ?? -1,
  );
  const { mutate: deleteMovement } = useDeleteMovement(
    onSuccess,
    onError,
    movement?.id ?? -1,
  );

  const formAction = movement?.id ? updateMovement : createMovement;

  return (
    <div className="flex items-center justify-center w-full">
      <form
        onSubmit={handleSubmit((movement) => formAction(movement))}
        className="w-full"
      >
        <div className="grid grid-cols-2 gap-5 mb-6 w-full">
          <div>
            <Input
              crossOrigin=""
              label="Amount"
              type="number"
              {...register("amount")}
              error={!!errors["amount"]}
            />
          </div>

          <div>
            <Controller
              control={control}
              name="nature"
              render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { error },
              }) => (
                <Select
                  label="Nature"
                  name={name}
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  ref={ref}
                  error={!!error}
                >
                  <Option value="0">Income</Option>
                  <Option value="1">Expense</Option>
                  <Option value="2">Investment</Option>
                </Select>
              )}
            />
          </div>

          <div>
            <Input
              crossOrigin=""
              label="Category"
              type="string"
              list="categories"
              {...register("category")}
              error={!!errors["category"]}
            />

            <datalist id="categories">
              {isSuccess &&
                categories.map((category: string) => (
                  <option key={category} value={category} />
                ))}
            </datalist>
          </div>

          <div>
            <Input
              crossOrigin=""
              label="Effective date"
              type="date"
              {...register("effective_date")}
              error={!!errors["effective_date"]}
            />
          </div>

          <div className="col-span-2">
            <Textarea
              label="Description"
              {...register("description")}
              error={!!errors["description"]}
            />
          </div>
        </div>

        <div className="col-span-2 flex items-center justify-center gap-4">
          <Button
            variant="outlined"
            color="gray"
            fullWidth
            onClick={() => reset()}
          >
            Clear form
          </Button>
          <Button variant="gradient" color="gray" fullWidth type="submit">
            {movement ? "Register" : "Update"}
          </Button>
        </div>

        {movement?.id && (
          <div className="col-span-2 mt-6">
            <Button
              variant="outlined"
              color="red"
              fullWidth
              type="button"
              onClick={() => deleteMovement()}
            >
              Delete
            </Button>
          </div>
        )}
      </form>
    </div>
  );
}
