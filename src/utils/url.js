export default function generateUrl(string){
    // Function to generate URL using a string.
    let trimmedString = string.trim()
    let url = ''
    for(let i=0;i<trimmedString.length; i++){
        if(trimmedString[i] == ' '){
            url += '-'
        }else{
            url += trimmedString[i]
        }
    }
    return url
}