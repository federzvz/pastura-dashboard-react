const authProvider = {
    login: ({ username, password }) =>  {
        const request = new Request('http://localhost:1234/usuarios/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                console.log(response.data);
                return response.json();
            })
            .then(auth => {
                console.log(auth);
                localStorage.setItem('auth', JSON.stringify(auth));
            })
            .catch(() => {
                throw new Error('Network error')
            });
    },
    logout: () => {
        console.log("LOGOUT");
        // console.log(localStorage.getItem('auth')['username']);
        // var user = JSON.parse(localStorage.getItem('auth'));
        // console.log(user.username)
        localStorage.removeItem('auth');
        return Promise.resolve();
    },
    checkAuth: () =>
        localStorage.getItem('auth') ? Promise.resolve() : Promise.reject(),
    checkError:  (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        // other error code (404, 500, etc): no need to log out
        return Promise.resolve();
    },
    getIdentity: () =>
        Promise.resolve({
            // user: JSON.parse(localStorage.getItem('auth')),

            id: 'user',
            // fullName: 'John Doe',
            fullName: JSON.parse(localStorage.getItem('auth')).username,
            // fullName: 'username',
            // fullName: localStorage.getItem('username'),
        }),
    getPermissions: () => Promise.resolve(''),
};

export default authProvider;