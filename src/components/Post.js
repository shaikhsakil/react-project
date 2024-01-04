// import React, { useState, useEffect } from 'react';


// const useEffectAPI = () => {
//     const [users, setUsers] = useState([]);
//     const getUsers = async () =>{
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         setUsers(await response.jason());
//     }
//     useEffect(() =>{
//         fetchApiData(API);
//     }, []);
// }

// // function Post() {

// //     let isLoading = true;

// //     let API= "https://jsonplaceholder.typicode.com/posts";

// //     const fetchApiData = async(url) =>{
// //         try{
// //             const res = await fetch(url);
// //             const data = await res.json();
// //             console.log(data);
// //             isLoading = false;
// //         } catch(error){
// //             console.log(error);
// //         }
// //     }

// //     useEffect(() =>{
// //         fetchApiData(API);
// //     }, []);

// //     if (isLoading){
// //         return(
// //             <><h1>Loading...</h1></>
// //         )
// //     }
// //     return (
// //         <div>
// //           <h2>ssss</h2>
// //         </div>
// //       );

// // }


// export default Post;