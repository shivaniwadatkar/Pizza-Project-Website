function Contact(){
    return(
        <>
        <link href="stylesheet" rel="style.css"></link>
        <form>
            <fieldset>
              <br></br>
                <legend></legend>
                <h1>If you have any questions, please use this form.</h1>
                <br></br>
                <div className="container">
                <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Full Name </label>
  <input type="text" class="form-control" id="exampleFormControlInput1" />
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone Number </label>
  <input type="text" class="form-control" id="exampleFormControlInput1" />
</div>

  <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email </label>
  <input type="text" class="form-control" id="exampleFormControlInput1" />
</div>

  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label><br></br>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" height="50" width="10" ></textarea>
</div>

  <input type="checkbox"></input>
  <label for="read">I'm not a robot</label><br></br>
<br></br>

  <button type="submit" class="btn btn-primary">Submit</button>
  </div>
  </fieldset>
 
  </form>

  <hr></hr>
<br></br>
  <div>DOWNLOAD APP</div>

  <ul class="css-1q2lbmy">
    <li><a href="https://apps.apple.com/in/app/pizza-hut-india/id848379180" target="_blank" rel="noopener">
    <img alt="Download our iOS app" src="https://www.pizzahut.co.in/_next/static/static/images/ios.8bab50976228b57b171b916a98ddfd11.svg" class="css-12oqf5i"/>
    </a>
    </li></ul>

    <p>For any further queries, please call at 1800-202-2022 </p>
    <p> Write to us here: HutCares@yum.com</p>
   
    </>
    )
}
export default Contact;