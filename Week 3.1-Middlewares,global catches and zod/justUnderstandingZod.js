// if this is an array of numbers, return true, else return false
const zod  = require("zod")


function validateInput(arr){
    // lots of checks needed without zod
    // if(typeof arr == "object" && arr.length >=1 &&){}
    
    // with zod

    const schema = zod.array(zod.number())
    
    const response = schema.safeParse(arr);
    console.log(response)
}

validateInput([1,23,4])

const schema1 = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
    
})


/*
    {
        email => string => should look like email
        password => should have 8 letters
    }
*/