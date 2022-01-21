import { Navigate } from "react-router-dom"
const withAuth = (WrappedComponent, isLogin) => {
    if (isLogin) {
        return (props) => (<WrappedComponent {...props} />)
    } else {
        return (props) => <Navigate to='/login/' replace={true} {...props} />
    }
}
export default withAuth