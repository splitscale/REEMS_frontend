import store from "store";

export const getStoredToken = () => store.get("token") as string;
