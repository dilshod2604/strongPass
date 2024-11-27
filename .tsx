// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import SeeAllButton from "../SeeAllButton";
// import { GoArrowRight } from "react-icons/go";
// import { blog } from "@/constants/links";

// const ArticleBlock = () => {
//   return (
//     <section>
//       <div className="container">
//         <div className="mt-[100px]">
//           <div className="flex items-center justify-between mb-[40px]">
//             <h1 className="text-[64px] font-[600] text-[#262F33]">Статьи</h1>
//             <SeeAllButton />
//           </div>
//           <div className="w-full flex items-center overflow-x-auto gap-x-[20px] scroll-hidden">
//             {blog.map((item, index) => (
//               <div
//                 key={index}
//                 className="sw-[580px]  flex rounded-[36px] flex-col "
//               >
//                 <Image
//                   src={item.image}
//                   alt="image"
//                   width={580}
//                   height={280}
//                   className="object-cover w-full h-full rounded-[36px]"
//                 />
//                 <div className="w-[580px]  flex flex-col p-[36px] rounded-[36px] bg-[#F2F5F4] gap-y-3 relative bottom-[50px]">
//                   <p className="text-[16px] font-normal text-[#7A7E80]">
//                     {item.date}
//                   </p>
//                   <h1 className="text-2xl text-[#262F33] font-semibold line-clamp-2 ">
//                     {item.title}
//                   </h1>
//                   <p className="text-lg text-[#7A7E80] font-normal line-clamp-2 ">
//                     {item.description}
//                   </p>
//                   <Link
//                     href="/article/2"
//                     className="text-[18px] font-semibold flex items-center gap-x-3 text-[#408077] underline"
//                   >
//                     Читать статью
//                     <GoArrowRight />
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ArticleBlock;