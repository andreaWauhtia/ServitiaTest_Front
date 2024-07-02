import { Routes, Route, Navigate } from 'react-router-dom';
import { IAuthTokens } from 'axios-jwt';
import { SignIn } from '@/modules/users/components/SignIn';
import { SignUp } from '@/modules/users/components/SignUp';
import { MessageManager } from '@/modules/messages/components/MessageManager';

export interface PagesProps {
  userSession?: IAuthTokens;
}

export const Pages: React.FC<PagesProps> = ({ userSession }) => {
  const bLoggedIn = userSession !== undefined && userSession.accessToken !== undefined;

  return (
    <div className='h-screen py-6 overflow-y-hidden flex flex-col justify-center sm:py-12' style={{height: 'calc(100vh - 130px)'}}>
      <Routes>
        <Route path='/login' element={bLoggedIn ? <Navigate to='/home' /> : <SignIn />} />
        <Route path='/home' element={<MessageManager />} />
        <Route path='/signUp' element={bLoggedIn ? <Navigate to='/home' /> : <SignUp />} />
        <Route index element={<Navigate to='/home' />} />
      </Routes>
    </div>
  );
};

