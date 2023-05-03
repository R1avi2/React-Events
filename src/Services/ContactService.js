
import axios from 'axios';
class ContactService {
 

    static getAllContacts()
    {
        let contactUrl='https://jsonplaceholder.typicode.com/users';
       return  axios.get(contactUrl)
    }

}

export default ContactService