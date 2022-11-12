import { useState } from "react"
import SignIn from "../SignIn"


const Main = () => {

    const [isSignIn, setIsSignIn] = useState(false);

    return (
        <div>
            {(isSignIn) ?
               
               " "

                :

                <SignIn
                    state={isSignIn}
                    setState={setIsSignIn}
                />
            }
        </div>
    )
}

export default Main;
