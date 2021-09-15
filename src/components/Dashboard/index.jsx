import spotifyImg from '../../assets/desktop/spotify.svg'
import appleImg from '../../assets/desktop/apple-podcast.svg'
import googleImg from '../../assets/desktop/google-podcasts.svg'
import pocketImg from '../../assets/desktop/pocket-casts.svg'

import logoImg from '../../assets/desktop/logo.svg'
import dotsImg from '../../assets/desktop/bg-pattern-dots.svg'

import * as S from './styles'
import { useState } from 'react'

export function Dasboard() {
  const [email, setEmail] = useState('')
  const [isEmailValid, setIsEmailValid] = useState(true)
  console.log({isEmailValid})

  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return setIsEmailValid(regex.test(email))
  }

  return (
    <>
      <S.Container>
        <div className='layout'>
          <img src={logoImg} alt="pod-log" className='img-logo' />
          <S.Content>

            <h1>Publish your podcasts</h1>
            <h1 className='highlighted-h1'>everywhere.</h1>

            <p>Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify,
              Apple Podcasts, Google Podcasts, Pocket Casts and more!</p>

            <S.Form>
              <input 
                type="email"
                name="email"
                placeholder="Email address"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
              <button 
                type="button"
                onClick={() => validateEmail(email)}
              > 
                Request Access
              </button>
            </S.Form>

            {!isEmailValid &&
              <S.ErrorMessage>Oops! Please check your email</S.ErrorMessage>
            }

            <S.Logos>
              <img src={spotifyImg} alt="spotify-log" color='red' />
              <img src={appleImg} alt="apple-log" />
              <img src={googleImg} alt="google-log" />
              <img src={pocketImg} alt="pocket-log" />
            </S.Logos>
          </S.Content>
        </div>
        <div className='dots-img'>
          <img src={dotsImg} alt="dots" />
        </div>
      </S.Container>
    </>
  )
}