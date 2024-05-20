import Head from "next/head"
import Usermessage from "@/components/Usermessage"
import UserChat from "@/components/UserChat"

export default function Message() {
  return (
    <>
        <Head>
            <title>WorkShop Hub | Message</title>
            <meta name="keywords" content="workshop,papimpat,community"></meta>
        </Head>
        <div className="container content">
          <h1 className="heading">Message</h1>
        <div className="message-grid">
          <Usermessage/>
          <UserChat/>
        </div>
          

        </div>
    </>
    
  )
}
