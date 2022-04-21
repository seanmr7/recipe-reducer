import LoadingImage from '../../assets/images/loading.gif'

function Loading() {
  return (
    <div className='mx-auto w-20 mt-16'>
      <img src={LoadingImage} alt='Loading' className='mx-auto' />
    </div>
  )
}

export default Loading
