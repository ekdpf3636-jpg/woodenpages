// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';



// const ProtectedRouter = ({children}) => {
//   const isLogin = useSelector(state => state.login.isLogin);

//   if(!isLogin){
//     return <Navigate replace to = "login"/>
//   }

//   return children;
// }
// export default ProtectedRouter;

export default function ProtectedRouter({ children }) {
  // 데모 모드에서는 항상 통과
  return children;
}
