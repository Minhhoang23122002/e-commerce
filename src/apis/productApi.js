import axios from "axios"

export const loginUser = {
    getAllUser: async () => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_BE_URL}/user/sign-in`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
};