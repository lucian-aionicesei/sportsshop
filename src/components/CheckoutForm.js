import {useRef} from "react"

export default function CheckoutForm() {
    const formEl = useRef(null);
    function submitted(e) {
        e.preventDefault();
        console.log(formEl.current.elements.fullName.value);
        console.log(formEl.current.elements.address.value);
    }
  return (
    <div>
      <form ref={formEl} onSubmit={submitted}>
        <label htmlFor="fullName">Full name</label>
        <input required type="text" name="fullName" id="fullName"/>
        <label htmlFor="address">Address</label>
        <input required type="text" name="address" id="address"/>
        <button>Pay</button>
      </form>
    </div>
  );
}
