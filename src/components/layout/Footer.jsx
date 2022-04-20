import { FaGithub } from 'react-icons/fa'
import { FaLink } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='footer grow-0 justify-between bg-slate-200 p-4 justify-self-end'>
      <Link to='/about'>About this project</Link>
      <div className='flex md:place-self-center md:justify-self-end'>
        <a
          href='https://github.com/seanmr7'
          target='_blank'
          rel='noreferrer'
          className='flex mx-2'>
          <FaGithub className='self-center' />
          <p className='ml-1 self-center'>Github</p>
        </a>
        <a
          href='https://seanrportfolio.com'
          target='_blank'
          rel='noreferrer'
          className='flex mx-2'>
          <FaLink className='self-center' />
          <p className='ml-1 self-center'>Portfolio</p>
        </a>
      </div>
    </footer>
  )
}

export default Footer
