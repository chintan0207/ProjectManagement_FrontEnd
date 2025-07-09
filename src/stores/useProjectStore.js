import { create } from "zustand";
import axiosInstance from "../api/axios";
import { toast } from "sonner";
import { createQueryParams } from "../utils/utility";

const useProjectStore = create((set, get) => ({
  project: null,
  projects: [], // Only the array of projects
  isProjectLoading: false,
  isProjectsLoading: false,

  paginationData: {
    page: 1,
    limit: 10,
    numberOfRecords: 0,
  },
  setPaginationData: (data) =>
    set((state) => ({
      paginationData: { ...state.paginationData, ...data },
    })),

  sortingData: {
    sortField: "createdAt",
    sortOrder: "desc",
  },
  setSortingData: (data) => set({ sortingData: data }),

  searchFilter: {
    search: "",
  },
  setSearchFilter: (data) => set({ searchFilter: data }),

  getProjects: async () => {
    const { paginationData, sortingData, searchFilter } = get();

    try {
      set({ isProjectsLoading: true });
      console.log("sortingData", sortingData);
      const combinedData = {
        page: paginationData?.page,
        limit: paginationData?.limit,
        ...sortingData,
        ...searchFilter,
      };

      const queryString = createQueryParams(combinedData);
      console.log("queryString", queryString);

      const response = await axiosInstance.get(`/project${queryString}`);

      if (response?.data?.success) {
        const data = response.data.data;
        console.log("data", data.total);

        set({
          projects: data.projects,
          paginationData: {
            page: data.page,
            limit: data.limit,
            numberOfRecords: data.total,
          },
        });
      } else {
        toast.error(response?.data?.message || "Failed to fetch projects");
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
      toast.error("Something went wrong while fetching projects");
    } finally {
      set({ isProjectsLoading: false });
    }
  },
}));

export default useProjectStore;
