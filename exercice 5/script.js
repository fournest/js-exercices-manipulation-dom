const users = [
 { name: "Alice", age: 25 },
{ name: "Bob", age: 30 },
 { name: "Charlie", age: 35 },
];

const userList = document.getElementById(`userList`);
for (let i = 0; i < users.length; i++) {
   const user = users[i];
   const listeElement = document.createElement(`li`);
   listeElement.textContent = `Nom : ${user.name}, Age : ${user.age}`;
    
   userList.appendChild(listeElement);
}
