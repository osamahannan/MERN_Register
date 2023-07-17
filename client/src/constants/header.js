import Cookies from "js-cookie";

export const authHeader = () => {
    const userAccessToken = Cookies.get("jwtoken");
    console.log("Cookies =", userAccessToken)
    if (userAccessToken) {
        return {
            "Content-Type": "application/json",
            Authorization: "JWT " + userAccessToken,
        };
    } else {
        return { "Content-Type": "application/json" };
    }
};