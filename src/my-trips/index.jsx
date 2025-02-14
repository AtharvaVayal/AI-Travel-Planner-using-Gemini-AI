// import { db } from "@/service/FirebaseConfig";
// import { collection, getDocs, query, where } from "firebase/firestore";
// import { useEffect, useState } from "react";
// import { useNavigate, } from "react-router-dom";
// import UserTripCardItem from "./components/UserTripCardItem";

import { db } from "@/service/FirebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserTripCardItem from "./components/UserTripCardItem";


// function MyTrips() {

    
//     const [userTrips, setUserTrips] = useState([]);
//     useEffect(() => {
//         GetUserTrips();
//     }, [])

//     const navigate = useNavigate();
//     const GetUserTrips = async () => {
//         const user = JSON.parse(localStorage.getItem('user'));
        

//         if (!user) {
//           //localStorage.removeItem('user');
//           navigate("/");
//           return;
//         }
        
//         const q = query(collection(db, 'AITrips'), where('userEmail', '==', user?.email));
//         const querySnapshot = await getDocs(q);
//         setUserTrips([]);
//         querySnapshot.forEach((doc) => {
           
//             console.log(doc.id, " => ", doc.data());
//             setUserTrips(prevVal => [...prevVal, doc.data()])
//         });
//     }

//     return (
        
//         <div className="flex justify-center items-center h-full">
//             <div className="sm:px-10 md:px-32 lg:px-10 xl:px-10 px-5 mt-10 w-full max-w-screen-lg">
//                 <h2 className="font-bold text-3xl mb-5">My Trips</h2>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
//                     {userTrips?.length>0?userTrips.map((trip, index) => (
//                         <UserTripCardItem trip={trip} key={index} />
//                     ))
//                 :[1,2,3,4,5,6].map((item,index)=>(
//                     <div key={index} className='h-[250px] w-full bg-slate-200 animate-pulse rounded-xl'>

//                     </div>
//                 ))
//                 }
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default MyTrips


function MyTrips() {
    const [userTrips, setUserTrips] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        GetUserTrips();
    }, []);

    const GetUserTrips = async () => {
        const user = JSON.parse(localStorage.getItem('user'));
        
        if (!user) {
            localStorage.removeItem('user');
            navigate("/");
           
        }
        
        const q = query(collection(db, 'AITrips'), where('userEmail', '==', user.email));
        const querySnapshot = await getDocs(q);
        setUserTrips([]);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            setUserTrips(prevVal => [...prevVal, doc.data()]);
        });
    };

    return (
        <div className="flex justify-center items-center h-full">
            <div className="sm:px-10 md:px-32 lg:px-10 xl:px-10 px-5 mt-10 w-full max-w-screen-lg">
                <h2 className="font-bold text-3xl mb-5">My Trips</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {userTrips?.length > 0 ? userTrips.map((trip, index) => (
                        <UserTripCardItem trip={trip} key={index} />
                    )) : [1, 2, 3, 4, 5, 6].map((item, index) => (
                        <div key={index} className='h-[250px] w-full bg-slate-200 animate-pulse rounded-xl'></div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MyTrips;

 









































































