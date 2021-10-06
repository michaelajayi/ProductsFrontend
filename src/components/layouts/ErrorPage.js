import React from 'react'
import { FaInfoCircle } from 'react-icons/fa';


const ErrorPage = ({error}) => {
   return (
     alert != null && (
       <div className={`alert alert-${error.type} mt-2`}>
         <FaInfoCircle /> {error.msg}
       </div>
     )
   );
}

export default ErrorPage;