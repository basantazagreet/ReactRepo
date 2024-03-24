import React, {useState} from "react";
const FormDemo = () => {

    const [name, setName] = useState('');
    const [friendName, setFriendName] = useState('');
    const [isFriend, setIsFriend] = useState(false);


    function submitHandler (e) {
        console.log(name, friendName,isFriend);
        e.preventDefault();
    }

    return(
        <>
        <h1>Eight: FormHandling</h1>
        <h3>Hello I am {name} and my best friend is {friendName} and do I love him? {isFriend}</h3>
        <form onSubmit={submitHandler}>
            <input type="text" onChange={(e) => setName(e.target.value)}/> <br/>
            <select onChange={(e) => setFriendName(e.target.value)}>
                <option>Badri</option>
                <option>Basu</option>
                <option>Sandeep</option>
                <option>Nishan</option>
                <option>Deepu</option>
            </select> <br/>
        <input type="checkbox" onChange={(e)=> setIsFriend(e.target.checked) }/> <br/>
        <button type="submit">submit</button>
        </form>
        </>
    );
}

export default FormDemo;