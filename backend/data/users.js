// set it to an arrays
// Sample data
import bcrypt from 'bcryptjs'

const users = [
    {
        name: "Admin User",
        email: "admin@gmail.com",
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true 
    },
    {
        name: "User One",
        email: "user1@gmail.com",
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: "User Two",
        email: "user2@gmail.com",
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users