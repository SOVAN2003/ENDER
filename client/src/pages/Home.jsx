import React , {useState, useEffect} from 'react';
import "../css/home.css";
import {Loader , Card , FromField } from "../components";

const RenderCards = ({data,title}) =>{
    if(data?.length >0){
        return data.map((post) => <Card key={post.id} {...post} />)
    }
    return(
        <h2 className='mt-5 font-bold text-[#6449ff] text-xl uppercase'>
            {title}
        </h2>
    )  
}
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setsearchText] = useState('');
  const [searchedResults, setSearchedResults] = useState(null);
  const [searchTimeout, setSearchTimeout] = useState(null);
  

  //To Show all the posts after create a new post.
  useEffect(() => {
    const fetchPosts = async () => {
        setLoading(true);
        
        try {
            const response = await fetch('http://localhost:8080/api/v1/post',{
            method: 'GET',
            headers: {
              'Content-Type' : 'application/json',
            },
            })

            if(response.ok){
                const result = await response.json();
                //reverse for post newest data at the top.
                setAllPosts(result.data.reverse());
            }
        } catch (error) {
            alert("***"+ error);
        }finally{
            setLoading(false);
        }
    }

    fetchPosts();
  },[]);
   
  //Implementing the search within the home page
  const handelSearchChange = (event) => {
    clearTimeout(searchTimeout);
    setsearchText(event.target.value);

    setSearchTimeout(
    setTimeout(() => {
        const searchResults = allPosts.filter((item) => item.name.toLowerCase()
        .includes(searchText.toLowerCase()) || item.prompt.toLowerCase().includes(searchText.toLowerCase()));

        setSearchedResults(searchResults);
    },500)
    );
  }

  return (
    <section className='background max--w-7x1 mx-auto'>
        <div>
            <h1 className='font-extrabold text-[#B1B2FF] text-[32px]'>
                Welcome to ENDER!
            </h1>
            <p className='mt-2 text-[#B1B2FF] text - [16px] max-w[500px]'>
                Explore the ENDER Community. Share your discovery, Search your friends find. Some crazy ARTS are waiting for you &#129304;
            </p>
        </div>

        <div class="mt-16">
            <FromField 
            labelName="Search Post"
            type="text"
            name='text'
            placeholder="Find pre upload posts of others."
            value={searchText}
            handelChange={handelSearchChange}

            />
        </div>

        <div className='mt-10'>
            {loading ? 
                (<div className='flex justify-center items-center'>
                    <Loader/>
                </div>)
                : (<>
                    {searchText && (
                        <h2 className='font-medium text-[#666e75] text-xl mb-3'>
                           Here we found for <span className='text-[#B1B2FF]'>{searchText}</span>
                        </h2>)
                    }
                    <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3s'>
                        {searchText ? (
                            <RenderCards 
                                data = {searchedResults}
                                title= "No search results found."
                            />
                        ) : (
                            <RenderCards
                                data = {allPosts}
                                title= "No posts found."
                            />
                        )}
                    </div>  
                </>)
            }
        </div>
    </section>
  )
}

export default Home;