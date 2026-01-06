const githubInfoLoader=async()=>{
   const response= await fetch(`https://api.github.com/users/M222K`)
   return response.json();}

export default githubInfoLoader;