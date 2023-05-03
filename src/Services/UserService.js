import axios from 'axios';
class UserService{

    static getAllUser()
    {
        let serverUrl='https://jsonplaceholder.typicode.com/users';
        return  axios.get(serverUrl);
    }

}

export default UserService