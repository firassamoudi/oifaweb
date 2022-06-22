import Http from "../lib/http";

export const postSubscribe = async ({ email }) => {
  const res = await Http.post("/subscriber", {
    email,
  });
  // ...
  return { data: res.data };
};
