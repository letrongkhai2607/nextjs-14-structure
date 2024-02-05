import { getNote } from "@/services";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const useQueryGetNote = (name: string) => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ["note", name],
    queryFn: async () => await getNote(name),
    enabled: !!name,
  });
};

export { useQueryGetNote };
