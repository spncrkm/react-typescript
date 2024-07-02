import React, {useState} from 'react'

const UserList = () => {

    type User = {
        id: number,
        name: string,
        age: number
    }

    const [users, setUsers] = useState<User[]>([
        { id: 1, name: 'Alice', age: 28 },
        { id: 2, name: 'Bob', age: 35 },
        { id: 3, name: 'Charlie', age: 22 },
        { id: 4, name: 'David', age: 40 },
        { id: 5, name: 'Eve', age: 30 }
      ]);

      const [originalUsers, _] = useState(users)

    const [showOldUsers, setShowOldUsers] = useState(false);  

      const handleClick = (): void => {
        if (!showOldUsers) {
            const oldUsers = users.filter(user => user.age >= 30)
            setUsers(oldUsers)
        } else {

            setUsers(originalUsers)
        }
        setShowOldUsers(!showOldUsers)
      }
      

  return (
        <div>
            {users.map((user:User) => (
                <div key={user.id}>
                    <p><b>Name: </b>{user.name} - <b>Age:</b> {user.age}</p>
                </div>
            ))}

            <button onClick={handleClick}>{showOldUsers ? 'Show All users': 'Show older users'}</button>
        </div>
  )
}
export default UserList
