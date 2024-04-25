

const INITIAL_STATE = {
    account: {
        access_token: '',
        refresh_token: '',
        username: '',
        role: '',
        image: ''
    },
    isAuthentication: false,
};
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "FETCH_USER_LOGIN_SUCCESS":
            return {
                ...state, account: {
                    access_token: action?.payload?.DT?.access_token,
                    refresh_token: action?.payload?.DT?.refresh_token,
                    username: action?.payload?.DT?.username,
                    role: action?.payload?.DT?.role,
                    image: action?.payload?.DT?.image
                }, isAuthentication: true,
            };

        case "":
            return {

            };
        default: return state;
    }
};

export default userReducer;