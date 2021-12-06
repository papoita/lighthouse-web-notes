<!-- @format -->

Dec 3

Storing passwords
passwords should be hashed and not encrypted

encryption: reversible processbecause if server is comrpomised everything can be decrypted

hashing: one way process
password converted to a string called "digest""

MD5 or SHA1 algorithms can be hacked by brute force

# Hashing

use bcrypt
npm install -E bcrypt@4.0.1

```
const bcrypt = require('bcrypt');
const password = "purple-monkey-dinosaur"; // found in the req.params object
const hashedPassword = bcrypt.hashSync(password, 10);
```

when checking passwords

```

bcrypt.compareSync("purple-monkey-dinosaur", hashedPassword); // returns true
bcrypt.compareSync("pink-donkey-minotaur", hashedPassword); // returns false
```

# Sessions

session cookies - cookies that expire after a browser is closed
user session - login/logout features on a site
user session - the event of a user using an application
session - encrypted cookies
session - abstraction that refers to user data, can be tracked in various ways:
storing data in an encrypted cookie
storing an id in an encrypted cookie w/ a session store on the server-side

# Encrypted cookies
