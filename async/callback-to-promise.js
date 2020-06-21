//Callback Hell example

class UserStorge {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === 'ellie' && password === 'dream') ||
          (id === 'coder' && password === 'academy')
        ) {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      }, 2000);
    });
  }
  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'ellie') {
          resolve({ name: 'ellie', role: 'admin' });
        } else {
          reject(new Error('no access'));
        }
      }, 1000);
    });
  }
}

const userStorge = new UserStorge();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorge
  .loginUser(id, password)
  .then(userStorge.getRoles)
  .then((user) => alert(`hello ${user.name}, you have a ${user.role} role`))
  .catch(console.log);

// userStorge.loginUser(
//   id,
//   password,
//   (user) => {
//     userStorge.getRoles(
//       user,
//       (userWithRole) => {
//         alert(
//           `hello ${userWithRole.name}, you have a ${userWithRole.role} role`
//         );
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//   },
//   (error) => {
//     console.log(error);
//   }
// );
