const { TablesUser, RegisterUser } = require("..");

const usersConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes: [
        {
            path: '/dashboard/tablesUser',
            element: <TablesUser />
        },
        {
            path: '/dashboard/users/registerUser',
            element: <RegisterUser />
        }
        
    ]
};

export default usersConfig;