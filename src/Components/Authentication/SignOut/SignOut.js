import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';

const SignOut = () => {
    const logout = () => {
      signOut(auth);
    };
    return logout
};

export default SignOut;