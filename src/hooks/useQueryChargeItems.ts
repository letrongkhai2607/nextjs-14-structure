import { getChargeItems } from "@/services";

const useQuery = (cache: any, callback: any) => {};
const useQueryChartItems = async () => {
  return useQuery(["Charge-Items"], async () => await getChargeItems());
};
