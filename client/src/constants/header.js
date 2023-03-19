import Cookies from "js-cookie";

export const authHeader = () => {
    const userAccessToken = Cookies.get("userAccessToken");
    console.log("Cookies =", Cookies.get("userAccessToken"))
    if (userAccessToken) {
        return {
            "Content-Type": "application/json",
            Authorization: "Bearer " + userAccessToken,
        };
    } else {
        return { "Content-Type": "application/json" };
    }
};