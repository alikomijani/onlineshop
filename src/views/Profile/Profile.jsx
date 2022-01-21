import React from 'react';
import Auth from '../../api/localStorage';
import { withAuth } from '../../components';
const isLogin = Auth.checkLogin()

const Profile = () => {
    return <div>there is my profile</div>;
};

export default withAuth(Profile, isLogin);
