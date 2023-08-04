import axios from "axios";
import { Task } from "../Models/TaskModel";
import { BASEURL, SEARCH, API_RM_ID, headers, USERLIST } from "../Constants";

export const fetchDataFromAPI = async (
  isSearch: boolean,
  searchQuery: string
): Promise<Task[] | null> => {
  let url1 = false;
  let url = `${BASEURL}${USERLIST}${API_RM_ID}`;

  if (isSearch && searchQuery) {
    url = `${BASEURL}${SEARCH}${searchQuery}${API_RM_ID}`;
    url1 = true;
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

      console.log("I am responce1", response.data.response.task_list);

      // console.log("I am responce", response.data.response.task_data);

      return response.data.response.task_list;
    } else {
      const response = await axios.get<{ response: { task_data: Task[] } }>(
        url,
        {
          headers,
        }
      );

      console.log("I am responce1", response.data.response.task_data);

      // console.log("I am responce", response.data.response.task_data);

      return response.data.response.task_data;
    }
  } catch (error) {
    // Handle any errors here
    console.log(error);
    return null;
  }
};
