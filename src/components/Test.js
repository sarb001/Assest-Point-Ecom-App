import React from 'react'

const Test = () => {
  return (
    <div>
            <button className ="btn btn-primary modal-open-btn">Open modal</button>
                <div className ="modal-overlay">
                    <div className ="modal-demo-container">
                        <h3 className  ="pd-bottom-md">Deal of the day</h3>
                        <p className ="fw-bold pd-bottom-lg">The Psychology of money is 50% off</p>
                        <button className ="btn btn-primary">Buy now</button>
                        <button id="modal-close" className ="modal-close-btn">
                            <span className ="material-icons">close</span>
                        </button>
                    </div>
                </div>
    </div>
  )
}

export default Test