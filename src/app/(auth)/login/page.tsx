import React from "react";

export default function page() {
  return (
    <div>
      <section className="transition-fade container mx-auto flex min-h-screen max-w-screen-sm flex-col bg-SEPurple text-white tablet:my-10 tablet:rounded-xl">
        {/* nav start */}
        <nav className="flex justify-between px-8 pt-6">
          {/* back button */}
          <a href="./welcome.html" className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </a>
          {/* link/button to go to login page */}
          <a href="./signup.html" className="capitalize underline">
            {" "}
            Register{" "}
          </a>
        </nav>
        {/* nav end */}
        {/* Sign in prompt start */}
        <div className="py-5 px-8">
          <h1 className="text-2xl font-bold uppercase">sign in</h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
            voluptatibus qui et temporibus voluptatem doloremque exercitationem,
            hic ipsam.
          </p>
        </div>
        {/* Sign in prompt end */}
        {/* signin form start */}
        <form className="mt-auto flex flex-col justify-between space-y-5 rounded-t-5xl bg-white py-5 pb-10 shadow-3xl shadow-black">
          <div className="flex flex-col justify-between space-y-6 rounded-t-6xl bg-white py-4 px-10 drop-shadow">
            {/* email input */}
            <label htmlFor="emailInput" className="sr-only">
              {" "}
              Email input{" "}
            </label>
            <input
              id="emailInput"
              type="email"
              className="auth-input"
              placeholder="Email / Phone"
            />
            {/* pswd email */}
            <label htmlFor="pwdInput" className="sr-only">
              {" "}
              Email input{" "}
            </label>
            <input
              id="pwdInput"
              type="password"
              className="auth-input"
              placeholder="Password"
            />
            {/* forgot password link */}
            <div className="text-right text-sm uppercase text-SEDarkBlue">
              <a href="" className="">
                forget password?
              </a>
            </div>
            <button type="submit" className="btn-base max-w-sm text-sm">
              Sign in
            </button>
          </div>
          {/* signin and signup button  */}
          <div className="flex flex-col px-10">
            {/* google login button  */}
            <button
              aria-label="Continue with google"
              role="button"
              className="max-xs:text-xs xs:text-base mt-10 flex max-w-sm items-center justify-around rounded-full bg-white py-3.5 px-4 text-SEDarkBlue drop-shadow-lg focus:outline-none focus:ring-2 focus:ring-SEDarkBlue focus:ring-offset-1"
            >
              {/* google login icon  */}
              <svg
                id="Capa_1"
                className="w-10"
                //   style={{ enableBackground: "new 0 0 150 150" }}
                version="1.1"
                viewBox="0 0 150 150"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <style
                  type="text/css"
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n                .st0 {\n                  fill: #1a73e8;\n                }\n\n                .st1 {\n                  fill: #ea4335;\n                }\n\n                .st2 {\n                  fill: #4285f4;\n                }\n\n                .st3 {\n                  fill: #fbbc04;\n                }\n\n                .st4 {\n                  fill: #34a853;\n                }\n\n                .st5 {\n                  fill: #4caf50;\n                }\n\n                .st6 {\n                  fill: #1e88e5;\n                }\n\n                .st7 {\n                  fill: #e53935;\n                }\n\n                .st8 {\n                  fill: #c62828;\n                }\n\n                .st9 {\n                  fill: #fbc02d;\n                }\n\n                .st10 {\n                  fill: #1565c0;\n                }\n\n                .st11 {\n                  fill: #2e7d32;\n                }\n\n                .st12 {\n                  fill: #f6b704;\n                }\n\n                .st13 {\n                  fill: #e54335;\n                }\n\n                .st14 {\n                  fill: #4280ef;\n                }\n\n                .st15 {\n                  fill: #34a353;\n                }\n\n                .st16 {\n                  clip-path: url(#SVGID_2_);\n                }\n\n                .st17 {\n                  fill: #188038;\n                }\n\n                .st18 {\n                  opacity: 0.2;\n                  fill: #ffffff;\n                  enable-background: new;\n                }\n\n                .st19 {\n                  opacity: 0.3;\n                  fill: #0d652d;\n                  enable-background: new;\n                }\n\n                .st20 {\n                  clip-path: url(#SVGID_4_);\n                }\n\n                .st21 {\n                  opacity: 0.3;\n                  fill: url(#_45_shadow_1_);\n                  enable-background: new;\n                }\n\n                .st22 {\n                  clip-path: url(#SVGID_6_);\n                }\n\n                .st23 {\n                  fill: #fa7b17;\n                }\n\n                .st24 {\n                  opacity: 0.3;\n                  fill: #174ea6;\n                  enable-background: new;\n                }\n\n                .st25 {\n                  opacity: 0.3;\n                  fill: #a50e0e;\n                  enable-background: new;\n                }\n\n                .st26 {\n                  opacity: 0.3;\n                  fill: #e37400;\n                  enable-background: new;\n                }\n\n                .st27 {\n                  fill: url(#Finish_mask_1_);\n                }\n\n                .st28 {\n                  fill: #ffffff;\n                }\n\n                .st29 {\n                  fill: #0c9d58;\n                }\n\n                .st30 {\n                  opacity: 0.2;\n                  fill: #004d40;\n                  enable-background: new;\n                }\n\n                .st31 {\n                  opacity: 0.2;\n                  fill: #3e2723;\n                  enable-background: new;\n                }\n\n                .st32 {\n                  fill: #ffc107;\n                }\n\n                .st33 {\n                  opacity: 0.2;\n                  fill: #1a237e;\n                  enable-background: new;\n                }\n\n                .st34 {\n                  opacity: 0.2;\n                }\n\n                .st35 {\n                  fill: #1a237e;\n                }\n\n                .st36 {\n                  fill: url(#SVGID_7_);\n                }\n\n                .st37 {\n                  fill: #fbbc05;\n                }\n\n                .st38 {\n                  clip-path: url(#SVGID_9_);\n                  fill: #e53935;\n                }\n\n                .st39 {\n                  clip-path: url(#SVGID_11_);\n                  fill: #fbc02d;\n                }\n\n                .st40 {\n                  clip-path: url(#SVGID_13_);\n                  fill: #e53935;\n                }\n\n                .st41 {\n                  clip-path: url(#SVGID_15_);\n                  fill: #fbc02d;\n                }\n              ",
                  }}
                />
                <g>
                  <path
                    className="st14"
                    d="M120,76.1c0-3.1-0.3-6.3-0.8-9.3H75.9v17.7h24.8c-1,5.7-4.3,10.7-9.2,13.9l14.8,11.5   C115,101.8,120,90,120,76.1L120,76.1z"
                  />
                  <path
                    className="st15"
                    d="M75.9,120.9c12.4,0,22.8-4.1,30.4-11.1L91.5,98.4c-4.1,2.8-9.4,4.4-15.6,4.4c-12,0-22.1-8.1-25.8-18.9   L34.9,95.6C42.7,111.1,58.5,120.9,75.9,120.9z"
                  />
                  <path
                    className="st12"
                    d="M50.1,83.8c-1.9-5.7-1.9-11.9,0-17.6L34.9,54.4c-6.5,13-6.5,28.3,0,41.2L50.1,83.8z"
                  />
                  <path
                    className="st13"
                    d="M75.9,47.3c6.5-0.1,12.9,2.4,17.6,6.9L106.6,41C98.3,33.2,87.3,29,75.9,29.1c-17.4,0-33.2,9.8-41,25.3   l15.2,11.8C53.8,55.3,63.9,47.3,75.9,47.3z"
                  />
                </g>
              </svg>
              <p className="font-medium">Continue with Google</p>
              {/* right arrow icon  */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
            {/* phone login button  */}
            <button
              aria-label="login with phone"
              role="button"
              className="max-xs:text-xs xs:text-base mt-10 flex max-w-sm items-center justify-around rounded-full bg-white py-3.5 px-4 text-SEDarkBlue drop-shadow-lg focus:outline-none focus:ring-2 focus:ring-SEDarkBlue focus:ring-offset-1"
            >
              {/* phone icon  */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
              <p className="font-medium">Continue with phone</p>
              {/* right arrow icon  */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
        </form>
        {/* signin form end  */}
      </section>
    </div>
  );
}
