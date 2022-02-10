class UsersRoom {
    constructor() {
        this.users = []
    }
    addUser(id,room,name) {
        let user = {id, name, room}
        this.users.push(user)
        return user
    } 
    getUser(id) {
        return this.users.filter((user)=> user.id == id )[0]
           
    }
    getUserList(room) {
        return this.users.filter((user)=> user.room == room)
    }
    removeUser(id) {
        let user = this.getUser(id)
        if (user) {
            this.users = this.users.filter((user)=> {user.id !== id})
        }
        return user
    }
} 
module.exports = UsersRoom