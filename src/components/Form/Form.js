import './Form.css';
const Form = () => {
    const radioChanged = (event) => {

    };
    const rateChanged = (event) => {

    };
    return (
        <div className="form">
            <h2>Sign Up</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                commodo viverra maecenas accumsan lacus vel tacilisis. t is a long established tact that a reader will be distracted by the readable content of a page when looking at its layout
                he point of usina Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to usina Content here, content here*, making it look like readable tnalish
            </p>
            <p className='mandatory'>Fields marked with (*) are mandatory.</p>
            <form className='form-group' action="">
                <div className="container-md main-collection">
                    <div className="row firstRow">
                        <div className="col-md-6">
                            <label htmlFor="firstName">First Name:*</label>
                            <input type="text" name="firstName" id="firstName" className='form-control' required aria-required="true" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="screenshot">Screen Shot:</label>
                            <input type="file" name="screenshot" id="screenshot" className='form-control' />
                        </div>
                    </div>
                    <div className="row secondRow">
                        <div className="col-md-6">
                            <label htmlFor="lastName">Last Name:</label>
                            <input type="text" name="lastName" id="" className='form-control' />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="country">Country:*</label>
                            <select className="form-select" aria-label="Country dropdown" defaultValue={`Select`}>
                                <option>Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div className="row thirdRow">
                        <div className="col-md-6">
                            {/* <label htmlFor="gender">Gender:</label> */}
                            <fieldset className='border p-2'>
                                <legend htmlFor="gender" className='w-auto float-none'>Gender:</legend>
                                <div className='control-group'>
                                    <input type="radio" name="format" id="male" value="male" onChange={(ev) => { radioChanged(ev) }} />
                                    <label htmlFor="male">Male</label>
                                </div>
                                <div>
                                    <input type="radio" name="format" id="female" value="female" onChange={(ev) => { radioChanged(ev) }} />
                                    <label htmlFor="female">Female</label>
                                </div>
                            </fieldset>
                        </div>
                        <div className="col-md-6 tnc">
                            <div className='terms'>
                                <input className="form-check-input" type="checkbox" value="" id="tnc" />
                                <label className="form-check-label" htmlFor="tnc">
                                    Agree to <span>Terms and Conditions</span>
                                </label>
                            </div>
                            <div className='offers'>
                            <input className="form-check-input" type="checkbox" value="" id="offers" />
                                <label className="form-check-label" htmlFor="offers">
                                    I consent to receive information about services and special offers by email
                                </label>
                            </div>
                            
                        </div>
                    </div>
                    <div className="row fourthRow">
                        <div className="col-md-6">
                            <label htmlFor="rate">Rate yourself:*</label>
                            <input type="range" min={0} max={100} name="rate" id="rate" value={25} className='form-control' list='data' onChange={(ev) => rateChanged(ev)}/>
                                <datalist id="data">
                                    <option value="0" label="0%"></option>
                                    <option value="100" label="100%"></option>
                                </datalist>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="screenshot">Screen Shot:</label>
                            <input type="file" name="screenshot" id="" className='form-control' />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Form;