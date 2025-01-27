import React from "react";
import { useLocation } from "react-router-dom";
import useAuth from "../../Firebase/useAuth";
import useAxiosPublic from "../../Pages/Shared/Custom/useAxiosPublic";
import useCart from "../../Pages/Shared/Custom/useCart";

const SslPayment = () => {
  const [cart, refetch] = useCart();
  const axiosPublic = useAxiosPublic()
  const location = useLocation()
  const { user } = useAuth();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const handleCreatePayment = () => {
    const paymentInfo = {
      email: user.email,
      price: totalPrice,
      transaction: "",
      date: new Date(),
      cartIds: cart.map((item) => item._id),
      itemIds: cart.map((item) => item.itemId),
      status: "pending",
    };

   axiosPublic.post('/create-ssl-payment', paymentInfo)
  .then(res => {
    console.log(res.data)
    if(res.data?.gatewayUrl) {
        // Swal.fire('Payment Successfull')
        window.location.replace(res.data?.gatewayUrl)
    }
  })
  .catch(err => {
    console.log('err from ssl ' , err)
  })

    console.log(paymentInfo)
  };
  return (
    <div>
      <div class="">
        <div class="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p class="text-xl font-medium">Payment Details</p>
          <p class="text-gray-400">
            Complete your order by providing your payment details.
          </p>
          <div class="">
            <label for="email" class="mt-4 mb-2 block text-sm font-medium">
              Email
            </label>
            <div class="relative">
              <input
                type="text"
                id="email"
                value={user?.email}
                name="email"
                class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="your.email@gmail.com"
              />
              <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </div>
            </div>
          </div>
          <button
            onClick={handleCreatePayment}
            class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
          >
            Place Order
          </button>
          {/* <button
              class="btn bg-purple-500 text-white/90 w-full my-3"
              id="sslczPayBtn"
              token="if you have any token validation"
              postdata={{
                email: user.email,
                price: totalPrice,
                transaction: "",
                date: new Date(), // utc date convert. use moment js to
                cartIds: cart.map((item) => item._id),
                itemIds :  cart.map((item) => item.itemId),
                status: "pending",
              }}
              order={JSON.stringify({
                email: user.email,
                price: totalPrice,
                transaction: "",
                date: new Date(), // utc date convert. use moment js to
                cartIds: cart.map((item) => item._id),
                menuItemIds: cart.map((item) => item.menuId),
                status: "pending",
              })}
              endpoint="http://localhost:5000/create-ssl-payment"
            >
              {" "}
              Pay Now
            </button> */}
        </div>
      </div>
    </div>
  );
};

export default SslPayment;
