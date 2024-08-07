import { UserSession } from "@/context/users";
import { useDispatch, useSelector } from "react-redux";
import { Badge } from "./Badge";
import { AppDispatch, AppState } from "@/modules/app/store";
import { LogOut } from "@/context/users/application/logoutUser";
import * as signalR from '@microsoft/signalr';
import { useEffect, useState } from "react";
import { GetUnreadMessageCount } from "@/context/messages/application/getUnreadMessageCount";
import { GetRecipients } from "@/context/users/application/getRecipients";

export const notificationIcon =  <svg fill="#ffffff" height="30px" width="30px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 611.999 611.999" xmlSpace="preserve" stroke="#ffffff">
   <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
   <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
   <g id="SVGRepo_iconCarrier"> 
       <g> 
           <g>
                <g> 
                   <path d="M570.107,500.254c-65.037-29.371-67.511-155.441-67.559-158.622v-84.578c0-81.402-49.742-151.399-120.427-181.203 C381.969,34,347.883,0,306.001,0c-41.883,0-75.968,34.002-76.121,75.849c-70.682,29.804-120.425,99.801-120.425,181.203v84.578 c-0.046,3.181-2.522,129.251-67.561,158.622c-7.409,3.347-11.481,11.412-9.768,19.36c1.711,7.949,8.74,13.626,16.871,13.626 h164.88c3.38,18.594,12.172,35.892,25.619,49.903c17.86,18.608,41.479,28.856,66.502,28.856 c25.025,0,48.644-10.248,66.502-28.856c13.449-14.012,22.241-31.311,25.619-49.903h164.88c8.131,0,15.159-5.676,16.872-13.626 C581.586,511.664,577.516,503.6,570.107,500.254z M484.434,439.859c6.837,20.728,16.518,41.544,30.246,58.866H97.32 c13.726-17.32,23.407-38.135,30.244-58.866H484.434z M306.001,34.515c18.945,0,34.963,12.73,39.975,30.082 c-12.912-2.678-26.282-4.09-39.975-4.09s-27.063,1.411-39.975,4.09C271.039,47.246,287.057,34.515,306.001,34.515z M143.97,341.736v-84.685c0-89.343,72.686-162.029,162.031-162.029s162.031,72.686,162.031,162.029v84.826 c0.023,2.596,0.427,29.879,7.303,63.465H136.663C143.543,371.724,143.949,344.393,143.97,341.736z M306.001,577.485 c-26.341,0-49.33-18.992-56.709-44.246h113.416C355.329,558.493,332.344,577.485,306.001,577.485z"></path> <path d="M306.001,119.235c-74.25,0-134.657,60.405-134.657,134.654c0,9.531,7.727,17.258,17.258,17.258 c9.531,0,17.258-7.727,17.258-17.258c0-55.217,44.923-100.139,100.142-100.139c9.531,0,17.258-7.727,17.258-17.258 C323.259,126.96,315.532,119.235,306.001,119.235z"></path> </g> </g> </g> </g></svg>

;

export const TopBar: React.FC<{}> = ({ }) => {
  
    //Handle notification push
    const [newMessage,setNewMessage] = useState(0);
   
    const user = useSelector((state: AppState) => state.user.currentUser);
    useEffect(() => {
        const fetchUnreadCount = async () => {
            try {
                const count = await GetUnreadMessageCount(user?.email ?? '');
                setNewMessage(count);
            } catch (error) {
                console.error('Error fetching unread count:', error);
            }
        };

        const connection = new signalR.HubConnectionBuilder()
            .withUrl(('http://localhost:5201') + '/notification')
            .configureLogging(signalR.LogLevel.None)
            .build();

        const onMessageReceived = (receivedMessage: number) => {
            setNewMessage(receivedMessage);
        };

        connection.on(`ReceiveMessage_${user?.email}`, onMessageReceived);

        connection.start()
            .then(() => {
                console.log('Connection established.');
                fetchUnreadCount(); // Fetch initial unread count
            })
            .catch(err => console.error('Connection failed: ', err));

        return () => {
            connection.stop().then(() => console.log('Connection stopped.'));
        };
    }, [user?.email]);
    const handleRefresh = (e: React.SyntheticEvent) => {
        e.preventDefault();
        GetRecipients(user?.email??"", dispatch);
        setNewMessage(0);
    }
    const dispatch: AppDispatch = useDispatch();
    const handleLogout = (e: React.SyntheticEvent) => {
        e.preventDefault();
        LogOut(user?.email??'',dispatch);
    };
   
   

    return <>
        <header className={`mx-auto px-4 py-1 flex items-center justify-end bg-black`}>
        <nav>
                <ul className='flex items-center justify-center font-semibold'>
                    <li key={`menu_1`} className='relative group px-3 py-2 text-white'>
                        {user?.email ?? ''}
                    </li>
                    <li key={`menu`} className='relative group px-3 py-2' onClick={(e) => handleRefresh(e)}>
                      {user && <Badge props={{icon: notificationIcon, bubbleContent: newMessage.toString(), badgeAdditionalClass: '', bubbleAdditionalClass: 'bg-red-500'}} />}
                    </li>
                    <li key={`menu_2`} className='relative group px-3 py-2 text-white' onClick={(e) => handleLogout(e)}>
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" 
                    xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Exit"> 
                    {user &&<path id="Vector" d="M12 15L15 12M15 12L12 9M15 12H4M4 7.24802V7.2002C4 6.08009 4 5.51962 4.21799 5.0918C4.40973 4.71547 4.71547 4.40973 5.0918 4.21799C5.51962 4 6.08009 4 7.2002 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V16.8036C20 17.9215 20 18.4805 19.7822 18.9079C19.5905 19.2842 19.2837 19.5905 18.9074 19.7822C18.48 20 17.921 20 16.8031 20H7.19691C6.07899 20 5.5192 20 5.0918 19.7822C4.71547 19.5905 4.40973 19.2839 4.21799 18.9076C4 18.4798 4 17.9201 4 16.8V16.75" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>} </g> </g></svg>
                    </li>
                </ul>
            
            </nav>
        </header>
    </>;
}

