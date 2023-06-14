let areaCode = ``
let firstThree = ``
let lastFour = ``

const createPhoneNumber = arr => {
    for (let i = 0; i < arr.length; i++){
        if (i < 3){
            areaCode += arr[i]
        }else if (i > 2 && i < 6){
            firstThree += arr[i]
        }else if (i > 5){
            lastFour += arr[i]
        }
    }
    return `(${areaCode}) ${firstThree}-${lastFour}`
}

/// A different way to do it!
const phone = (arr,template) => {

    for (let i = 0; i<arr.length;i++){
        template = template.replace(`x`,arr[i])
    }
    return template
}


console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
console.log(phone([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], `(xxx) xxx-xxxx`))