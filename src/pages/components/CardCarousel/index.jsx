// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import { Container } from 'react-bootstrap';
// import productList from '../Grid/assets/API';
// import OneCard from './Card';

// import { Link } from 'react-router-dom';
// import "./style.scss";
// import axios from 'axios'
// import {useEffect,useLayoutEffect, useState} from 'react';
// import api from '../../../services/api';


// export default function CardCarousel() {

//   const [ products, setProducts ] = useState([])

//   // const sortNumber = () => {
//   //   const arrayNumberId = []
//   //   while(arrayNumberId.length <= 12) {
//   //     const number = Math.floor(Math.random() * 13)
//   //     if(!arrayNumberId.includes(number) && number !== 0) {
//   //       arrayNumberId.push(number)
//   //     }
//   //   }
//   //   console.log('arrayNumberId', arrayNumberId);
//   //   return arrayNumberId;
//   // }
//   // const arr1=[]
// // useLayoutEffect(async ()=>{

// //  const arr = await [12, 3, 4, 5, 1, 30, 8, 9, 10, 11, 15].map(async (number) => {
// //         try {
// //           const response = await api.get(`/products/product/${number}`)
// //           console.log('response', response)
// //           const data = await response.data
// //           console.log('data', data)
// //           arr1.push(data)
// //           return data
// //         } catch (e) {
// //           console.log(e)
// //         }
// //   })
// //   console.log(arr1)
// // //   const newArr = Promise.all(asyncMap).then(response=> setProducts([...response]))
// // // console.log(newArr)
// // }, [])

//   useEffect(() => {
//     async function loadProductData() {
//       try {
//         const arr = [12, 3, 4, 5, 1, 30, 8, 9, 10, 11, 15].map(async(number)=>{
//           const response = await api.get(`products/product/${number}`);

//         return {
//           id: response.data.id,
//           title: response.data.title,
//           price: response.data.price,
//           category: response.data.category.name,
//           image: response.data.image,
//           description: response.data.description,
//         }
//         })
//         setProducts(arr)
//       } catch (error) {
//         console.log(error);
//       }
      
//     }
//     loadProductData();
//   }, []);




//   // setProducts([...asyncMap])

//   // useEffect(async () => {
//   //     const consumingAPI = (arr) => {
     
//   //   consumingAPI([12, 3, 4, 5, 1, 30, 8, 9, 10, 11, 15]);
//   // }, [])


//   const responsive = {
//     superLargeDesktop: {
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5.5
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 4.5
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 3.5
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 2
//     }
//   };
//   return (
//     <>
//       <Container>
//         <div className="clearfix my-4">
//           <h4 className='float-start ms-2'>Featured products</h4>
//           <Link className='see-all float-end me-2' to="/products/filter/all">see all</Link>
//         </div>
//         <Carousel responsive={responsive}>
//           {products.map(({ id, image, title, price, category }) => {
//             return (
//               <div className="mx-2">
//                 <OneCard key ={id} img={image} title={title} price={price} category={category} />
//               </div>
//             )
//           })
//          }
//         </Carousel>
//       </Container>
//     </>
//   )
// }