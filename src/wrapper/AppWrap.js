import { useTheme } from '../hooks/useTheme'

const AppWrap = (Component, idName, className) => function HOC () {
  const { mode } = useTheme()

  return <div id={idName} className={`app__container ${mode} ${className}`}>
           <div className='app__wrapper app__flex'>
             <Component/>
           </div>
         </div>
}

export default AppWrap
