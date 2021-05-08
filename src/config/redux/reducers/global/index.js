const initState = {
    env: 'PRODUCTION'
};

const globalReducer = (state = initState, action) => {
    if (action.type === 'SYAIKHANAGIL') {
        return {
            ...state
        };
    }
    return state;
};

export default globalReducer;
