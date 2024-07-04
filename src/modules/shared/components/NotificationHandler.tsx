import { AppState } from "@/modules/app/store";
import { useDispatch, useSelector } from "react-redux";
import { Notification } from "@/context/shared/domain/Notification";
import { useEffect, useState } from "react";
import { cleanNotification } from "@/context/shared/application/removeNotification";

export const NotificationCard: React.FC<Notification> = ({ message, duration, status }) => {
  const [visible, setVisible] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const hideTimeout = setTimeout(() => {
      setVisible(false);
    }, duration > 2000? duration - 1000: duration);

    const removeTimeout = setTimeout(() => {
      cleanNotification({ message, duration, status }, dispatch);
    }, duration);

    return () => {
      clearTimeout(hideTimeout);
      clearTimeout(removeTimeout);
    };
  }, [duration, dispatch, message, status]);

  let bgColor = 'bg-green-50';
  let borderColor = 'border-green-500';
  let textColor = 'text-green-400';
  let textColor2 = 'text-green-600';
  if (status === 'warning') {
    bgColor = 'bg-yellow-50';
    borderColor = 'border-yellow-500';
    textColor = 'text-yellow-400';
    textColor2 = 'text-yellow-600';
  } else if (status === 'error') {
    bgColor = 'bg-red-50';
    borderColor = 'border-red-500';
    textColor = 'text-red-400';
    textColor2 = 'text-red-600';
  }

  return (
    <div
      className={`relative top-0 left-0 items-center w-full mx-auto  max-w-7xl transition-opacity duration-500 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className={`p-6 border-l-4 rounded-r-xl ${bgColor} ${borderColor}`}>
        <div className="flex">
          <div className="flex-shrink-0">
            <svg
              className={`w-5 h-5 ${textColor}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <div className={`text-sm ${textColor2}`}>
              <p>{message}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export const NotificationHandler  = () => {

  const notifications = useSelector((state : AppState) => state.notification.notifications );

  return <>
    {notifications.filter(it => it.message && it.message !== '').map((it,index) => <NotificationCard key={`notif_${index}`} duration={it.duration} message={it.message} status={it.status}/> ) }
  </>
   
}