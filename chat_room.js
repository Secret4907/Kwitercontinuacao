function join() {
    const user_name = document.getElementById("UserName").value
console.log(user_name)
if (user_name) {
    localStorage.setItem("UserName", user_name)
    window.location = "chat_room.html"
}
}
