import axios from "axios";
import { Task } from "../Models/TaskModel";
import {
  BASEURL,
  SEARCH,
  API_RM_ID,
  headers,
  USERLIST,
  SORT,
  ASC,
  DESC,
} from "../Constants";

export const fetchDataFromAPI = async (
  isSearch: boolean,
  searchQuery: string,
  sortOrder: string
  // sortOrder: string // ASC or DESC
): Promise<Task[] | null> => {
  let url1 = false;
  let url = `${BASEURL}${USERLIST}${API_RM_ID}`;
  if (isSearch && searchQuery && !sortOrder) {
    url = `${BASEURL}${SEARCH}${searchQuery}${API_RM_ID}`;
    url1 = true;
  } else {
    // Use the provided sortOrder to set the appropriate URL
    if (sortOrder === ASC) {
      url = `${BASEURL}${USERLIST}${SORT}${ASC}`;
    } else if (sortOrder === DESC) {
      url = `${BASEURL}${USERLIST}${SORT}${DESC}`;
    }
  }
  // else {
  //   url = `${BASEURL}${USERLIST}${SORT}${ASC}`;
  // }

  try {
    if (!url1) {
      const response = await axios.get<{ response: { task_list: Task[] } }>(
        url,
        {
          headers,
        }
      );

      return response.data.response.task_list;
    } else {
      const response = await axios.get<{ response: { task_data: Task[] } }>(
        url,
        {
          headers,
        }
      );

      return response.data.response.task_data;
    }
  } catch (error) {
    // Handle any errors here
    console.log(error);
    return null;
  }
};
