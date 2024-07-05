//Rule B:

//Whether this function pure function or not? Impure function
// function updateProfile(city,profile){
//     profile.city = city
//     return profile;
// }


// //Using plain js Pattern
// function updateProfile(city, profile) {
//   //immutable pattern
//     return {
//         name: profile.name,
//         city:city
//     }
// }

// //Using Object.assign api Pattern
// function updateProfile(city, profile) {
//     //immutable pattern
//     return Object.assign({}, profile, { city: city })
// }

//Using Spread Operator Pattern
function updateProfile(city, profile) {
    //immutable pattern
    return { ...profile, city: city }
}

let profile = {
    name: 'Subramanian',
    city: 'Coimbatore'
}
console.log('before update', profile)
const result = updateProfile('Chennai', profile)
console.log(profile === result ? "Same Object" : "Different Object")
console.log('after update', result)