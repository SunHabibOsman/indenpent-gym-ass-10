import React from 'react';

const Blog = () => {
  return (
    <div className=''>
      <h1 className='fw-bold'>BLOG</h1>
      <hr />
      <div className='text-start container'  >
        <div> <h1 className='fw-bold text-start'>Q:Difference between authorization and authentication</h1>
          <p className='text-start'>Ans:authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board. The first step is to confirm the identity of a passenger to make sure they are who they say they are. Once a passenger’s identity has been determined, the second step is verifying any special services the passenger has access to, whether it’s flying first-class or visiting the VIP lounge.</p></div>
        <div><h1 className='fw-bold text-start' >Q:Why are you using firebase? What other options do you have to implement authentication?</h1>
          <p>Ans:Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more</p>

        </div>
        <div>
          <h1 className='fw-bold'>Q:What other services does firebase provide other than authentication</h1>
          <ul>Ans:Here some firebase services except authentication,
            <li> Cloud Firestore</li>
            <li> Cloud Functions</li>
            <li>      Hosting</li>
            <li>  Cloud Storage</li>
            <li>Google Analytics</li>
            <li> Predictions</li>
            <li>  Cloud Messaging</li>
            <li>Dynamic Links</li>
            <li>Remote Config</li>









          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blog;