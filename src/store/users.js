import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import axios from "axios";

const userStore = create(
  persist(
    (set, get) => ({
      usersToSayHello: [],
      addUserToSayHello: async () => {
        const { data } = await axios.get("/notification");
        const userIds = new Set([
          ...data.split(",").map((str) => Number(str)),
          ...get().usersToSayHello,
        ]);
        const dataUsersIds = Array.from(userIds);
        set(() => ({
          usersToSayHello: [...dataUsersIds],
        }));
      },
      deleteAllUsers: () => set(() => ({ usersGreeted: [] })),
    }),
    { name: "userStore", storage: createJSONStorage(() => sessionStorage) }
  )
);

const deleteDocument = () => {
  fs.unlink("./queue.txt", function (err) {});
};

export default userStore;
