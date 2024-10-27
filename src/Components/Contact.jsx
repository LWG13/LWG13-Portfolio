
import "./Contact.scss"
import axios from "axios"
import { Grid } from "@mui/material"
import { useState} from "react"
import contact from "./contact.png"
import { useQuery, useMutation, useQueryClient  } from "react-query"
export default function Contact() {
  const addUser = (user) => {   
  //return axios.post("https://fb2d114d-313c-4cd4-aba1-2b232d4f9333-00-21ybggit4xcqu.pike.replit.dev:3001/data", user)
  return request({ url: "/contact", method: "post", data: user})
}

const useMutationUser = () => {
  const queryClient = useQueryClient()
  return useMutation(addUser, {
    //onSuccess: (data) => {
      //queryClient.setQueryData("data-user",(oldValue) => {
       // return {
      //  ...oldValue,
        //  data: [...oldValue.data, data.data]
      //  }
    // })
   // }
  onMutate: async (newValue) => {
    await queryClient.cancelQueries("contact")
    const prevData = queryClient.getQueryData("contact")
    queryClient.setQueryData("contact",(oldValue) => {                  return {                             ...oldValue,                        data: [
       ...oldValue.data,
      {id: oldValue?.data?.length + 1, newValue}
        ]
    }})
    return {
      prevData,
    }
  },
  onSuccess: (_data,_error, context) => {
    queryClient.setQueryData("contact", context.prevData)
  },
  onSettled: () => {
    queryClient.invalidateQueries("contact")
  }
  })
}
  const client = axios.create({baseURL: "https://b64ef30c-0de5-4279-9e28-8961307527b4-00-1skni997sj2au.sisko.replit.dev:3000"})
const request = ({...option}) => {
  client.defaults.headers.common["Authorization"] = "Bearer token"  
  const onSuccess = (response) => response
  const onError = (error) => {
    return error
  }
  return client(option).then(onSuccess).catch(onError)
}
const getData = () => {   
  //return axios.get(" https://fb2d114d-313c-4cd4-aba1-2b232d4f9333-00-21ybggit4xcqu.pike.replit.dev:3001/data")
  return request({url: "/contact"})
}

  const { mutate } = useMutationUser()
  
  

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState()
  const [message, setMessage] = useState("")

  
  const handleSubmit = () => {
    const user = {name, email, phone,message};
    mutate(user)
    setName("")
    setEmail("")
    setPhone("")
    setMessage("")
  }

  
  const { isLoading, isError, error } = useQuery("contact", getData)


  return (
    <section className="contact" id="connect">
      <div className="container">
        <Grid container my={4}>
          <Grid item xs={12} md={6}>
            <div className="image-contact">
              <img src={contact} alt="contact" />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
           <div className="form-contact">
          
            <h2>Contact me</h2>
             <div>
                  <input type="text" value={name} placeholder="Name" onChange={(e) => setName( e.target.value)}/>
                  <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail( e.target.value)}/>
                  <input type="tel" value={phone} min="0" max="10" placeholder="Phone Number" onChange={(e) => setPhone( e.target.value)} />
                  <textarea rows="6" value={message} placeholder="Message" onChange={(e) => setMessage( e.target.value)} />
             </div>
                  <br />
                  <button  className="btn-contact" onClick={handleSubmit}><span>Submit</span></button>
            
              {isLoading ? <p>Sending</p> : null}
              {isError ? <p>Error: {error}</p> : null}
           </div>
          </Grid>
        </Grid>
      </div>
    </section>
  )
}
