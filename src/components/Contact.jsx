import React from "react";

const Contact = () =>{
    return(
        <>
        <div className="contact">
            <main>
                <h1>Contact Us</h1>

                <form>
                    <div>
                        <label>Name</label>
                        <input type = "text" required placeholder="Abc"></input>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" required placeholder="Abc@xyz"></input>
                    </div>

                    <div>
                        <label>Message</label>
                        <input type="text" required placeholder="Tell Us  about your query..."></input>
                    </div>

                    <button type="submit">Send Messsage</button>
                </form>
            </main>
        </div>
        </>
    )
}

export default Contact