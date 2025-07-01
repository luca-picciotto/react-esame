import { useState } from "react";
import { usePost } from "../hooks/useRegister";
import { Navbar } from "./Navbar";

export function Send() {
    const endpoint = 'http://localhost:3000/api/permissions';
    const [name, setName] = useState<string>("");
    const { postData } = usePost();
   return(
         <div>
            <Navbar />
              <h1>Send</h1>
              <p>Send component is under construction.</p>
              <form action="" onSubmit={(e) => {
                  e.preventDefault();
                    postData({ name }, endpoint);
                  // Here you would typically send the data to an API
              }}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <button type="submit">Send</button>
              </form>
         </div>
   )
}

export default Send;