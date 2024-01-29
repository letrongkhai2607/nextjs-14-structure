import { getNotes } from "@/services";
import { useQuery } from "@tanstack/react-query";

const initialNotes: Array<{ name: string }> = [
  { name: "1" },
  { name: "2" },
  { name: "3" },
  { name: "4" },
];
const useQueryNotes = () => {
  return useQuery({
    queryKey: ["notes"],
    queryFn: getNotes,
  });
};

export { useQueryNotes };
