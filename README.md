# AuthJ

The Authentication System to generate a jwt securly in Express.js

Make sure You are conf the 'secret-key' with .env

## Installation

Use the package manager [npm](https://www.npmjs.com/package/authj?activeTab=readme) to install authj.

```bash
npm i authj
```

## Usage

```python
const useAuthj = require('authj')

const authj = useAuthj()

authj.config('secret-key')

# For sign the key
authj. signToken({ username: "username", password: "password",userDetails: {}, isAuth: false })
.then((res) => {
      console.log(res);
     })
.catch((err) => {
      console.log(err);
     })


# For Check the token is valid or not
authj.checkToken({token : 'token'})
.then((res) => {
      console.log(res);
     })
.catch((err) => {
      console.log(err);
     })



# For Extract the value from token 
authj. getTokenInfo({token: 'token'})
.then((res) => {
      console.log(res);
     })
.catch((err) => {
      console.log(err);
     })


```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Author
Sivakrishna [sivakrishnacoc@gmail.com](mailto:sivakrishnacoc@gmail.com)

