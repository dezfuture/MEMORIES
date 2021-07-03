// this is done so that we can export action from here as an api
import * as api from "../api";

// Action Creators
// here fetch takes some time so we use Thunk over here as async (dispatch)
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
