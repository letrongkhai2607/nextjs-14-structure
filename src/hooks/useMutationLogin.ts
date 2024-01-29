import { addNote, login } from "@/services";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const useMutationLogin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: { phone: string; password: string }) => {
      return login(payload);
    },
    onError: (error) => {},
    onSuccess: (data) => {},
    onSettled: () => {},
  });
};

export { useMutationLogin };
