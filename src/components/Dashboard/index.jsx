import spotifyImg from '../../assets/desktop/spotify.svg'
import appleImg from '../../assets/desktop/apple-podcast.svg'
import googleImg from '../../assets/desktop/google-podcasts.svg'
import pocketImg from '../../assets/desktop/pocket-casts.svg'

import logoImg from '../../assets/desktop/logo.svg'
import dotsImg from '../../assets/desktop/bg-pattern-dots.svg'

import * as S from './styles'

export function Dasboard() {
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
              <input type="email" name="email" placeholder="Email address" />
              <button type="button">Request Access</button>
            </S.Form>

            <S.Logos>
              <img src={spotifyImg} alt="spotify-log" color='red' />
              <img src={appleImg} alt="apple-log" />
              <img src={googleImg} alt="google-log" />
              <img src={pocketImg} alt="pocket-log" />
            </S.Logos>
          </S.Content>
        </div>
        <img src={dotsImg} alt="dots" className='dots-img' />
      </S.Container>
    </>
  )
}