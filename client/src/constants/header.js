import Cookies from "js-cookie";

export const authHeader = () => {
    const userAccessToken = Cookies.get("jwtoken");
    console.log("Cookies =", userAccessToken)
    if (userAccessToken) {
        console.log("it came in if")
        return {
            "Content-Type": "application/json",
            Authorization: "Bearer " + userAccessToken,
        };
    } else {
        console.log("it came in else")
        return { "Content-Type": "application/json" };
    }
};