import { useMutation, useQuery } from "@tanstack/react-query";
import api from "./api";

const useMovements = () => {
  return useQuery({
    queryKey: ["fetchMovments"],
    queryFn: () => api.get("movements/").then((res) => res.data),
  });
};

const useCreateMovement = (onSuccess: () => void, onError: () => void) => {
  return useMutation({
    mutationKey: ["createMovement"],
    mutationFn: (movement: Movement) =>
      api.post("movements/", movement).then((res) => res.data),
    onSuccess,
    onError,
  });
};

const useUpdateMovement = (
  onSuccess: () => void,
  onError: () => void,
  id: number,
) => {
  return useMutation({
    mutationKey: ["updateMovement"],
    mutationFn: (movement: Movement) =>
      api.put(`movements/${id}/`, movement).then((res) => res.data),
    onSuccess,
    onError,
  });
};

const useDeleteMovement = (
  onSuccess: () => void,
  onError: () => void,
  id: number,
) => {
  return useMutation({
    mutationKey: ["deleteMovement"],
    mutationFn: () => api.delete(`movements/${id}/`).then((res) => res.data),
    onSuccess,
    onError,
  });
};

const useCategories = () => {
  return useQuery({
    queryKey: ["fetchCategories"],
    queryFn: () => api.get("movements/categories/").then((res) => res.data),
  });
};

export {
  useMovements,
  useCategories,
  useCreateMovement,
  useUpdateMovement,
  useDeleteMovement,
};
