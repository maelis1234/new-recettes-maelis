const Footer = () => {
  return (
    <footer className='mt-16 border-t-4 border-black dark:border-white pt-4 flex items-center justify-between text-sm'>
      <p>
        Made with <span className='text-pink-600'>♥</span> by Maëlis
      </p>
      <a
        href='https://github.com/maelis1234/new-recettes-maelis'
        target='_blank'
        rel='noopener noreferrer'
        className='hover:text-pink-600'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='w-5 h-5'
        >
          <path
            fillRule='evenodd'
            d='M12 2C6.48 2 2 6.48 2 12a10.002 10.002 0 006.84 9.51c.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.61-3.37-1.34-3.37-1.34-.46-1.17-1.12-1.48-1.12-1.48-.91-.63.07-.62.07-.62 1.01.07 1.54 1.04 1.54 1.04.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.63-1.35-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0112 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .26.18.58.69.48A10.002 10.002 0 0022 12c0-5.52-4.48-10-10-10z'
            clipRule='evenodd'
          />
        </svg>
      </a>
    </footer>
  )
}

export default Footer
