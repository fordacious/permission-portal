import React from 'react';

const AccountBranding = () => {
  return (
    <main className='mainContiner'>
      <div className='topContainer'>
        <h1>Account Branding</h1>
        <div className='orgLogoContainer'>
          <h2>Organization Logo</h2>
          <p>
            This image will be used to customize your Covid Watch Community
            Tracing Portal and mobile application.
          </p>
          <p>Accepted file types: jpg or png | Maximum file size: __ MB</p>
          <button>Change Image</button>
        </div>

        <div className='phoneContainer'>
          <h2>Main Contact Photo Logo</h2>
          <p>
            This is the phone number that patients will call to get in touch
            with your organization’s contact tracers.
          </p>
          <input
            type='tel'
            id='phone'
            name='phone'
            pattern='[+]{1}[0-9]{11,14}'
            required
          />
        </div>

        <div className='resourseContainer'>
          <h2>Patient Resources</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id mauris
            viverra magna pellentesque.
          </p>
          <div className='border'>
            <p>
              Drive Through Testing Center 1200 Highland Drive, San Francisco,
              CA Hours: 8am-6pm If you can’t use the center listed above, please
              call this number for alternative locations: 1-800-000-0000.{' '}
            </p>
          </div>
        </div>

        <div className='bottomContainer'>
          <h2>Test Notification Templates</h2>

          <div className='testContainer'>
            <p>Postive Test Results</p>
          </div>

          <div className='testContainer'>
            <p>Negative Test Results</p>
          </div>
        </div>

        <div className='resourseContainer'>
          <p>Potential Exposure to COVID-19</p>
        </div>
      </div>
    </main>
  );
};
export default AccountBranding;
