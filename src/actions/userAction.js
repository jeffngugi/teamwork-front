import { GET_USERS, USER_LOADING } from "./types";
import axios from "axios";
import URL from "../helpers/url";

//get all users
export const getUsers = () => async (dispatch) => {
  dispatch(userLoading());
  try {
    axios
      .get(`${URL}/users/all`)
      .then((res) =>
        dispatch({
          type: GET_USERS,
          payload: res.data.data,
        })
      )
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(`Error ${error}`);
  }
};

export const userLoading = () => {
  return {
    type: USER_LOADING,
  };
};
