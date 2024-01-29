import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({ onLogin }) => {
  const [formValues, setFormValues] = useState({
    email: 'test@gmail.com',
    password: 'test@123',
  })
  const [formError, setFormError] = useState(null)
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  const navigate = useNavigate()
  const handleSignIn = () => {
    // eslint-disable-next-line
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formValues.email)) {
      setFormError('Invalid Email Adress')
      return
    }
    if (formValues.password.length < 8) {
      setFormError('Password should have atleast 8 characters')
      return
    }
    setFormError(null)
    onLogin(true)
    navigate('/home')
  }
  return (
    <div className="w-screen h-screen flex flex-col lg:flex-row bg-bgbody">
      <div className="lg:basis-1/2 bg-primary clip">
        <div className="ml-[5.5vw] my-[7.5vw] lg:ml-[4.2vw] lg:mt-[3.8vw]">
          <div className="flex gap-[11px] items-center">
            <svg
              className="size-[7.2vw] lg:size-[87px]"
              width="100%"
              height="100%"
              viewBox="0 0 87 81"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="44.1102" cy="40.3929" r="40.0765" fill="#FCFCFF" />
              <path
                d="M2.02979 37.0531L32.0871 51.7478L58.8048 29.7058L84.8545 43.0646"
                stroke="#605BFF"
                strokeWidth="6"
              />
            </svg>
            <h1 className="lg:fixed left-[13.6vw] top-[45vh] text-[white] font-nunito text-[20px] font-semibold lg:font-montserrat lg:text-[72px] lg:font-bold lg:uppercase">
              Base
            </h1>
          </div>
        </div>
        <div className="fixed bottom-[13vw] lg:bottom-[4.7vw] flex left-[50%] translate-x-[-50%] lg:left-[10vw] lg:translate-x-0 items-center gap-4 lg:gap-8">
          <svg
            className="large"
            width="45"
            height="44"
            viewBox="0 0 45 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22.4606 0.00013472C17.2463 0.000855345 12.2023 1.90663 8.2309 5.37654C4.25953 8.84645 1.61984 13.6541 0.784038 18.9396C-0.0517666 24.225 0.970836 29.6435 3.66892 34.2256C6.367 38.8077 10.5646 42.2546 15.5107 43.9497C16.6089 44.1592 17.0795 43.4664 17.0795 42.8703V39.036C10.9768 40.3893 9.69038 36.0072 9.69038 36.0072C9.26123 34.6263 8.35801 33.4525 7.14889 32.7046C5.15649 31.319 7.30577 31.3352 7.30577 31.3352C8.00171 31.4361 8.66598 31.6991 9.24784 32.1039C9.82969 32.5088 10.3138 33.0449 10.6631 33.6712C11.2707 34.7904 12.2864 35.6161 13.4867 35.9665C14.687 36.317 15.9737 36.1635 17.0638 35.54C17.1524 34.3969 17.6432 33.326 18.4444 32.5273C13.5811 31.9474 8.45101 30.0141 8.45101 21.3788C8.41545 19.1361 9.2248 16.9659 10.7101 15.3213C10.0378 13.3787 10.1164 11.2453 10.9298 9.36036C10.9298 9.36036 12.7653 8.74816 16.9697 11.6642C20.5646 10.6572 24.3565 10.6572 27.9515 11.6642C32.1402 8.74816 33.9757 9.36036 33.9757 9.36036C34.7891 11.2453 34.8677 13.3787 34.1954 15.3213C35.6807 16.9659 36.49 19.1361 36.4545 21.3788C36.4545 30.0463 31.3244 31.9474 26.4297 32.5112C26.954 33.057 27.3584 33.7118 27.6154 34.4316C27.8725 35.1514 27.9764 35.9194 27.9201 36.6839V42.8703C27.9201 43.6114 28.3123 44.1753 29.4889 43.9497C34.4415 42.2525 38.6434 38.799 41.3411 34.2084C44.0388 29.6178 45.0557 24.1905 44.2096 18.8997C43.3635 13.6089 40.7097 8.80065 36.7241 5.33719C32.7384 1.87373 27.6817 -0.0183883 22.4606 0.00013472Z"
              fill="white"
            />
          </svg>
          <svg
            className="large"
            width="43"
            height="42"
            viewBox="0 0 43 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.8334 0.5C10.2365 0.5 0.833374 9.67924 0.833374 21C0.833374 32.3208 10.2365 41.5 21.8334 41.5C33.4302 41.5 42.8334 32.3208 42.8334 21C42.8334 9.67924 33.4302 0.5 21.8334 0.5ZM31.9256 15.9528C31.9396 16.1679 31.9396 16.3921 31.9396 16.6117C31.9396 23.3291 26.699 31.067 17.1224 31.067C14.1693 31.067 11.4318 30.2296 9.12556 28.7882C9.54744 28.8339 9.95056 28.8522 10.3818 28.8522C12.8193 28.8522 15.0599 28.0469 16.8459 26.6833C14.5584 26.6375 12.6365 25.1732 11.9802 23.1598C12.7818 23.2742 13.5037 23.2742 14.3287 23.0683C13.1508 22.8347 12.0922 22.2102 11.3325 21.301C10.5729 20.3918 10.1591 19.2539 10.1615 18.0806V18.0165C10.8506 18.3963 11.6615 18.6297 12.5099 18.6617C11.7967 18.1977 11.2118 17.569 10.807 16.8315C10.4023 16.094 10.1902 15.2703 10.1896 14.4336C10.1896 13.4864 10.4427 12.6215 10.8974 11.8711C12.2048 13.4422 13.8362 14.7271 15.6856 15.6424C17.5349 16.5577 19.5609 17.0828 21.6318 17.1837C20.8959 13.7289 23.5396 10.933 26.7178 10.933C28.2178 10.933 29.5677 11.5462 30.5193 12.5346C31.6959 12.3195 32.8209 11.8894 33.824 11.3128C33.4349 12.4888 32.6193 13.4818 31.5365 14.1087C32.5865 13.9989 33.599 13.7152 34.5365 13.3171C33.8287 14.3329 32.9427 15.2344 31.9256 15.9528Z"
              fill="white"
            />
          </svg>
          <svg
            className="large"
            width="49"
            height="48"
            viewBox="0 0 49 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39.4666 6H8.86663C7.36663 6 6.16663 7.2 6.16663 8.55V39.3C6.16663 40.65 7.36663 41.85 8.86663 41.85H39.4666C40.9666 41.85 42.1666 40.65 42.1666 39.3V8.55C42.1666 7.2 40.9666 6 39.4666 6ZM16.8166 36.6H11.5666V19.5H16.8166V36.6ZM14.2666 17.1C12.6166 17.1 11.1166 15.75 11.1166 13.95C11.1166 12.15 12.4666 10.8 14.2666 10.8C15.9166 10.8 17.4166 12.15 17.4166 13.95C17.4166 15.75 15.9166 17.1 14.2666 17.1ZM36.9166 36.45H31.6666V28.05C31.6666 26.1 31.6666 23.4 28.8166 23.4C25.9666 23.4 25.6666 25.65 25.6666 27.75V36.3H20.4166V19.5H25.3666V21.75H25.5166C26.2666 20.4 28.0666 18.9 30.6166 18.9C36.0166 18.9 37.0666 22.5 37.0666 27.15V36.45H36.9166Z"
              fill="white"
            />
          </svg>
          <svg
            className="large"
            width="51"
            height="48"
            viewBox="0 0 51 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.8235 22.3605C21.3695 22.3237 20.9145 22.4192 20.5181 22.6348C20.1216 22.8503 19.8022 23.1757 19.6015 23.5683C19.4009 23.961 19.3285 24.4027 19.3936 24.8356C19.4588 25.2685 19.6587 25.6724 19.9669 25.9944C20.2752 26.3165 20.6776 26.5417 21.1214 26.6406C21.5652 26.7394 22.0297 26.7074 22.4543 26.5486C22.8788 26.3898 23.2435 26.1117 23.5006 25.7506C23.7577 25.3896 23.8953 24.9624 23.8954 24.525C23.9075 24.2523 23.8636 23.9799 23.766 23.7234C23.6684 23.467 23.5192 23.2315 23.3267 23.0305C23.1343 22.8295 22.9025 22.6668 22.6446 22.5519C22.3866 22.4369 22.1076 22.3719 21.8235 22.3605ZM29.2376 22.3605C28.7836 22.3237 28.3286 22.4192 27.9321 22.6348C27.5357 22.8503 27.2162 23.1757 27.0156 23.5683C26.815 23.961 26.7425 24.4027 26.8077 24.8356C26.8729 25.2685 27.0727 25.6724 27.381 25.9944C27.6893 26.3165 28.0916 26.5417 28.5354 26.6406C28.9792 26.7394 29.4438 26.7074 29.8683 26.5486C30.2928 26.3898 30.6575 26.1117 30.9147 25.7506C31.1718 25.3896 31.3094 24.9624 31.3094 24.525C31.3216 24.2523 31.2776 23.9799 31.1801 23.7234C31.0825 23.467 30.9332 23.2315 30.7408 23.0305C30.5484 22.8295 30.3166 22.6668 30.0586 22.5519C29.8007 22.4369 29.5217 22.3719 29.2376 22.3605Z"
              fill="white"
            />
            <path
              d="M39.1094 6H11.8906C11.3424 6.00118 10.7999 6.10603 10.2939 6.30856C9.78791 6.51109 9.32845 6.80734 8.94176 7.18037C8.55507 7.5534 8.24873 7.99591 8.04022 8.48263C7.83172 8.96935 7.72514 9.49073 7.72658 10.017V36.381C7.72514 36.9073 7.83172 37.4287 8.04022 37.9154C8.24873 38.4021 8.55507 38.8446 8.94176 39.2176C9.32845 39.5907 9.78791 39.8869 10.2939 40.0894C10.7999 40.292 11.3424 40.3968 11.8906 40.398H34.925L33.8485 36.7905L36.4485 39.111L38.9063 41.295L43.2735 45V10.017C43.2749 9.49073 43.1683 8.96935 42.9598 8.48263C42.7513 7.99591 42.445 7.5534 42.0583 7.18037C41.6716 6.80734 41.2121 6.51109 40.7062 6.30856C40.2002 6.10603 39.6576 6.00118 39.1094 6ZM31.2688 31.467C31.2688 31.467 30.5375 30.6285 29.9281 29.8875C31.4005 29.5547 32.7028 28.7327 33.6047 27.567C32.8738 28.0339 32.0902 28.4199 31.2688 28.7175C30.3238 29.1047 29.3355 29.3861 28.3235 29.556C26.5838 29.8635 24.7997 29.8569 23.0625 29.5365C22.0427 29.3449 21.0432 29.0643 20.0766 28.698C19.5671 28.5099 19.0716 28.2884 18.5938 28.035C18.5328 27.996 18.4719 27.9765 18.411 27.9375C18.3804 27.9229 18.3529 27.9031 18.3297 27.879C18.1348 27.7771 17.9451 27.6664 17.761 27.5475C18.6302 28.6888 19.8876 29.5027 21.3156 29.8485C20.7063 30.5895 19.9547 31.467 19.9547 31.467C18.7481 31.4982 17.552 31.2442 16.4717 30.7274C15.3913 30.2105 14.4599 29.4466 13.7594 28.503C13.8253 24.5498 14.8255 20.6626 16.6844 17.1345C18.3202 15.9011 20.3146 15.1856 22.3922 15.087L22.5953 15.321C20.6407 15.7854 18.8167 16.6575 17.2531 17.8755C17.2531 17.8755 17.7 17.6415 18.4516 17.31C19.9117 16.6702 21.4678 16.2556 23.0625 16.0815C23.1762 16.0589 23.2918 16.0459 23.4078 16.0425C24.769 15.8723 26.1465 15.8592 27.511 16.0035C29.6566 16.2387 31.7337 16.8747 33.625 17.8755C32.1407 16.7156 30.4167 15.8715 28.5672 15.399L28.8516 15.087C30.9291 15.1856 32.9235 15.9011 34.5594 17.1345C36.4183 20.6626 37.4184 24.5498 37.4844 28.503C36.7782 29.4457 35.8428 30.2085 34.7595 30.7251C33.6763 31.2416 32.4779 31.4963 31.2688 31.467Z"
              fill="white"
            />
          </svg>
          <svg
            className="small"
            width="28"
            height="29"
            viewBox="0 0 28 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.9749 0.318689C10.6567 0.319148 7.44691 1.53191 4.91967 3.74004C2.39243 5.94816 0.712627 9.0076 0.180751 12.3711C-0.351124 15.7345 0.299623 19.1826 2.01659 22.0985C3.73355 25.0144 6.40472 27.2079 9.55227 28.2866C10.2511 28.4199 10.5506 27.979 10.5506 27.5997V25.1597C6.66706 26.0209 5.84843 23.2323 5.84843 23.2323C5.57533 22.3535 5.00055 21.6066 4.23111 21.1306C2.96322 20.2489 4.33095 20.2592 4.33095 20.2592C4.77382 20.3234 5.19653 20.4907 5.5668 20.7484C5.93708 21.006 6.24512 21.3471 6.4674 21.7457C6.8541 22.458 7.50041 22.9834 8.26424 23.2064C9.02807 23.4294 9.84687 23.3318 10.5406 22.935C10.597 22.2076 10.9093 21.5261 11.4192 21.0178C8.32431 20.6487 5.05974 19.4185 5.05974 13.9233C5.0371 12.4961 5.55214 11.1151 6.49735 10.0685C6.06952 8.83229 6.11954 7.47468 6.63711 6.2752C6.63711 6.2752 7.80517 5.88562 10.4807 7.74126C12.7684 7.10045 15.1814 7.10045 17.4691 7.74126C20.1347 5.88562 21.3027 6.2752 21.3027 6.2752C21.8203 7.47468 21.8703 8.83229 21.4425 10.0685C22.3877 11.1151 22.9027 12.4961 22.8801 13.9233C22.8801 19.439 19.6155 20.6487 16.5007 21.0076C16.8344 21.3549 17.0917 21.7716 17.2553 22.2296C17.4189 22.6877 17.485 23.1764 17.4491 23.6629V27.5997C17.4491 28.0713 17.6987 28.4301 18.4475 28.2866C21.5992 27.2066 24.2731 25.0089 25.9898 22.0876C27.7065 19.1663 28.3536 15.7126 27.8152 12.3457C27.2768 8.97881 25.588 5.91902 23.0517 3.715C20.5154 1.51098 17.2974 0.306902 13.9749 0.318689Z"
              fill="#858585"
            />
          </svg>
          <svg
            className="small"
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 0.318604C6.04487 0.318604 0 6.13959 0 13.3186C0 20.4976 6.04487 26.3186 13.5 26.3186C20.9551 26.3186 27 20.4976 27 13.3186C27 6.13959 20.9551 0.318604 13.5 0.318604ZM19.9878 10.1179C19.9969 10.2543 19.9969 10.3965 19.9969 10.5358C19.9969 14.7956 16.6279 19.7025 10.4715 19.7025C8.5731 19.7025 6.81328 19.1715 5.33069 18.2574C5.6019 18.2865 5.86105 18.2981 6.13828 18.2981C7.70525 18.2981 9.14565 17.7874 10.2938 16.9226C8.82321 16.8936 7.58772 15.965 7.16585 14.6882C7.68114 14.7608 8.1452 14.7608 8.67556 14.6302C7.91837 14.4821 7.23779 14.0861 6.74945 13.5095C6.2611 12.9329 5.9951 12.2113 5.99665 11.4673V11.4266C6.43962 11.6675 6.96094 11.8155 7.50636 11.8358C7.04785 11.5415 6.67183 11.1429 6.41163 10.6752C6.15143 10.2075 6.0151 9.68514 6.01473 9.15454C6.01473 8.55387 6.17746 8.00543 6.46976 7.52954C7.3102 8.52583 8.35894 9.34067 9.54783 9.92109C10.7367 10.5015 12.0391 10.8345 13.3704 10.8985C12.8973 8.70767 14.5969 6.93467 16.64 6.93467C17.6042 6.93467 18.4721 7.32351 19.0838 7.9503C19.8402 7.81392 20.5634 7.54115 21.2083 7.17552C20.9581 7.92128 20.4338 8.55097 19.7377 8.94851C20.4127 8.87887 21.0636 8.69896 21.6663 8.44651C21.2113 9.0907 20.6417 9.66235 19.9878 10.1179Z"
              fill="#858585"
            />
          </svg>
          <svg
            className="small"
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.3813 4.0686H5.61875C4.65 4.0686 3.875 4.8186 3.875 5.66235V24.8811C3.875 25.7249 4.65 26.4749 5.61875 26.4749H25.3813C26.35 26.4749 27.125 25.7249 27.125 24.8811V5.66235C27.125 4.8186 26.35 4.0686 25.3813 4.0686ZM10.7531 23.1936H7.3625V12.5061H10.7531V23.1936ZM9.10625 11.0061C8.04062 11.0061 7.07188 10.1624 7.07188 9.03735C7.07188 7.91235 7.94375 7.0686 9.10625 7.0686C10.1719 7.0686 11.1406 7.91235 11.1406 9.03735C11.1406 10.1624 10.1719 11.0061 9.10625 11.0061ZM23.7344 23.0999H20.3438V17.8499C20.3438 16.6311 20.3438 14.9436 18.5031 14.9436C16.6625 14.9436 16.4688 16.3499 16.4688 17.6624V23.0061H13.0781V12.5061H16.275V13.9124H16.3719C16.8562 13.0686 18.0187 12.1311 19.6656 12.1311C23.1531 12.1311 23.8313 14.3811 23.8313 17.2874V23.0999H23.7344Z"
              fill="#858585"
            />
          </svg>
          <svg
            className="small"
            width="32"
            height="31"
            viewBox="0 0 32 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.647 14.2939C13.3564 14.2709 13.0653 14.3306 12.8115 14.4653C12.5578 14.6 12.3533 14.8034 12.2249 15.0488C12.0965 15.2942 12.0502 15.5703 12.0919 15.8408C12.1336 16.1114 12.2615 16.3638 12.4588 16.5651C12.6561 16.7664 12.9136 16.9071 13.1976 16.9689C13.4817 17.0307 13.779 17.0107 14.0507 16.9114C14.3224 16.8122 14.5558 16.6384 14.7203 16.4127C14.8849 16.187 14.973 15.9201 14.973 15.6467C14.9808 15.4762 14.9526 15.306 14.8902 15.1457C14.8278 14.9854 14.7322 14.8383 14.6091 14.7126C14.4859 14.587 14.3376 14.4854 14.1725 14.4135C14.0074 14.3416 13.8288 14.301 13.647 14.2939ZM18.392 14.2939C18.1015 14.2709 17.8103 14.3306 17.5565 14.4653C17.3028 14.6 17.0983 14.8034 16.9699 15.0488C16.8415 15.2942 16.7952 15.5703 16.8369 15.8408C16.8786 16.1114 17.0065 16.3638 17.2038 16.5651C17.4011 16.7664 17.6586 16.9071 17.9426 16.9689C18.2267 17.0307 18.524 17.0107 18.7957 16.9114C19.0674 16.8122 19.3008 16.6384 19.4653 16.4127C19.6299 16.187 19.718 15.9201 19.718 15.6467C19.7258 15.4762 19.6976 15.306 19.6352 15.1457C19.5728 14.9854 19.4772 14.8383 19.3541 14.7126C19.2309 14.587 19.0826 14.4854 18.9175 14.4135C18.7524 14.3416 18.5738 14.301 18.392 14.2939Z"
              fill="#858585"
            />
            <path
              d="M24.71 4.0686H7.28999C6.93915 4.06934 6.5919 4.13487 6.26807 4.26145C5.94425 4.38804 5.65019 4.57319 5.40271 4.80633C5.15523 5.03948 4.95917 5.31605 4.82573 5.62025C4.69228 5.92445 4.62407 6.25031 4.62499 6.57923V23.0567C4.62407 23.3856 4.69228 23.7115 4.82573 24.0157C4.95917 24.3199 5.15523 24.5965 5.40271 24.8296C5.65019 25.0628 5.94425 25.2479 6.26807 25.3745C6.5919 25.5011 6.93915 25.5666 7.28999 25.5674H22.032L21.343 23.3127L23.007 24.763L24.58 26.128L27.375 28.4436V6.57923C27.3759 6.25031 27.3077 5.92445 27.1743 5.62025C27.0408 5.31605 26.8448 5.03948 26.5973 4.80633C26.3498 4.57319 26.0557 4.38804 25.7319 4.26145C25.4081 4.13487 25.0608 4.06934 24.71 4.0686ZM19.692 19.9855C19.692 19.9855 19.224 19.4614 18.834 18.9983C19.7763 18.7903 20.6098 18.2766 21.187 17.548C20.7192 17.8398 20.2177 18.081 19.692 18.267C19.0872 18.5091 18.4547 18.6849 17.807 18.7911C16.6936 18.9833 15.5518 18.9791 14.44 18.7789C13.7873 18.6592 13.1476 18.4838 12.529 18.2549C12.2029 18.1373 11.8858 17.9988 11.58 17.8405C11.541 17.8161 11.502 17.8039 11.463 17.7795C11.4434 17.7704 11.4258 17.758 11.411 17.743C11.2863 17.6793 11.1648 17.6101 11.047 17.5358C11.6033 18.2491 12.408 18.7578 13.322 18.9739C12.932 19.437 12.451 19.9855 12.451 19.9855C11.6788 20.005 10.9133 19.8462 10.2219 19.5232C9.53044 19.2002 8.93434 18.7228 8.48599 18.133C8.5282 15.6622 9.16829 13.2327 10.358 11.0277C11.4049 10.2568 12.6814 9.80962 14.011 9.74798L14.141 9.89423C12.89 10.1845 11.7227 10.7296 10.722 11.4908C10.722 11.4908 11.008 11.3445 11.489 11.1374C12.4234 10.7375 13.4194 10.4783 14.44 10.3695C14.5128 10.3554 14.5867 10.3473 14.661 10.3452C15.5322 10.2388 16.4138 10.2306 17.287 10.3208C18.6602 10.4678 19.9895 10.8653 21.2 11.4908C20.25 10.7659 19.1467 10.2383 17.963 9.94298L18.145 9.74798C19.4746 9.80962 20.7511 10.2568 21.798 11.0277C22.9877 13.2327 23.6278 15.6622 23.67 18.133C23.218 18.7222 22.6194 19.1989 21.9261 19.5218C21.2328 19.8446 20.4659 20.0038 19.692 19.9855Z"
              fill="#858585"
            />
          </svg>
        </div>
      </div>
      <div className="lg:basis-1/2 flex items-center justify-center lg:justify-normal">
        <div className="flex flex-col lg:gap-[2vw] lg:w-[30vw] lg:ml-[6.5vw]">
          <div className="ml-6 lg:ml-0 m-7 lg:m-0">
            <h2 className="font-bold font-montserrat text-[24px] lg:text-[36px]">
              Sign In
            </h2>
            <p className="font-lato text-[12px] lg:text-[16px]">
              Sign in to your account
            </p>
          </div>
          <div className="flex gap-7 mb-7 lg:mb-0">
            <div className="bg-[white] flex items-center gap-[11px] px-[21px] rounded-[10px] cursor-pointer">
              <svg
                className="my-[9px]"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1163_66)">
                  <path
                    d="M15.4001 8.116C15.4001 7.48636 15.3478 7.02688 15.2346 6.5504H7.87695V9.39229H12.1957C12.1087 10.0985 11.6385 11.1621 10.5936 11.8768L10.579 11.972L12.9053 13.7331L13.0665 13.7488C14.5467 12.4129 15.4001 10.4474 15.4001 8.116Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M7.87696 15.6037C9.9928 15.6037 11.7691 14.923 13.0665 13.7488L10.5936 11.8768C9.93187 12.3278 9.04371 12.6426 7.87696 12.6426C5.80464 12.6426 4.04578 11.3068 3.4188 9.4604L3.32689 9.46803L0.907916 11.2974L0.876282 11.3834C2.16495 13.8849 4.81197 15.6037 7.87696 15.6037Z"
                    fill="#34A853"
                  />
                  <path
                    d="M3.41874 9.4604C3.2533 8.98391 3.15756 8.47335 3.15756 7.94583C3.15756 7.41825 3.2533 6.90775 3.41003 6.43126L3.40565 6.32978L0.95636 4.47101L0.876224 4.50826C0.345103 5.54634 0.0403442 6.71206 0.0403442 7.94583C0.0403442 9.1796 0.345103 10.3453 0.876224 11.3833L3.41874 9.4604Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M7.87696 3.24898C9.34847 3.24898 10.3411 3.87011 10.9071 4.38918L13.1187 2.279C11.7604 1.04523 9.9928 0.287949 7.87696 0.287949C4.81197 0.287949 2.16495 2.0067 0.876282 4.50826L3.41009 6.43127C4.04578 4.58487 5.80464 3.24898 7.87696 3.24898Z"
                    fill="#EB4335"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1163_66">
                    <rect
                      width="15.3686"
                      height="15.3686"
                      fill="white"
                      transform="translate(0.0396118 0.287949)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <p className="font-montserrat text-[10px] lg:text-[12px] mt-[9px] mb-[8px]">
                Sign in with Google
              </p>
            </div>
            <div className="bg-[white] flex items-center gap-[11px] px-[21px] rounded-[10px] cursor-pointer">
              <svg
                className="mt-[8px] mb-[10px]"
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1163_74)">
                  <path
                    d="M7.53348 1.52879C8.55093 0.197925 9.96544 0.191437 9.96544 0.191437C9.96544 0.191437 10.1758 1.44268 9.16505 2.64802C8.08578 3.93506 6.85904 3.72446 6.85904 3.72446C6.85904 3.72446 6.62869 2.71225 7.53348 1.52879ZM6.98845 4.60095C7.51188 4.60095 8.48334 3.8869 9.74783 3.8869C11.9244 3.8869 12.7807 5.42395 12.7807 5.42395C12.7807 5.42395 11.106 6.2737 11.106 8.33559C11.106 10.6616 13.1922 11.4632 13.1922 11.4632C13.1922 11.4632 11.7339 15.5368 9.76404 15.5368C8.8593 15.5368 8.15592 14.9317 7.20264 14.9317C6.23118 14.9317 5.26715 15.5594 4.63927 15.5594C2.84051 15.5594 0.568054 11.6952 0.568054 8.58896C0.568054 5.53288 2.49154 3.92971 4.29569 3.92971C5.46855 3.92971 6.3787 4.60095 6.98845 4.60095Z"
                    fill="#999999"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1163_74">
                    <rect
                      width="12.6242"
                      height="15.3686"
                      fill="white"
                      transform="translate(0.568054 0.190186)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <p className="font-montserrat text-[10px] lg:text-[12px] mt-[9px] mb-[8px]">
                Sign in with Apple
              </p>
            </div>
          </div>
          <div className="bg-[white] flex flex-col p-[33px] gap-[22px]">
            <div className="flex flex-col">
              <label htmlFor="email" className="font-lato mb-[11px]">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                value={formValues.email}
                className="bg-bginput h-11 rounded-[10px] font-lato px-4 focus:bg-bgfocus focus-visible:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="font-lato mb-[11px]">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                value={formValues.password}
                className="bg-bginput h-11 rounded-[10px] font-lato px-4 focus:bg-bgfocus focus-visible:outline-none"
              />
            </div>
            {formError && (
              <p className="text-textwarn font-lato">{formError}</p>
            )}
            <p className="font-lato text-link cursor-pointer">
              Forgot password?
            </p>
            <button
              className="bg-primary h-11 rounded-[10px] font-bold font-montserrat text-[white]"
              onClick={handleSignIn}
            >
              Sign In
            </button>
          </div>
          <div className="mt-6 lg:mt-0">
            <p className="font-lato text-center">
              Don’t have an account?{' '}
              <span className="text-link block lg:inline mt-4 cursor-pointer">
                Register here
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
