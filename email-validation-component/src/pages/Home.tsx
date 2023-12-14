import React from 'react'
import { ContainerHome } from './style'
import SendEmailButton from '../components/sendEmailButton/SendEmailButton'

function Home() {
  return (
    <>
        <ContainerHome>
            <h1>Stay updated!</h1>

            <p>Join 60,000+ product managers receiving monthly updates on:</p>

            <p>Product discovery and building what matters</p>
            <p>Measuring to ensure updates are a sucess</p>
            <p>And much more!</p>
            <SendEmailButton />
        </ContainerHome>
    </>
  )
}

export default Home;