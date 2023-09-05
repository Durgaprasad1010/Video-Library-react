import React, { useState, useEffect } from 'react'

function UserInfo() {
    const [usrList, setUsrList] = useState([])
    const [searchedUserName, setSearchedUserName] = useState("");
    const [searchedUserData, setSearchedUserData] = useState([])
    const [status, setStatus] = useState(false);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                // console.log(data)
                setUsrList(data)
            })

    }, [])
    console.log(usrList);

    const getUsers = () => {

        //render the list of users

        let usersList = document.getElementById('user-list')
        usersList.style.visibility = "visible"

    }

    const sortList = () => {
        const oldList = [...usrList]
        oldList.sort((a, b) => a.name.length - b.name.length)
        setUsrList(oldList)
    }

    const handleInput = (e) => {
        setSearchedUserName(e.target.value)
        // console.log(searchedUserName)
    }
    function searchList() {
        setStatus(false);
        usrList.find((element) => {
            if (element.name === searchedUserName) {
                setSearchedUserData(element);
                setStatus(true);
            }
        })
    }
    console.log(searchedUserData);
    console.log(searchedUserName)
    return (
        <div>
            <div style={{ textAlign: "center" }}>

                <h1>User Info</h1>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <div>

                        <button type='button' onClick={getUsers}>Get Users</button>
                        <button type='button' onClick={sortList}>Sort Users</button>
                    </div>
                    <div>

                        <label htmlFor="name">Enter name: </label>
                        <input id="name" type="text" value={searchedUserName} onChange={handleInput} />
                        <button type='button' onClick={searchList}>Search</button>
                    </div>

                </div>
            </div>
            <div className='user-info' style={{ display: "flex", justifyContent: "space-around" }}>
                <ul id='user-list' style={{ visibility: "hidden" }}>
                    {
                        usrList.map((user, i) => (
                            <li key={i}>{user.name}</li>

                        ))
                    }
                </ul>

                <div>
                    {status ?
                        <div>
                            <p>Name: {searchedUserData.name}</p>
                            <p>Username: {searchedUserData.username}</p>
                            <p>Email: {searchedUserData.email}</p>
                            <p>Website: {searchedUserData.website}</p>
                            <p>Phone No.: {searchedUserData.phone}</p>
                        </div> : null}
                </div>
            </div>


        </div>
    )
}

export default UserInfo