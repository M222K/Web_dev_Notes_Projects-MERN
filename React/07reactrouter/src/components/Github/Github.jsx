import { useLoaderData } from 'react-router'

function Github() {
    //as soon as the component mounts i want the request on api and data fetched to me
    // const [data, setData]=useState([]);

    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/M222K`)
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         console.log(data);
    //         setData(data);
    //     })
    // },[data])

    //now in order to implement ki jaise hi github pe hover ho mount hone se pehle hi request jaaye and we fetch taaki jab open kare to data load hone me time na lage

    const data=useLoaderData();
    //now this will store the reponse in data after fetching from the loader function

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
    Github Followers:{data.followers}
    <img src="{data.avatar_url}" alt="a" width={300}/>
    </div>
  )
};

export default Github;


//we use this method before the route is loaded in main.jsx
//now to set data when we use loader we use a hook useloader data