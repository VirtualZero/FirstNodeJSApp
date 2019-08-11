const url = require('url').URL

const myUrl = new url('https://thiswebsite.com/hello.html?id=17&status=active')

// Searialized URL
console.log(myUrl.href)
console.log(myUrl.toString())

// Root Domain (Includes Port)
console.log(myUrl.host)

// Hostname (Doesn't include PORT!! host does )
console.log(myUrl.hostname)

// Pathname
console.log(myUrl.pathname)

// Searialized Query
console.log(myUrl.search)

// Params Object
console.log(myUrl.searchParams)

// Add Param
myUrl.searchParams.append('Key', 'Value')
console.log(myUrl.searchParams)

// Loop params
myUrl.searchParams.forEach(function(value, name) {
    console.log(`${name}: ${value}`)
})
    // OR
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`)
)