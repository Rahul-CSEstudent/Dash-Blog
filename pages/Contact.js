import React from 'react';


const Contact = () => {
  return (
      <div class="flex justify-center items-center min-h-screen">
    <div className='container'>
    <h2>Contact Us</h2>
    <div className="row100">
        <div className='col'>
            <div className='inputBox'>
                <input type="type" name="" required="required" />
                <span className='text'>First Name</span>
                <span className='line'></span>
            </div>
        </div>

        <div className='col'>
        <div className='inputBox'>
            <input type="type" name="" required="required" />
            <span className='text'>First Name</span>
            <span className='line'></span>
        </div>
        </div>
    


    <div className="row100">
    <div className='col'>
        <div className='inputBox'>
            <input type="type" name="" required="required" />
            <span className='text'>Email</span>
            <span className='line'></span>
        </div>
    </div>

    <div className='col'>
        <div className='inputBox'>
            <input type="type" name="" required="required" />
            <span className='text'>Moblie</span>
            <span className='line'></span>
        </div>
    </div>
    </div>

    <div className="row100">
    <div className='col'>
        <div className='inputBox'>
            <textarea required="required"></textarea>
    
            <span className='text'>type your message here...</span>
            <span className='line'></span>
        </div>
    </div>
    </div>

    <div className="row100">
        <div className='col'>
            <input type="submit" value="Send"></input>
        </div>
    </div>
    </div>

</div>
</div>


  )
}

export default Contact