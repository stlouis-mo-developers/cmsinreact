export class ApiServer {
static readonly data:any = [];
static readonly adminUser = { id: 0, username: 'admin', password: 'password' };

  AddItem = function (value: any) {
    ApiServer.data.push(value);
  }

  ListItems = function () {
    return ApiServer.data;
  }

  Login(username: string, password: string){
    if ( (username && password) && (username === ApiServer.adminUser.username) && (password === ApiServer.adminUser.password)) {
      return true;
    }
    else{
      return false;
    }
  }

}