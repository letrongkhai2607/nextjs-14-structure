import { addNote } from "@/services";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const useMutationAddNote = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: { name: string }) => {
      return addNote(payload);
    },
    onError: (error) => {},
    onSuccess: (data) => {},
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["notes"],
      });
    },
  });
};

export { useMutationAddNote };
