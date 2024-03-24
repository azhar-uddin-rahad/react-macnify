import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import watchImg687 from "./assets/wristwatch_687.jpg"
import watchImg1200 from "./assets/wristwatch_1200.jpg"
import ReactImageMagnify from 'react-image-magnify'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="fluid">
                <div className="fluid__image-container">
                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: watchImg687,
                        },
                        largeImage: {
                            src: watchImg1200,
                            width: 1200,
                            height: 1800
                        }
                    }} />
                </div>
                <div className="fluid__instructions">
                    <h3>Basic Example</h3>
                    <p>
                        Side by Side enlargement for mouse input.
                    </p>
                    <p>
                        In place enlargement for touch input.
                    </p>
                    <p>
                        Fluid between breakpoints.
                    </p>
                    <p>
                        Please se
                        for details.
                    </p>
                </div>
                <div style={{height: '500px'}} />
            </div>
    </>
  )
}

export default App
