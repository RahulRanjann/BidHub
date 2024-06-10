export default function UserInfo() {
    return (
      <div className="m-10">
        <div className="flex justify-center p-2 rounded-t-2xl bg-slate-600">
          <h1 className="text-2xl font-bold text-white">User Info</h1>
        </div>
        <div className="flex justify-center items-center  border-2 border-gray-300 p-4 rounded-b-2xl">
          <div className="grid grid-cols-2 ">
            <div className="space-y-4 ml-40 mr-16">
              <div className="flex items-center">
                <label htmlFor="username" className="text-gray-300 w-24">Username:</label>
                <input
                  required
                  name="username"
                  type="text"
                  id="username"
                  placeholder="Username"
                  className="border-2 text-black font-medium border-gray-300 rounded-md w-64 h-10 p-2 focus-visible: outline-slate-400"
                />
              </div>
              <div className="flex items-center"> 
                <label htmlFor="email" className="text-white w-24">Email:</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="border-2 text-gray-600 font-medium border-gray-300 rounded-md w-64 h-10 p-2"
                />
              </div>
              <div className="flex items-center">
                <label htmlFor="phone" className="text-white w-24">Phone:</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone"
                  className="border-2 text-gray-600 font-medium border-gray-300 rounded-md w-64 h-10 p-2"
                />
              </div>
              <div className="flex items-center">
                <label htmlFor="password" className="text-white w-24">Password:</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="border-2 text-gray-600 font-medium border-gray-300 rounded-md w-64 h-10 p-2"
                />
              </div>
            </div>

            <div className="space-y-4 ml-16">
              <div className="flex items-center">
                <label htmlFor="address" className="text-white w-24">Address:</label>
                <input
                  type="text"
                  id="address"
                  placeholder="Address"
                  className="border-2 text-gray-600 font-medium border-gray-300 rounded-md w-64 h-10 p-2"
                />
              </div>
              <div className="flex items-center">
                <label htmlFor="city" className="text-white w-24">City:</label>
                <input
                  type="text"
                  id="city"
                  placeholder="City"
                  className="border-2 text-gray-600 font-medium border-gray-300 rounded-md w-64 h-10 p-2"
                />
              </div>
              <div className="flex items-center">
                <label htmlFor="state" className="text-white w-24">State:</label>
                <input
                  type="text"
                  id="state"
                  placeholder="State"
                  className="border-2 text-gray-600 font-medium border-gray-300 rounded-md w-64 h-10 p-2"
                />
              </div>
              <div className="flex items-center">
                <label htmlFor="pincode" className="text-white w-24">Pincode:</label>
                <input
                  type="number"     
                  id="pincode"
                  placeholder="Pincode"
                  className="border-2 text-gray-600 font-medium border-gray-300 rounded-md w-64 h-10 p-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  