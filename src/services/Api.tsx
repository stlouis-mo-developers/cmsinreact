const data:any = [];
const adminUser = { id: 0, username: 'admin', password: 'password' };

export class ApiServer {

  AddItem = function (value: any) {
    data.push(value);
  }

  ListItems = function () {
    return data;
  }

  Login(username: string, password: string){
    if ( (username && password) && (username === adminUser.username) && (password === adminUser.password)) {
      return true;
    }
    else{
      return false;
    }
  }

}