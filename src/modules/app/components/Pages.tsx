import { Routes, Route, Navigate } from 'react-router-dom';
import { SignIn } from '@/modules/users/components/SignIn';
import { SignUp } from '@/modules/users/components/SignUp';
import { MessageManager } from '@/modules/messages/components/MessageManager';
import { useSelector } from 'react-redux';
import { AppState } from '../store';

export interface PagesProps {
}
  // Whiteliste utilisé dans l'interceptor notamment
export const allowedList = ['login', 'signUp'];
export const Pages: React.FC<PagesProps> = ({  }) => {
  const bLoggedIn = useSelector((state : AppState) => state.user.currentUser ) !== undefined;

  return (
    <div className='h-screen py-6 overflow-y-hidden flex flex-col justify-center sm:py-12' style={{height: 'calc(100vh - 130px)'}}>
      <Routes>
        <Route path='/login' element={bLoggedIn ? <Navigate to='/home' /> : <SignIn />} />
        <Route path='/home' element={bLoggedIn ? <MessageManager /> :<Navigate to='/login' />}  />
        <Route path='/signUp' element={bLoggedIn ? <Navigate to='/home' /> : <SignUp />} />
        <Route index element={<Navigate to='/home' />} />
      </Routes>
    </div>
  );
};

