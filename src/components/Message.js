import { useContext } from "react";
import { MessageContext } from "../store/messageStore";

function Message() {
    // const [message, setMessage] = useState({});
    const [message] = useContext(MessageContext);

  return (
    <>
      {/* <button
        type='button'
        onClick={() => {
            dispatch({
                type: 'POST_MESSAGE',
            })
            // setMessage({
            //     type: 'success', // success, danger
            //     title: '成功',
            //     text: '這是一段成功的訊息'
            // })
            setTimeout(() => {
                // setMessage({})
                dispatch({
                    type: 'CLEAR_MESSAGE',
                })
            }, 3000);
        }}
      >
        按我
      </button> */}
      <div
        className='toast-container position-fixed'
        style={{ top: '64px', right: '15px' }}
      >
        {message.title && (
          <div
            className='toast show'
            role='alert'
            aria-live='assertive'
            aria-atomic='true'
          >
            <div className={`toast-header text-white bg-${message.type}`}>
              <strong className='me-auto'>{message.title}</strong>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='toast'
                aria-label='Close'
              />
            </div>
            <div className='toast-body'>{message.text}</div>
          </div>
        )}
      </div>
    </>
  );
}

export default Message;