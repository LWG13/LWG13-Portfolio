
import "./Subscribe.scss"
import MailchimpSubscribe from "react-mailchimp-subscribe"
import SubscribeTemp from "./subscribeTemp.jsx"
export default function Subscribe() {
    
  return (
    <div className="box">
     <MailchimpSubscribe 
       render={({subscribe, status, message}) => (
         <>
          <SubscribeTemp onValidated={formData => subscribe(formData)} status={status} message={message}/>
         </>
       )}
     />
    </div>
  )
}