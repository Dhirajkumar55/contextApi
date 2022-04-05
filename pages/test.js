import {userAuthContext,useUserAuth} from '../context/UserAuthProvider'
import {useContext} from "react"
function Test(){
   
    const {user,logIn} = useUserAuth();
    console.log(user);

    function handleSubmit(){
        logIn();
    }
    return <div>
       <button onClick={handleSubmit}>click me</button>
    </div>
}

export default Test;
