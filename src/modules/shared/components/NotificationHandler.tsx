
export interface NotificationHandlerProps{
    status: 'sucess' | 'warning' | 'error',
    message: string,
    duration: number
}
export const NotificationHandler : React.FC<{props: NotificationHandlerProps}> = ({props }) => {

    const {status, message, duration} = props;
    let bgColor = 'bg-green-50';
    let borderColor = 'border-green-500';
    let textColor = 'text-green-400';
    let textColor2 = 'text-green-600';
    if (status === 'warning'){
        bgColor = 'bg-yellow-50';
        borderColor = 'border-yellow-500';
        textColor = 'text-yellow-400';
        textColor2 = 'text-yellow-600';
    }
    else if (status === 'error'){
        bgColor = 'bg-red-50';
        borderColor = 'border-red-500';
        textColor = 'text-red-400';
        textColor2 = 'text-red-600';
    } 
    return <>
    <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
  <div className={`p-6 border-l-4  -6 rounded-r-xl  ${bgColor} ${borderColor} `}>
    <div className="flex">
      <div className="flex-shrink-0">
        <svg className={`w-5 h-5 ${textColor}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
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
    </>;
}