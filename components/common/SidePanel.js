import { Children } from 'react'

const SidePanel = ({ children }) => {

    return (

        <aside className="flex flex-col bg-base-200 w-1/4 max-w-lg min-w-[15rem] h-screen">
            <figure id='courseHeader' className=" bg-primary ">
                <img src='\images\header.jpg' ></img>
            </figure>
            <div className=' card-body'>

                {children}

            </div>

        </aside>

    )
}

export default SidePanel;