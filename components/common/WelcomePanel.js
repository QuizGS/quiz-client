import { Children } from 'react'

const WelcomePanel = ({ children }) => {

    return (

        <aside className="flex flex-col bg-base-200 w-1/4 max-w-lg min-w-[15rem] h-screen">

            <div className=' card-body'>
                <h1 className='card-title'>
                    Hello
                </h1>
            </div>

        </aside>

    )
}

export default WelcomePanel;