import { create } from "zustand";

const useLoggedInUserDetails = create((set) => ({
    details: {},
    setDetails: (data) => {
        set({
            details: data
        })
    }
}))

export default useLoggedInUserDetails