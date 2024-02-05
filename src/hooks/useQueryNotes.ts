import { getNotes } from "@/services";
import { useQuery } from "@tanstack/react-query";

const useQueryNotes = () => {
  return useQuery({
    queryKey: ["notes"],
    queryFn: async () => await getNotes(),
  });
};

export { useQueryNotes };
