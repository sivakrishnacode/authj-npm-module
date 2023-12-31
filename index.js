import dotenv from 'dotenv'
import jwt from "jsonwebtoken";
dotenv.config()


  function config(key){
      if(!key || key == '' || key == null ){
        return  new Error('secret-key not valid or not found') 
      }else{
        process.env.MYSECRETKET=key
        return 'secret-key saved succesfully'
      }
  }

  function signToken(prop={username :null, password: null , userDetails : null, isAuth: false}) {
    return new Promise((resolve, reject) => {

    if(!prop.username || prop.username == null) {
      reject({
        errCode:422,
        errMessage : 'Username is Required'
      })
    }
    if(!prop.password || prop.password == null) {
      reject({
        errCode:422,
        errMessage : 'Password is Required'
      })
    }

      jwt.sign(prop, process.env.MYSECRETKET, (error, token) => {
        if (error) {
          reject(error);
        } else {
          resolve({'token': token , createdTime: Math.floor(Date.now() / 1000)});
        }
        
      });
    });
  }

  function checkToken(prop = { token: null}) {

    return new Promise((resolve, reject) => {

      if(!prop.token || prop.token == null){
        reject({
          errCode:422,
          errMessage : 'Token is Required'
        })
      } 

      jwt.verify(prop.token, process.env.MYSECRETKET, (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
  }

  function getTokenInfo(prop= {token: ''}){

    return new Promise((resolve,reject ) => {
    
        const decoded = jwt.decode(prop.token);

        if(!decoded){
          reject(new Error('Invalid token'));
         
        }
          else{
            resolve(decoded);
          }      
    })
  }


  
export default  () => {
  return{
    signToken,
    checkToken,
    getTokenInfo,
    config
  }
}
 