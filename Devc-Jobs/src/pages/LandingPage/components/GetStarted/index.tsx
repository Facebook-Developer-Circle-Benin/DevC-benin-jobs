import React from 'react';
import developer from '../../assets/dev.png';
import { Link } from 'react-router-dom';
const GetStarted: React.FC = () => {
  return (
    <section className="d-flex align-items-stretch">
      <div className="flex-equal-break-md developer">
        <img src={developer} alt="developer" />
      </div>
      <article className="flex-equal-break-md padding-lg bg-gray-medium padding-right-xlg">
        <h2 className="font-lg font-weight-600 margin-bottom-md">
          Connect With Skilled Minds
        </h2>
        <p className="font-sm text-content margin-bottom-sm">
          We streamline recruitment process for companies. Talent Pool allows
          companies to find the perfect match for their job roles. Intern Library
        </p>
        <div className="d-flex column margin-bottom-md">
          <div className="d-flex">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="margin-right-sm">
              <g clip-path="url(#clip0)">
                <path
                  d="M25.5 24.4373L17.0272 15.9644C18.411 14.3304 19.25 12.2211 19.25 9.917C19.25 4.74731 15.0447 0.541992 9.87501 0.541992C4.70536 0.541992 0.5 4.74731 0.5 9.917C0.5 15.0867 4.70531 19.292 9.87501 19.292C12.1791 19.292 14.2884 18.453 15.9225 17.0692L24.3953 25.542L25.5 24.4373ZM9.87501 17.7295C5.56745 17.7295 2.06252 14.2246 2.06252 9.917C2.06252 5.60944 5.56745 2.10451 9.87501 2.10451C14.1826 2.10451 17.6875 5.60944 17.6875 9.917C17.6875 14.2246 14.1826 17.7295 9.87501 17.7295Z"
                  fill="#084482"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect
                    width="25"
                    height="25"
                    fill="white"
                    transform="translate(0.5 0.541992)"
                  />
                </clipPath>
              </defs>
            </svg>
            <div className="d-flex column flex-equal">
              <h3 className="capitalize font-md font-weight-500">
                Find Top talent easily
              </h3>
              <p className="text-content font-sm font-weight-400">
                Sign up as an employer and search for interns based track and
                skillset.
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex column margin-bottom-md">
          <div className="d-flex">
            <svg
              className="margin-right-sm"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0)">
                <path
                  d="M10.3958 15.7502H4.14583C3.85833 15.7502 3.625 15.5168 3.625 15.2293C3.625 14.9418 3.85833 14.7085 4.14583 14.7085H10.3958C10.6833 14.7085 10.9167 14.9418 10.9167 15.2293C10.9167 15.5168 10.6833 15.7502 10.3958 15.7502Z"
                  fill="#084482"
                />
                <path
                  d="M9.35417 18.8752H4.14583C3.85833 18.8752 3.625 18.6418 3.625 18.3543C3.625 18.0668 3.85833 17.8335 4.14583 17.8335H9.35417C9.64167 17.8335 9.875 18.0668 9.875 18.3543C9.875 18.6418 9.64167 18.8752 9.35417 18.8752Z"
                  fill="#084482"
                />
                <path
                  d="M9.35408 7.41678C8.20513 7.41678 7.27075 6.48241 7.27075 5.33345C7.27075 4.1845 8.20513 3.25012 9.35408 3.25012C10.503 3.25012 11.4374 4.1845 11.4374 5.33345C11.4374 6.48241 10.503 7.41678 9.35408 7.41678ZM9.35408 4.29179C8.78012 4.29179 8.31242 4.7595 8.31242 5.33345C8.31242 5.90741 8.78012 6.37512 9.35408 6.37512C9.92804 6.37512 10.3957 5.90741 10.3957 5.33345C10.3957 4.7595 9.92804 4.29179 9.35408 4.29179Z"
                  fill="#084482"
                />
                <path
                  d="M13 12.6252C12.7125 12.6252 12.4792 12.3918 12.4792 12.1043V11.0627C12.4792 10.2012 11.7781 9.50016 10.9167 9.50016H7.79166C6.93021 9.50016 6.22917 10.2012 6.22917 11.0627V12.1043C6.22917 12.3918 5.99583 12.6252 5.70833 12.6252C5.42083 12.6252 5.1875 12.3918 5.1875 12.1043V11.0627C5.1875 9.62724 6.35625 8.4585 7.79166 8.4585H10.9167C12.3521 8.4585 13.5208 9.62724 13.5208 11.0627V12.1043C13.5208 12.3918 13.2875 12.6252 13 12.6252Z"
                  fill="#084482"
                />
                <path
                  d="M10.3958 22.0001H3.10417C1.66875 22.0001 0.5 20.8314 0.5 19.396V2.72929C0.5 1.29387 1.66875 0.125122 3.10417 0.125122H15.6042C17.0396 0.125122 18.2083 1.29387 18.2083 2.72929V9.04179C18.2083 9.32929 17.975 9.56262 17.6875 9.56262C17.4 9.56262 17.1667 9.32929 17.1667 9.04179V2.72929C17.1667 1.86783 16.4656 1.16679 15.6042 1.16679H3.10417C2.24271 1.16679 1.54167 1.86783 1.54167 2.72929V19.396C1.54167 20.2574 2.24271 20.9585 3.10417 20.9585H10.3958C10.6833 20.9585 10.9167 21.1918 10.9167 21.4793C10.9167 21.7668 10.6833 22.0001 10.3958 22.0001Z"
                  fill="#084482"
                />
                <path
                  d="M18.7291 25.1252C14.9958 25.1252 11.9583 22.0877 11.9583 18.3543C11.9583 14.621 14.9958 11.5835 18.7291 11.5835C22.4624 11.5835 25.4999 14.621 25.4999 18.3543C25.4999 22.0877 22.4624 25.1252 18.7291 25.1252ZM18.7291 12.6252C15.5697 12.6252 12.9999 15.195 12.9999 18.3543C12.9999 21.5137 15.5697 24.0835 18.7291 24.0835C21.8885 24.0835 24.4583 21.5137 24.4583 18.3543C24.4583 15.195 21.8885 12.6252 18.7291 12.6252Z"
                  fill="#084482"
                />
                <path
                  d="M17.6874 20.9585C17.5499 20.9585 17.4166 20.9033 17.3187 20.8064L15.2354 18.7231C15.0322 18.5199 15.0322 18.1897 15.2354 17.9866C15.4385 17.7835 15.7687 17.7835 15.9718 17.9866L17.6614 19.6762L20.9405 15.9283C21.1301 15.7106 21.4593 15.6887 21.676 15.8793C21.8926 16.0689 21.9145 16.3981 21.7249 16.6147L18.0791 20.7814C17.9843 20.8897 17.8478 20.9543 17.7041 20.9585C17.6989 20.9585 17.6926 20.9585 17.6874 20.9585Z"
                  fill="#084482"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect
                    width="25"
                    height="25"
                    fill="white"
                    transform="translate(0.5 0.125122)"
                  />
                </clipPath>
              </defs>
            </svg>
            <div className="d-flex column flex-equal">
              <h3 className="capitalize font-md font-weight-500">
                Recruit the best intern
              </h3>
              <p className="text-content font-sm font-weight-400">
                Choose from the available interns and recruit the best candidate into
                your company.
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex column margin-bottom-md">
          <div className="d-flex">
            <svg
              className="margin-right-sm"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0)">
                <path
                  d="M4.66675 6.54175C3.97759 6.54175 3.41675 7.10259 3.41675 7.79175V11.1251C3.41675 11.8143 3.97759 12.3751 4.66675 12.3751C5.35591 12.3751 5.91675 11.8143 5.91675 11.1251V7.79175C5.91675 7.10259 5.35591 6.54175 4.66675 6.54175ZM5.08345 11.125C5.08345 11.355 4.89678 11.5417 4.6668 11.5417C4.43682 11.5417 4.25015 11.355 4.25015 11.125V7.7917C4.25015 7.56172 4.43682 7.37505 4.6668 7.37505C4.89678 7.37505 5.08345 7.56172 5.08345 7.7917V11.125Z"
                  fill="#084482"
                />
                <path
                  d="M21.3333 6.54175C20.6441 6.54175 20.0833 7.10259 20.0833 7.79175V11.1251C20.0833 11.8143 20.6441 12.3751 21.3333 12.3751C22.0224 12.3751 22.5833 11.8143 22.5833 11.1251V7.79175C22.5833 7.10259 22.0224 6.54175 21.3333 6.54175ZM21.7499 11.125C21.7499 11.355 21.5632 11.5417 21.3333 11.5417C21.1033 11.5417 20.9166 11.355 20.9166 11.125V7.7917C20.9166 7.56172 21.1033 7.37505 21.3333 7.37505C21.5632 7.37505 21.7499 7.56172 21.7499 7.7917V11.125Z"
                  fill="#084482"
                />
                <path
                  d="M21.3575 6.93171C20.25 3.26755 16.8133 0.708374 13 0.708374C9.18667 0.708374 5.75 3.26755 4.64248 6.93171C4.57583 7.15173 4.70039 7.38464 4.9208 7.4509C5.14165 7.51799 5.37373 7.39299 5.44038 7.17258C6.44248 3.85754 9.55083 1.54172 13 1.54172C16.4492 1.54172 19.5575 3.85754 20.5596 7.17258C20.6142 7.353 20.7796 7.46882 20.9583 7.46882C20.9983 7.46882 21.0387 7.46296 21.0791 7.4509C21.2996 7.38464 21.4242 7.15168 21.3575 6.93171Z"
                  fill="#084482"
                />
                <path
                  d="M21.3334 11.5417C21.1034 11.5417 20.9168 11.728 20.9168 11.9584C20.9168 13.1071 19.9822 14.0417 18.8334 14.0417C18.6034 14.0417 18.4167 14.228 18.4167 14.4584C18.4167 14.6888 18.6034 14.875 18.8334 14.875C20.4418 14.875 21.7501 13.5663 21.7501 11.9584C21.7501 11.728 21.5634 11.5417 21.3334 11.5417Z"
                  fill="#084482"
                />
                <path
                  d="M18 12.7917H15.5C14.8108 12.7917 14.25 13.3526 14.25 14.0417V14.8751C14.25 15.5643 14.8108 16.1251 15.5 16.1251H18C18.6892 16.1251 19.25 15.5643 19.25 14.8751V14.0417C19.25 13.3526 18.6892 12.7917 18 12.7917ZM18.4166 14.875C18.4166 15.105 18.23 15.2917 18 15.2917H15.5C15.27 15.2917 15.0833 15.105 15.0833 14.875V14.0417C15.0833 13.8117 15.27 13.625 15.5 13.625H18C18.23 13.625 18.4166 13.8117 18.4166 14.0417V14.875Z"
                  fill="#084482"
                />
                <path
                  d="M12.9999 2.79175C9.32363 2.79175 6.33325 5.78257 6.33325 9.4584C6.33325 13.1342 9.32363 16.1251 12.9999 16.1251C13.6799 16.1251 14.3532 16.0221 15.0012 15.8188C15.1353 15.7763 15.2395 15.6692 15.2774 15.5338C15.3154 15.398 15.2824 15.2525 15.1895 15.1463C15.1412 15.0913 15.0833 14.9992 15.0833 14.875V14.0417C15.0833 13.8117 15.2699 13.625 15.4999 13.625H17.9912C18.1224 13.625 18.2457 13.5638 18.3245 13.4592C19.2024 12.2921 19.6666 10.9088 19.6666 9.4584C19.6665 5.78257 16.6762 2.79175 12.9999 2.79175ZM17.7791 12.7917H15.4999C14.8107 12.7917 14.2499 13.3526 14.2499 14.0417V14.8751C14.2499 14.968 14.2607 15.0601 14.2816 15.1497C13.8616 15.2442 13.4324 15.2917 12.9999 15.2917C9.78325 15.2917 7.16655 12.6751 7.16655 9.4584C7.16655 6.2417 9.78325 3.62505 12.9999 3.62505C16.2166 3.62505 18.8333 6.24175 18.8333 9.4584C18.8333 10.6584 18.4695 11.8067 17.7791 12.7917Z"
                  fill="#084482"
                />
                <path
                  d="M17.3283 16.9584H8.67119C6.00371 16.9584 3.83325 19.1288 3.83325 21.7963V25.2917C3.83325 25.5221 4.01992 25.7084 4.2499 25.7084H21.7499C21.9799 25.7084 22.1666 25.5221 22.1666 25.2917V21.7963C22.1666 19.1288 19.9962 16.9584 17.3283 16.9584ZM21.3333 24.875H4.6666V21.7963C4.6666 19.5884 6.46328 17.7917 8.67119 17.7917H17.3287C19.5366 17.7917 21.3333 19.5879 21.3333 21.7963V24.875Z"
                  fill="#084482"
                />
                <path
                  d="M7.5834 21.9584C7.35342 21.9584 7.16675 22.1446 7.16675 22.375V25.2917C7.16675 25.5221 7.35342 25.7083 7.5834 25.7083C7.81338 25.7083 8.00005 25.5221 8.00005 25.2917V22.375C8.00005 22.1446 7.81338 21.9584 7.5834 21.9584Z"
                  fill="#084482"
                />
                <path
                  d="M18.8334 21.9584C18.6034 21.9584 18.4167 22.1446 18.4167 22.375V25.2917C18.4167 25.5221 18.6034 25.7083 18.8334 25.7083C19.0634 25.7083 19.2501 25.5221 19.2501 25.2917V22.375C19.2501 22.1446 19.0634 21.9584 18.8334 21.9584Z"
                  fill="#084482"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect
                    width="25"
                    height="25"
                    fill="white"
                    transform="translate(0.5 0.708374)"
                  />
                </clipPath>
              </defs>
            </svg>
            <div className="d-flex column flex-equal">
              <h3 className="capitalize font-md font-weight-500">
                Speak With Industry Experts
              </h3>
              <p className="text-content font-sm font-weight-400">
                Not sure what you’re looking for? Request for a recommendation.
              </p>
            </div>
          </div>
        </div>
        <Link
          to="/signup"
          type="button"
          className="btn-primary ripple-primary-dark font-sm">
          Get Started
        </Link>
      </article>
    </section>
  );
};

export default GetStarted;