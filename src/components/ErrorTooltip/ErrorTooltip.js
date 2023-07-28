import './ErrorTooltip.css';

function ErrorTooltip({ message, isSuccess }) {
  return (
    <div className='error-tooltip'>
      <p
        className={`error-tooltip__message 
      ${isSuccess && 'error-tooltip__message_success'}`
        }>{message}</p>
    </div>
  )
}

export default ErrorTooltip;