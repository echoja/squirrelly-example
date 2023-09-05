import './style.css'
import * as Sqrl from 'squirrelly'

var myTemplate = `
<h2>Comments</h2>
{{commentHelper(options)/}}
`

var even = true

// Sqrl.defineHelper("commentHelper", function (args) {
//   even = !even // if false, set to true. If it's true, set to false

//   // console.log(JSON.stringify(args))
//   var returnVal = `<div class="comment comment${even ? "-even" : "-odd"}">
//         <div class="comment-header">
//             <div class="comment-username">{{username}}</div>
//             <div class="comment-timestamp">posted {{timestamp}}</div>
//         </div>
//         <div class="comment-content">
//             <p>{{content}}</p>
//         </div>
//         <div class="comment-children">
//             <!-- This IF statement was put here in an attempt to fix the out-of-memory crash, but it still happens regardless of the amount of children -->
//             {{if(options.children.length > 0)}}
//             {{each(options.children)}}
//             {{commentHelper(@this)/}}
//             {{/each}}
//             {{/if}}
//         </div>
//     </div>`

//   return Sqrl.Render(returnVal, args)
// })

console.log(Object.keys(Sqrl))
console.log()



// document.getElementById('root').innerHTML = Sqrl.Render(myTemplate, {
//   "_id": {
//     "$oid": "user_id"
//   },
//   "username": "Ada Lovelace",
//   "timestamp": "5-9-2019 at 11:04 PM",
//   "content": "Test comment",
//   "children": [
//     {
//       "username": "Johnny Appleseed",
//       "timestamp": "5-9-2019 at 11:06 PM",
//       "content": "This is a reply",
//       "children": []
//     }
//   ],
//   "__v": 0
// })
