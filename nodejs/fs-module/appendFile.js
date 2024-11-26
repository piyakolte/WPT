
const fs=require("fs")

const data="\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, tortor nec vulputate interdum, lectus lacus mattis leo, ut aliquet lacus ligula iaculis tellus. Nam id lacus porta, volutpat sem sit amet, sagittis tellus. Cras at sapien tortor. Nulla augue leo, pellentesque vel libero iaculis, sagittis elementum urna. Vivamus congue nunc eget elit pellentesque, nec lacinia tellus vehicula. Donec sodales massa justo, vitae fermentum nibh fermentum sed. Etiam vel consequat risus. In nec ex sed augue ornare euismod vel in diam. Nunc ac lectus lacus. Quisque nunc lacus, fermentum at ullamcorper at, suscipit vel turpis. Nullam tincidunt, augue non ultricies mattis, augue sem iaculis neque, sed dignissim purus lorem non ipsum. Nunc vel ligula turpis. Aliquam erat volutpat."

// fs.appendFile("file.txt",data,(err)=>     //callback function runs always if err then err variable not null otherwise null
// {
//    if(err)
//    {
//     console.error(err)
//     return err
//    }
//    console.log("file writr successfully........")
// })
fs.appendFileSync("fileSync.txt",data)