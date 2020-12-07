// export   =   named export
//  - you'll import modules by its name >   Need exact name
//  - So, you can't rename the name of the modules, which is marked as deafult
//      >   exact name
//  - if you assign an alias which you can freely choose in importing files
//      >   'as'
//  - you can import everything with '*'
//      >   '*'

// Ex)
//  import { a } from './utility.js'
//  import { a as b } from './utility.js'
//  import * as c from './utility.js'
//      c.nameA | c.nameB | c.nameC ...

// export default
//  - when you import from some module, it'll always be the default export
//  - you can rename the name of module when you import it
//      >   custome name is possible

// Ex)
//  import person from './person.js'
//  import prs from './person.js'
