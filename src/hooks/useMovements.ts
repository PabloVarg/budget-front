import api from "@/services/api";

export default function useMovements() {
  const getMovements = () => api.get("movements/").then((res) => res.data);

  const createMovement =
    (onSucces: () => void, onError: () => void) => (movement: Movement) => {
      api
        .post("movements/", movement)
        .then((res) => res.data)
        .then(onSucces)
        .catch(onError);
    };

  const updateMovement =
    (id: number) =>
    (onSucces: () => void, onError: () => void) =>
    (movement: Movement) => {
      api
        .put(`movements/${id}/`, movement)
        .then((res) => res.data)
        .then(onSucces)
        .catch(onError);
    };

  const deleteMovement =
    (id: number) => (onSucces: () => void, onError: () => void) => () => {
      api
        .delete(`movements/${id}/`)
        .then((res) => res.data)
        .then(onSucces)
        .catch(onError);
    };

  const getCategories = () =>
    api.get("movements/categories/").then((res) => res.data);

  return {
    getMovements,
    getCategories,
    createMovement,
    deleteMovement,
    updateMovement,
  };
}
