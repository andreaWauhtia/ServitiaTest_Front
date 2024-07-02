interface ChatItemProps {
    sender: string;
    content: string;
    sentDate: Date;
    isOutgoing: boolean;
    status?: string;
  }

export const ChatItem: React.FC<ChatItemProps> = ({ sender, content, sentDate, isOutgoing, status }) => {
    return (
      <div className={`flex ${isOutgoing ? 'justify-end' : 'justify-start'} mb-4`}>
        <div className={`p-4 rounded-lg shadow-md ${isOutgoing ? 'bg-blue-100' : 'bg-green-100'}`}>
        <p className="font-light text-blue-600">{sender}</p>
          <p className="font-semibold">{content}</p>
          <div className="flex flex-row text-end text-gray-600 mt-2">
            <p className="font-thin">
              {sentDate.toLocaleTimeString()} 
            </p>
            {isOutgoing && status === 'read' && <svg width="20px" height="20px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>double-check</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="add" fill="#8f8a8a" transform="translate(43.973345, 142.401162)"> <path d="M29.3866437,92.7988498 L118.095989,177.108171 L140.695,144.951 L171.978,174.67 L124.596148,242.098499 L-2.84217094e-14,123.732159 L29.3866437,92.7988498 Z M391.905232,0 L426.814745,24.5310087 L273.929481,242.098499 L149.333333,123.732159 L178.719977,92.7988498 L267.429322,177.108171 L391.905232,0 Z M242.571899,0 L277.481411,24.5310087 L221.567,104.101 L190.298,74.375 L242.571899,0 Z" id="Combined-Shape"> </path> </g> </g> </g></svg>}
          </div>
        </div>
      </div>
    );
  };