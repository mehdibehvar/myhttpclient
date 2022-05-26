
import { useEffect } from 'react';
import './App.css';
import { del, get, patch, post, put } from './services/httpClient';


function App() {
  useEffect(()=>{
    del("posts/2");

    get("posts",{params:{id:1}})
    .then(response=>console.log(response));

    post('users', {
        title: 'foopost',
        body: 'bar',
        userId: 1
    }).then(response=>console.log(response));

   put("posts/1",{
    id: 1,
    title: 'fooput',
    userId: 1,
  }).then(response=>console.log(response));



  patch("posts/1",{
    title: 'foopatch',
  }).then(response=>console.log(response))

  
  },[])
  return (
    <>
    <div>
      <h1>axios service</h1>
    </div>
    </>
  );
}

export default App;
