import { useState } from "react"
import Navigator from "../Navigator";
import SignIn from "../SignIn"
import "./index.css"

const Main = () => {

    const [isSignIn, setIsSignIn] = useState(false);

    return (
        <div>
            {(isSignIn) ?
                <Navigator
                    state={isSignIn}
                    setState={setIsSignIn}
                />

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
